# DashClicks

DashClicks assignment

### Features

- Created two tables
- USER - one which contains users information
- TASK - another contains the user tasks

### Prerequisites

```
Git should be installed in your local system
```

### Installing

```
git clone https://github.com/vamshi0108/dash-clicks.git
```

```
npm install all the required modules mentioned in package.json
Install mongodb and run the below command to run the db server locally
D:\{path}\mongodb\bin\mongod.exe --dbpath=D:\{path}\mongodb-data
Now API endpoints can be hit by using postman or chrome
```

### User APIs

- [Creating new user ](http://localhost:3000/users) and POST of user details
- [Updating user details ](http://localhost:3000/users/me) and PATCH of user details
- [Delete user ](http://localhost:3000/users/me) and POST of user details

### Task APIs

- [Adding new task ](http://localhost:3000/tasks) and POST of user details in JSON format
- [Get all task details ](http://localhost:3000/tasks)
- [Get curent user task details ](http://localhost:3000/tasks/:id) and replace :id with user's id
- [Updating tasks ](http://localhost:3000/tasks/:id) and PATCH of user details, replace :id with user's id
- [Deleting the task ](http://localhost:3000/tasks/:id) and DELETE of user details

## npm Packages Used

- express
- mongoose
- env-cmd
- nodemon
- validator

## Built With

- [nodeJs](https://nodejs.org/en/)

## Sample Images

![alt text](https://github.com/vamshi0108/dash-clicks/blob/master/public/img/image1.png?raw=true)
![alt text](https://github.com/vamshi0108/dash-clicks/blob/master/public/img/image2.png?raw=true)
![alt text](https://github.com/vamshi0108/dash-clicks/blob/master/public/img/image3.png?raw=true)
![alt text](https://github.com/vamshi0108/dash-clicks/blob/master/public/img/image4.png?raw=true)
![alt text](https://github.com/vamshi0108/dash-clicks/blob/master/public/img/image5.png?raw=true)
![alt text](https://github.com/vamshi0108/dash-clicks/blob/master/public/img/image6.png?raw=true)
![alt text](https://github.com/vamshi0108/dash-clicks/blob/master/public/img/image7.png?raw=true)

## Authors

- **Vamshi Nagulapally** - _Initial work_ - [Git](https://github.com/vamshi0108)

###### Copyright 2020 Vamshi Nagulapally
