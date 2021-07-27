
import socket 


mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
mysock.connect(('www.dr-chuck.com', 80))

cmd = ' GET http:/www.dr-chuck.com/page1.htm \n\n'.encode()

mysock.send(cmd)

while True:
    data = mysock.recv(512)
    if (len(data) < 1) :
        break
    print(data.decode())

mysock.close()