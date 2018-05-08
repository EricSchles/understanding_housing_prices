from glob import glob
import lxml.html
import pandas as pd


def to_text(filename):
    with open(filename, "r") as f:
        return f.read()


def parse_main(town):
    files = glob("html_pages/base_page/"+town+"/*.html")
    for filename in files:
        text = to_text(filename)
        html = lxml.html.fromstring(text)
        links = [link for link in html.xpath("//a/@href") if link.startswith("https://www.trulia.com/p")]
        links = set(links)

    for link in links:
        print(link)
        print()

        
def get_info_type(info):
    if "bed" in info:
        return "num_beds"
    elif "bath" in info:
        return "num_baths"
    elif "lot size" in info:
        return "lot_size"
    elif "Home" in info:
        return "home_style"
    elif "sqft" in info:
        return "square_feet"
    elif "Condo" in info:
        return "home_style"
    elif "Multi-Family" in info:
        return "home_style"

    
def get_headline_metadata(html):
    data = {}
    parsed_info  = html.xpath('//div[contains(@class, "xsCol24")]/ul[contains(@class, "listInlineBulleted")]')
    parsed_info = parsed_info[0].text_content()
    parsed_info = [elem.strip() for elem in parsed_info.split("\n")
                  if elem.strip() != '']
    key_list = [
        "num_beds", "num_baths",
        "lot_size", "home_style",
        "square_feet"
    ]
    key_list = ["headline_"+elem for elem in key_list]
    for info in parsed_info:
        data["headline_"+get_info_type(info)] = info
    for key in key_list:
        if key not in data:
            data[key] = "not listed"
    return data


def money_to_int(money):
    money = money.replace("$","")
    return money.replace(",","")


def get_price(html):
    data = {}
    price = html.xpath('//span[@data-role="price"]')
    price = price[0].text_content()
    price = price.strip()
    try:
        old_price = html.xpath('//span[@id="priceChangeTooltip"]/p[@class="typeStrikethrough"]')[0].text_content()
    except:
        old_price = "not listed"
    try:
        monthly_payment = html.xpath('//span[@data-auto-test-id="monthly-amount-header-text"]')[0].text_content()
        monthly_payment = monthly_payment.split("Mortgage")[1].split("/")[0].strip()
    except:
        monthly_payment = "not listed"
    data["price"] = price
    data["old_price"] = old_price
    data["monthly_payment"] = monthly_payment
    return data

def get_overview_info_type(info):
    if "bed" in info.lower():
        return "num_beds"
    elif "bath" in info.lower():
        return "num_baths"
    elif "lot size" in info:
        return "lot_size"
    elif "Home" in info:
        return "home_style"
    elif "sqft" in info:
        return "square_feet"
    elif "Condo" in info:
        return "home_style"
    elif "Built" in info:
        return "year_built"
    elif "Trulia" in info:
        return "days_on_trulia"
    elif "views" in info:
        return "num_views"
    elif "Multi-Family" in info:
        return "home_style"

    
def get_overview_metadata(html):
    data = {}
    overview = html.xpath('//div[@data-auto-test-id="home-details-overview"]')[0].text_content()
    parsed_overview = [elem.strip() for elem in overview.split("\n") if elem.strip() != '']
    key_list = [
        "num_beds", "num_baths",
        "lot_size", "home_style",
        "square_feet", "year_built",
        "days_on_trulia", "num_views"
    ]
    key_list = ["overview_"+elem for elem in key_list]
    for info in parsed_overview:
        data["overview_"+get_overview_info_type(info)] = info
    for key in key_list:
        if key not in data:
            data[key] = "not listed"
    return data


def get_features_info_type(info):
    if "Bedrooms" in info.lower():
        return "num_beds"
    elif "Bathrooms" in info.lower():
        return "num_baths"
    elif "lot size" in info:
        return "lot_size"
    elif "Home" in info:
        return "home_style"
    elif "Square Feet" in info:
        return "square_feet"
    elif "Condo" in info:
        return "home_style"
    elif "Built" in info:
        return "year_built"
    elif "Trulia" in info:
        return "days_on_trulia"
    elif "views" in info:
        return "num_views"
    elif "Multi-Family" in info:
        return "home_style"
    elif "Updated" in info:
        return "last_update"
    elif "Virtual Tour" in info:
        return "virtual_tour"
    else:
        return ""

    
def get_features_metadata(html):
    data = {"listing_features_amenity": 0}
    features = html.xpath('//div[@data-auto-test-id="home-details-features"]/div[contains(@class, "miniCol24")]')
    listing_features = features[0].text_content()
    parsed_listing_features = [elem.strip() for elem in listing_features.split("\n") if elem.strip() != '']
    key_list = [
        "num_beds", "num_baths",
        "lot_size", "home_style",
        "square_feet", "year_built",
        "days_on_trulia", "num_views",
        "last_update", "virtual_tour"
    ]
    listing_key_list = ["listing_features_"+elem for elem in key_list]
    parsed_listing_features.remove("LISTING INFORMATION")
    parsed_listing_features = [elem for elem in parsed_listing_features
                               if "MLS" not in elem]
    for info in parsed_listing_features:
        if get_features_info_type(info) != '':
            data["listing_features_"+get_features_info_type(info)] = info
        else:
            data["listing_features_amenity"] += 1
    for key in listing_key_list:
        if key not in data:
            data[key] = "not listed"
    try:
        public_records_features = features[1].text_content()
        parsed_public_records_features = [elem.strip() for elem in public_records_features.split("\n") if elem.strip() != '']
        public_records_key_list = ["public_records_features_"+elem for elem in key_list]
        parsed_public_records_features.remove("PUBLIC RECORDS")
        parsed_public_records_features = [elem for elem in parsed_public_records_features
                                          if "Units" not in elem or "Property Type" not in elem]
        for info in parsed_public_records_features:
            data["public_records_features_"+get_features_info_type(info)] = info
        for key in public_records_key_list:
            if key not in data:
                data[key] = "not listed"
        data["public_records_exist"] = True

    except:
        data["public_records_exist"] = False

    return data


def parse_listing(html):
    data = {}
    structural_metadata = get_headline_metadata(html)
    price_info = get_price(html)
    overview_info = get_overview_metadata(html)
    features_info = get_features_metadata(html)
    data.update(structural_metadata)
    data.update(price_info)
    data.update(overview_info)
    data.update(features_info)
    return data


def grab_listings(place):
    df = pd.DataFrame()
    listings = glob("html_pages/result_pages/*.html")
    for listing in listings:
        text = to_text(listing)
        html = lxml.html.fromstring(text)
        tmp = parse_listing(html)
        df = df.append(tmp, ignore_index=True)
    df.to_csv(place+".csv", index=False)

    
if __name__ == '__main__':
    grab_listings("westfield_nj")
