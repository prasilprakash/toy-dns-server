# toy-dns-server
A simple DNS server (_like dns.toys_) written in JavaScript

## How to run?

As a node app -

````
node dns-server.js --ip '127.0.0.1' --port '53'
````

May want to use sudo to use port 53. If you don't want to, try others -

````
node dns-server.js --ip '127.0.0.1' --port '5354'
````

## How to use?

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
