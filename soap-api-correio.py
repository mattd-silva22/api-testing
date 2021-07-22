from zeep import Client

url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl'
cep = input("Digite seu CEP: ")
client = Client(url)

result = client.service.consultaCEP(cep)

print(result)