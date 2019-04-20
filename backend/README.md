# 6242_project3
## setup in Mac
### MySQL DBMS
1. Download the latest DMG file from [MySQL](http://dev.mysql.com/downloads/mysql/)
2. Use the DMG file to install MySQL on your computer
3. Add the MySQL path to environment by typing ```PATH=${PATH}:/usr/local/mysql/bin/``` at the command line
4. Configure a secure installation by typing ```mysql_secure_installation``` at the command line
5. Start MySQL by clicking Apple → System Preferences → MySQL → Start MySQL Server

Reference: http://www.dealingdata.net/2016/08/21/Python-MySQL-GUI/

### Python3
1. Install Python3
2. Install pip3 by typing the following commands at the command line:

```
$ curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
$ python3 get-pip.py
```

### pymysql (a Python3 package that works with MySQL DBMS)
1. Install pymysql by typing the following command at the command line (must have pip3 installed):

```
$ sudo pip3 install pymysql
```

### Create tables and constraints in MySQL DBMS
* Change the password (following line) in database_setup.py to your own password set for MySQL DBMS:

```python
conn = pymysql.connect(host='localhost', user='root', password='dahaoren')
```

* Run the following command at the command line:

```
$ python3 /your/path/to/database_setup.py
```

Reference:
[Python-MySQL Database Programming](http://www.ntu.edu.sg/home/ehchua/programming/webprogramming/Python2_Apps.html)

### Show Main Menu
* Start server in your computer by typing:

```
$ python3 /your/path/to/main.py
```

* Open your web browser (Chrome, IE, FireFox, etc.) and type in this URL:

```
localhost:8001
```

You can stop your server at any point by typing ```Ctrl + C``` at the command line.

Reference:
[Set up Python3 http server](https://medium.com/@andrewklatzke/creating-a-python3-webserver-from-the-ground-up-4ff8933ecb96)

