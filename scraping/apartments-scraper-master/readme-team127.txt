this folder scrape apartments from apartments.com

setup:
You can install Python from [here](https://www.python.org/downloads/). 
You also need to install 
* beautifulsoup4 from [here](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) and you'll probably need `pip` to do that (`python -m pip install beautifulsoup4` on Windows should do it).
* requests either through pip ('python -m pip install requests') or directions for your setup found [here](http://docs.python-guide.org/en/latest/starting/installation/)

change apartmentURL in file config.ini

1. If you want your output file to be named something other than output.csv, change the name of the file (output) after the "fname:" field.
1. Run `python parse_apartments.py` to generate the CSV file that you can then import.

