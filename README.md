# toy-dns-server
A simple DNS server (_like dns.toys_) written in JavaScript

## How to run?

As a node app -

````
node dns-server.js --ip '127.0.0.1' --port '53'
````

May want to use sudo to use port 53. If you don't want to do that, try others -

````
node dns-server.js --ip '127.0.0.1' --port '5354'
````

As a containerized app -

````
docker build -t dns-server .
docker run -e PORT=53 -p 53:53/udp dns-server
````

## How to use?

If you're running locally and want to use the fortune cookie thing, you may want to install that first -

````
apt-get install fortune
````

To use dig you'll have to install dnsutils -

````
apt-get install dnsutils
````

Use dig to test the app -

```
dig coin @localhost
dig 20.coin @localhost
dig 42km-mi @localhost
dig 42mi-km @localhost
dig fortune @localhost
````

With other ports -

```
dig coin @localhost -p 5354
dig 20.coin @localhost -p 5354
dig 42km-mi @localhost -p 5354
dig 42mi-km @localhost -p 5354
dig fortune @localhost -p 5354
````
