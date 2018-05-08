import lxml.html
import requests

r = requests.get("https://www.trulia.com/NJ/Westfield/")
html = lxml.html.fromstring(r.text)
ads = html.xpath('//a[@class="titleLink"]/@href')
import code
code.interact(local=locals())
