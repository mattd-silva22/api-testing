from zeep import Client

url = 'http://www.soapclient.com/xml/soapresponder.wsdl'

client = Client(url)

result = client.service.Method1('ola' , 'mundo')

print(result)