## Fifth Project in the Node101 * Module @ San Diego Code School

Author - Michel Roberts JR.

Modified by Travis Ripley * Started March 24th, 2019 14:05

I will be logging my updates as a work through this project.

# VSTDA API

This project will be used as a back end service for a later project (where you will build the front end).  

## Problem summary

Front and back end teams will often agree on a "contract" about how a given application and its API should behave during the software design process. Each team can then work on their parts in parallel for efficiency. Eventually the teams will complete their required parts, and then the two teams will spend a brief period of time integrating the parts and testing the application.  

Teams that work well together and implement their parts as agreed can often save time (and costs) using this strategy.

Software developers typically define a specification and document a RESTful contract of the APIs that are needed. These documents typically detail each aspect of your desired resources and operations.  Following this blueprint will make it easier to know when the parts of the system are "done", and ready to be integrated.

## Instructions

1. Open a terminal
1. Clone your starter files from [Github](https://github.com/SanDiegoCodeSchool/node101-vstda-api) and open the project in VS code.
1. Run: `npm install` to install all the dependencies.

Using the following mock data and contract, implement an API server using ExpressJS. You may find it helpful to use Postman, to verify your code is working as expected.


## Mock Data

Use this array as your initial data. This way GET requests to your server will return data, even though we have not sent POST requests.

```javascript
[
    {
      todoItemId: 0,
      name: 'an item',
      priority: 3,
      completed: false
    },
    {
      todoItemId: 1,
      name: 'another item',
      priority: 2,
      completed: false
    },
    {
      todoItemId: 2,
      name: 'a done item',
      priority: 1,
      completed: true
    }
];
```

## The Contract

### Endpoint base URL:
[http://localhost:8484](http://localhost:8484)

### Resources

---

#### Status message from server
Respond with a generic object.

#### GET {object} 

Request:
```
ROUTE:

/
```

Response:
```
BODY:

{
  status: string
}

EXAMPLE:

{
  status: 'ok'
}

SUCCESS STATUS CODE: 

200 
```
---

#### Read All Todo Items from List
Respond with all items in the dataset.

#### GET [array]

Request:
```
ROUTE:

/api/TodoItems
```

Response:
```
BODY:

[{
  todoItemId: number,
  name: string,
  priority: number,
  completed: boolean
},
...]

SUCCESS STATUS CODE:

200 
```
---

#### Read Single Todo Item from List
Use a route parameter to respond with a single item with a matching `todoItemId`.

#### GET {object}

Request:
```
ROUTE:

/api/TodoItems/:number
```

Response:
```
BODY:

{
  todoItemId: number,
  name: string,
  priority: number,
  completed: boolean
}

SUCCESS STATUS CODE:  

200 
```

---

#### Create a Single Todo Item
Add an item to the dataset. If there is already an item with a matching `todoItemId`, overwrite the existing item.

#### POST {object}

Request:
```
ROUTE:

/api/TodoItems/

BODY:

{
  todoItemId: number,
  name: string,
  priority: number,
  completed: boolean
}
```

Response:
```
BODY:

{
  todoItemId: number,
  name: string,
  priority: number,
  completed: boolean
}

SUCCESS STATUS CODE: 

201 
```

Note: when posting an item it is common to send back a copy of the item that was posted in the body of the response.

---

#### Delete Single Todo Item from List
Use a route parameter to remove the item with a matching `todoItemId` from the dataset.
Respond to the request with the deleted item.

#### DELETE {object}

Request:
```
ROUTE:

/api/TodoItems/:number
```

Response:
```
BODY:

{
  todoItemId: number,
  name: string,
  priority: number,
  completed: boolean
}

STATUS: 

200 
```
Note: when deleting an item it is common to send back a copy of the item that was deleted in the body of the response.

---

## Exit Criteria:

* Expose an endpoint (does not require authentication)

* Implement GET, POST, and DELETE per the specification

* All tests must pass

## Bonus:

* Implement other verbs: PUT and PATCH

* Add an endpoints to filter and return only complete, and another to return only incomplete items

* Validate and Sanitize the data before storing it
  - Ensure that the data contain html/sql
  - Ensure that the data is the correct type

* Handle Errors in a more elegant way (log them to a file and return a 500 message, or a 404)

* Display the time in seconds the current app has been running when a GET request is made to the (/) status endpoint

## Project Submission

To submit this project, please deploy this website using Now.

```bash
# navigate to the project
$ cd ~/projects/{project-name}

# run "now" to deploy the site
$ now
```

After running that command, you should see the following output:

```bash
> Deploying ~/projects/{project-name} under your@email.com
> Ready! https://{project-name}-skckceswsd.now.sh (copied to clipboard)
```

A URL to your project has been pasted to your clipboard, so the next thing to do is [Submit your project](https://goo.gl/forms/wx8DLSus7s88lk043)

And that's it! Once you submit the project, you can move onto the next assignment.  An instructor will evaluate your work; giving feedback if necessary.

## Now

Site deployed to Now at the following URL

https://movie-finder-data-8juzcndwc.now.sh

Thank you for taking the time to look at my projects,

Also please follow my progress on youtube: https://www.youtube.com/channel/UCXv4p-lDYeWXPlnoRFYCSUg

-Travez