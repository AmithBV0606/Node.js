# Node.js Architecture

<img src="./assets/Pic-9.png"/>

### Flow of Node Js starts with a client

<img src="./assets/Pic-1.png" />

### Client send a request to the server

<img src="./assets/Pic-2.png" />

### Those requests will be queued up in Event Queue 

<img src="./assets/Pic-3.png"/>

### All the requests in Event Queue will be watched and picked up by Event Loop 

<img src="./assets/Pic-4.png"/>

### The requests picked from the Event Queue can be of two types :
    1) Blocking Operations (Synchronous)
    2) Non-Blocking Operations (Asynchronous)

<img src="./assets/Pic-5.png"/>

### If the request is of Non-Blocking type, the request will be resolved and the response will be sent to the user.

<img src="./assets/Pic-6.png"/>

### If the request is of Blocking type, In-order to resolve the request, the request will be forwarded to a thread pool(Pool which contains multiple threads).

<img src="./assets/Pic-7.png" />

__NOTE :__ By default the thread pool consists of 4 threads.

The number of threads can be increased depending on the number of cores and CPU's present on your machine.  

### When that particular thread completes the task, it returns the result and gets back to the thread pool.

<img src="./assets/Pic-8.png"/>

__NOTE :__ It's always advised to use non-blocking operations i.e Asynchronous operations than using the blocking operations i.e Synchronous operation, because of the scalability issues