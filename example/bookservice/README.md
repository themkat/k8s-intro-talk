# Bookservice example
Quick and dirty bookservice example. Uses Spring and Kotlin. The guide for running everything in k8s or docker-compose is given in another directory, so here I will only include the guide for running without those. 


## Multi-stage Dockerfile build
In the Dockerfile you may notice that we have two `FROM` declarations. To read more about multi-stage builds, [consult the official documentation](https://docs.docker.com/develop/develop-images/multistage-build/).


You may wonder: Why?!? The real reason is usually that we don't want to include something in the final image. When running `npm install`, we download many files that are not used anymore after the frontend build. This would make the image unnecessary big. Therefore we simply build and keep the result. We could also have added another stage to not have to keep the Java codebase in the final image, and this would be a VERY wise decision if this was a production image. To keep the file short, I decided not to do this. 



## Running locally without k8s or Docker
The frontend was added into this project as a bit of an afterthought (I blame time), so the setup is slightly weird. The frontend sadly won't run separately (i.e, with simply `npm start`). This is because it now requires the `/books` API to be on the same server. I may not get the time to fix this before the presentation :(


Anyway, to get it running (e.g, while debugging in your IDE), use:
```
# navigate to the frontend directory/folder
# build the frontend project
npm install
npm run build

# copy the contents of the build folder into the 
# src/main/resources/static folder. If it is not created, create it.
```

Now you can build your project like normal. You will need to have a mongodb database (either by using Docker or installing it) running with the correct settings. These can be changed in the application config files. If you simply want to run MongoDB to get the project to work out of the box, you can use the following command to run a MongoDB container:
```
docker run --name mongodb-container -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=password mongo:3.4.22-xenial
```

Once you are done, you can terminate and delete it with:
```
docker container stop mongodb-container
docker container rm mongodb-container
```

Warning: You will lose all data, so be sure you are done with the data you saved. 


## Adding data to the bookservice
So you have some data you want to add to the bookservice? You can either use the frontend directly, or you can use your favorite REST testing tool (like Postman or restclient for GNU/Emacs). Just use the `/books/add` endpoint with a JSON body that includes `title`, `author` and `amazonLink`. To do it with `curl`, you can do the following:
```
curl -d '{"title": "My Book", "author": "Some Girl", "amazonLink": "none"}' -H "Content-Type: application/json" -X POST http://ipaddress/books/add
```

Where ipaddress is replaced with the necessary ip address and ports. If you are running locally, this is localhost:8080. To find the correct address in a cluster, see the guides in the `examples` directory (one directory up). 
