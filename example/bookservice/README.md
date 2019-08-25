# Bookservice example
Quick and dirty bookservice example. Uses Spring and Kotlin. The guide for running everything in k8s or docker-compose is given in another directory, so here I will only include the guide for running without those. 


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

Now you can build your project like normal. You will need to have a mongodb database (either by using Docker or installing it) running with the correct settings. These can be changed in the application config files. 
