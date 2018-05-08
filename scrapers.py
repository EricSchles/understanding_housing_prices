from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from time import sleep, time
from multiprocessing import Pool, cpu_count
from glob import glob
import pandas as pd
import lxml.html

def get_driver():
    # initialize options
    options = webdriver.ChromeOptions()
    # pass in headless argument to options
    options.add_argument('--headless')
    # initialize driver
    driver = webdriver.Chrome(chrome_options=options)
    return driver


def parse_html(html, df):
    import code
    code.interact(local=locals())
    html = lxml.html.fromstring(html)
    return df

def write_to_file(df):
    df.to_csv("housing_prices.csv")

    
def connect_to_base(browser, base_url):
    connection_attempts = 0
    while connection_attempts < 3:
        try:
            browser.get(base_url)
            # wait for table element with id = 'hnmain' to load
            # before returning True
            #WebDriverWait(browser, 5).until(
            #    EC.presence_of_element_located((By.ByClassName, 'overlayContainer'))
            #)
            return True
        except Exception as ex:
            connection_attempts += 1
            print(f'Error connecting to {base_url}.')
            print(f'Attempt #{connection_attempts}.')
    return False


def run_process(place):
    place, base_url = place
    browser = get_driver()
    if "housing_prices.csv" in glob("*.csv"):
        df = pd.read_csv("housing_prices.csv")
    else:
        df = pd.DataFrame()
    if connect_to_base(browser, base_url):
        sleep(2)
        html = browser.page_source
        df = parse_html(html, df)
        write_to_file(df)
        browser.quit()
    else:
        print('Error connecting to hackernews')
        browser.quit()

if __name__ == '__main__':
    places = [
        ("https://newyork.craigslist.org/search/aap", "https://newyork.craigslist.org"),
    ]
    for place in places:
        run_process(place)
    # with Pool(cpu_count()-1) as p:
    #         p.map(run_process, places)
    # p.close()
    # p.join()
    
