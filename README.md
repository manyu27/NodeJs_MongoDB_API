# NodeJs_MongoDB

# Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:

Git - Download & Install Git.
Node.js - Download & Install Node.js and the npm package manager. If you encounter any problems, you can also use this GitHub Gist to install Node.js.
MongoDB - Download & Install MongoDB, and make sure it's running on the default port (27017).

# Cloning The GitHub Repository

git clone https://github.com/manyu27/xendit-pre-assessment.git

# Quick Install

Once you've downloaded the application and installed all the prerequisites, you're just a few steps away from running the application.

The repository comes pre-bundled with a package.json file that contains the list of modules you need to start your application.

To install the dependencies, run this in the application folder from the command-line:

```
$ npm install
```
# Running Your Application

```
$ npm start
```

# Testing Your Application

```
$ npm test
```

# Testing the endpoints

There are 2 endpoints deployed once the application is running :
1. /orgs/{orgName}/comments
2. /orgs/{orgName}/members
 
The "comments" endpoint accepts POST,GET and DELETE requests. 
POST request accepts json object as 
```
{comment : "SOME COMMENT"}
```
against the <orgs> database to store the comment in MongoDB collection.
GET request returns all the comments from the <orgs> database.
DELETE request soft deletes all the comments from the "Comments" collection and saves all of them to "ARCHIVE" collection.
  
The "members" endpoint accepts POST and GET requests.
POST request accepts json object as 
```
{
	"login":"login detail",
	"avatarUrl":"avatar url",
	"followers":30,
	"following":25
}
```
against the <orgs> database to store the member data in MongoDB collection.
GET request returns all the members from the <orgs> database in descending order by the number of the followers the member has.

# Logs

Logs can be found in a file called "default.log" in the app directory.
