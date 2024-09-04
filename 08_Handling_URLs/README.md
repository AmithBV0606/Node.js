# Handling URL's in NodeJs

### URL : Uniform Resource Locator

#### Example : https://www.piyushgarg.dev/
    https : HypreText Transfer Protocol Secure
    www : World Wide Web
    piyushgarg.dev : Domain - User Friendly name of IP address of the server where the website is hosted in.
    "/" : Path : Home page or Root page

__NOTE :__ URL's should not have spaces

### To find the IP address of any website :
Open the CMD prompt or bash terminal and type the following command : 
```bash
ping <Website Name>

Example : ping google.com
```

## Path
Example for different paths : 

1) https://www.piyushgarg.dev/
2) https://www.piyushgarg.dev/about
3) https://www.piyushgarg.dev/contact-us

### Nested path
4) https://www.piyushgarg.dev/project/1

### Query Parameters : Extra information that can be passed along the URL
5) https://www.piyushgarg.dev/about?userId=1&a=2

__NOTE :__ 
1) Everthing after the "?", is the query parameter

2) In-order to extract the values of the query parameters we use an external package called "url"

Link : https://www.npmjs.com/package/url

3) "+" in url means empty space in plain text