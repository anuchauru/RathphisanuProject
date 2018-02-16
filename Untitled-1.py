import socket

def mainRun():
    host='127.0.0.1'		    # server ip
    port=5000		    # server port
    server=socket.socket()	    # server socket object
    server.connect((host,port))
    data=input('Type message:')
    # รับส่งข้อมูล
    while data!='q':        
        server.send(data.encode('utf-8'))
        data=server.recv(1024).decode('utf-8')
        print('Server message:'+data)
        data=input('Type message:')

mainRun()
