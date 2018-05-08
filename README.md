# Understanding housing prices

The plan:

First I will scrape the following websources for pricing information:

* https://www.trulia.com/
* https://www.zillow.com/
* https://streeteasy.com/
* https://www.craigslist.org/about/sites

Once I have sufficient pricing data, I will try to understand why prices are the way they are.

Update to the plan:

It turns out most housing websites do a pretty good job at protecting against bots.  Given lack of time, I'm going to forgo typical scraping and instead download each page and then parse it locally.  Given more time, I'd do a thorough investigation of user-agent strings, rotating IP addresses, VPNs, and alternative scraper technologies.



## Installation

In order to carry out this project, I needed some extra tools.  So in order to get the scraper to work, you'll need [chromeheadless-driver](https://sites.google.com/a/chromium.org/chromedriver/downloads).  From there you'll need to put the binary in your executable path.  For Ubuntu, the answer seems to be to put the executable in `/opt` and then soft link it to `/usr/local/bin`.  From the terminal this looks like:

```
sudo mv /opt/google/chromedriver /opt/
sudo ln -fs /opt/chromedriver /usr/local/bin/chromedriver
```

The reason for this seems to have something to do with path hierarchy and the relative placement of google chrome versus google chrome headless driver.  I haven't replicated these instructions for MacOSX or Windows, but I imagine they will not be too dissimilar.

All other installs can be found in `requirements.txt` found at the base of the project.  And installed with:

`python -m pip install -r requirements.txt`




