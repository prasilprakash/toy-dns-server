# toy-dns-server
A simple DNS server (_like dns.toys_) written in JavaScript

## How to run?

````
docker build -t dns-server .
docker run -d -p 53:5354/udp dns-server
dig coin @localhost
dig 42km-mi @localhost
dig 42mi-km @localhost
````
