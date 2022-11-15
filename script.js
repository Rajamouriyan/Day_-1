1. Write a blog on difference between HTTP1.1 vs HTTP2

HTTP means HyperText Transfer Protocol,it is an application protocol and based on the client/server model
The client and server are communicating via requests and responses
A quick example for this Process, if we are booking a cinema ticket, we select our choice of seating position (sends request)
then the payment is processed and the respective tickets has been generated (process from the server end)

HTTP1.1

For HTTP1.1, different TCP connections are required for different tasks.
Delay in Page load speed compared to HTTP2
HTTP 1.1 version came to practice in 1997
When two files are available, if web page has requested then only one file is getting loaded on UI

HTTP2

For HTTP2, common single TCP connection required for different tasks.
Because of this, browser allows to download web files asynchronously from one server.
Page load speed improvements compared to HTTP1.1
HTTP 2.0 version came to practice in 2015.
When two files are available, if web page has requested then both the files get loaded

Benefits of HTTP2 over HTTP1.1

Less prone to errors
Effective network resource utilization
Efficient and robust in terms of processing of data between client and server.
Eliminating security concerns
Request multiplexing over a single TCP connection

Additional Note

For finding the version of http your website is running, by inspecting network tab of your browser developer tool by F12



2. Write a blog about objects and its internal representation in Javascript

Objects is one of the data-type and forms the building blocks of Javascript
Objects are complex in nature and each of this contains any combination of primitive data-types in addition to reference data-types
An object, is a reference data type. Variables that are assigned a reference value are given a reference or a pointer to that value
That reference or pointer points to the location in memory where the object is stored. The variables dont actually store the value.

The properties of an object define the characteristics of the object.
We can access the properties of an object with a dot-notation:

        objectName.propertyName

We can define a property by assigning it a value.For example,

    var phone= new Object();
    phone.brand = 'Samsung';
    phone.model = 'Galaxy S';
    phone.version = 12;

Objects can also be accessed using a bracket notation and also called as associative arrays. For example,

    phone ['brand'] = 'Samsung';
    phone ['model'] = 'Galaxy S';
    phone ['version'] = 12;   

Creating a JavaScript Object with Object Literal:
One of easiest way to create a javascript object is object literal, simply define the property and values inside curly braces as shown below

    let phone = {
    brand: 'Samsung', 
    model:'Galaxy S', 
    version: 12 };

Create JavaScript Object with Constructor:
Constructor is nothing but a function and with help of new keyword, constructor function allows to create multiple objects of same flavor as shown below

code:
class phone{
    constructor(name, model) {
    this.name = name;
    this.model = model;
    }
}
 let mobile = new phone("Samsung", "Galaxy");
 console.log(mobile.name);  

 output:
 Samsung



    





