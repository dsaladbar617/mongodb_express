# software_mil

[Install Docker](https://docs.docker.com/engine/install/ubuntu/)

1. To create the container either navigate to the software_mil directory and run 
```
docker-compose up -d
```
or

### In the terminal:  

run the following command to create the directory where the db data will be stored:
```
mkdir -p $HOME/docker/volumes/mongodb
```

run the following command to create a mongodb docker container:
```js
docker run -d --rm --name mongod -p 27017:27017 -v $HOME/docker/volumes/mongodb:/data/db mongo
```
-d = run detached state  
--rm = remove when container is closed  
--name = set the container name  
-p = set the port number that the container can be accessed with  
-v = set the folder where all of the data from the container will be save *note* this is important to make sure all of the db data is persistent  
mongo = will use the latest mongodb docker image to create container  

2. run the following to find the hash for container:
```
docker ps -a
```
this will return a list of all containers. Find the one with the name you specified above after the --name tag and use the first three characters in the container ID.

ex:
```
CONTAINER ID   IMAGE     COMMAND                  CREATED             STATUS             PORTS                                           NAMES
e3c6f862ed27   mongo     "docker-entrypoint.s…"   About an hour ago   Up About an hour   0.0.0.0:27017->27017/tcp, :::27017->27017/tcp   mongod
```

3. run the following with your container id to start up the container:
```
docker exec -it e3c bash
```

4. once in the container you will run the command:
```
mongosh
```
5. next you will run the command:
```
use {name of database that you would like to create}
```

6. then after cloning this repo you will replace the connection information in the db.js file at line 3:

```js
let uri = "mongodb://localhost:27017/{name_of_databse_you_created}";
```

7. run npm install in the terminal in the software_mil folder

8. then run npm start

you should be able to add to and read documents to the database by using api calls to http://localhost:8080/api


### Resources
[Mongoose Docs](https://mongoosejs.com/docs/guide.html)  
[Simple Example](https://kb.objectrocket.com/mongo-db/simple-mongoose-and-node-js-example-1007)
