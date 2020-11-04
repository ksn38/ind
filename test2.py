import requests
from datetime import date
from datetime import timedelta
from collections import OrderedDict


url = 'http://www.cbr.ru/scripts/XML_daily.asp'
today = date.today() - timedelta(days=100)
dif = today.strftime("?date_req=%d/%m/%Y")

response = requests.get(url)
currency = response.content.decode("cp1251").split('>')
dict_names = {}

for i in range(len(currency)):
    if currency[i] == '<CharCode':
        dict_names[currency[i + 1].split('<')[0]] = currency[i + 5].split('<')[0]

def parser(url):
    response = requests.get(url)
    currency = response.content.decode("cp1251").split('>')
    dict_curr = {}
    dict_names = {}

    for i in range(len(currency)):
        if currency[i] == '<CharCode':
            dict_curr[currency[i + 1].split('<')[0]] = float(currency[i + 7].split('<')[0].replace(',', '.'))

    return dict_curr

now = parser(url)
delta = parser(url + dif)
order_dif = {}

for key in now.keys():
  try:
      order_dif[key] = round((now[key]/delta[key] - 1) * 100, 2)
  except KeyError:
      pass      
  
order_dif = OrderedDict(sorted(order_dif.items(), key=lambda item: item[1]))

print(order_dif)
print(dict_names)

