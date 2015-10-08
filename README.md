# Introduction to RESTful APIs
In this exercise we will have a look at the bullding of a simple RESTful API.

## Exercises
1. (Only if you're using a lab PC.) Update npm by downloading the zip file [here](https://github.com/npm/npm/archive/v3.3.4.zip), and unzipping it. (Use the 'Extract here' option in PeaZip.) Rename the unzipped folder npm. Delete your npm folder in u:\node\node_modules, and move the newly download npm folder to u:\node\node_modules. (So, replace the npm folder in u:\node\node_modules with the new one.)

1. Download the files in this repository, extract them, and open a command prompt in the directory.

1. Install express in the current directory using the command 'npm install express'. Note that here we are not using the '-g' option. g stands for global, and will install node packages in the global node_modules location. We want express installed in the current directory instead.

1. Download curl.exe from [here](http://www.paehl.com/open_source/?CURL_7.44.0).

1. Run rest.js using node.

1. Connect to http://127.0.0.1/todo using the command 'curl -v http://127.0.0.1:8000'. Examine the request and response.

1. Add a new route in rest.js with the format '/todo/\<num\>', where \<num\> is an integer. The route should respond, in JSON, with the task at index \<num\>. 

## Advanced exercises
1. Create a new route to delete an element of the todos, by index.

1. Create a new route to add todos, using the HTTP POST method. Curl will allow you to send POST requests from the ommand line. 

## Note
- The documentation for routing in Express: [Routing](http://expressjs.com/guide/routing.html).

- See [here](http://expressjs.com/starter/hello-world.html) for the Express Hello World example.

- See [this](http://stackoverflow.com/questions/8506658/node-js-express-routing-with-get-params) Stack Overflow post for the syntax for using parameters in routes.

- To understand where express is installed, it is recommended you read [this](https://docs.npmjs.com/files/folders).

- Have a look at [HTTP Made Really Easy](https://www.jmarshall.com/easy/http/) for a great tutorial on HTTP.
