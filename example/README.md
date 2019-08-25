# Kubernetes Intro - examples

Here is the examples that are shown briefly in the presentation. Feel free to play around with it, and follow the guide below if you are completely new to Kubernetes :)


## About the database config
...



## Installing a local Kubernetes cluster
Make sure you follow the guide to install your variant of a local Kubernetes cluster. There are several to choose from. Windows and Mac has Kubernetes built into their Docker installs, so that is an option. Another excellent option with many features is Minikube. To install Minikube, you can follow [the install guides at their website](https://minikube.sigs.k8s.io/docs/start/). Everything should work well with the Kubernetes cluster built into Docker Desktop and Docker for Mac as well. To enable those, right-click on the Docker icon in your system tray, choose settings, Kubernetes, then check the "Enable Kubernetes" checkbox. Now you should be able to follow along with the `kubectl` commands used here.


## Docker compose?


Just want to run the server in IntelliJ or your IDE? Just run the server using:
docker run -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=password mongo:3.4.22-xenial

or `docker-compose up -d database`

This can be run without a Kubernetes cluster, and is included just to see the same setup in a compose file...


But! There is a way to run this compose file directly in your Kubernetes cluster. 

exposing using nodeport after using kompose: 
kubectl patch svc bookservice -p '{"spec": {"type": "NodePort"}}'





## Running the examples on a K8s cluster
### Building Docker image
To actually have something to run, I have created a simple application called bookservice. It is what you expect, just a simple application that saves titles, authors and amazon links for books. I added a frontend you can run in your browser just to have something flashy :) 


*If you are using Minikube:* First make sure your Kubernetes image registry is pointing to the same local registry as your Docker install. To do this, type the command `eval $(minikube docker-env)` in your command line.


Now you are ready to proceed. Do the following steps: 
* Navigate to the `bookservice`-folder
* Run the command `docker build -t themkat/k8sintro-bookservice:1.0`. The reason for the name and tag is because we use that in the deployment configuration. 


Now you are ready to run something!


### Deploying to your cluster
Now that everything is built, we can start deploying! 
> *Deployments:* Remember that our `Deployment` contains information on WHAT we are putting into our cluster. This includes the number of replicas ("pod instances"), as well as some selector logic. In an older version, both a `Deployment` and a `ReplicaSet` (container information with the number of replicas set) was seperate resources, so the selectors in the `Deployment` configurations is probably a relic from that time (i.e, created a `ReplicaSet` with a label, then use a selector in our `Deployment` to bind to that `ReplicaSet`). Fortunatly we only have to create `Deployments` these days :) 


Let's start by deploying our database (MongoDB). The `Deployment` resource is described in the file `yaml/database-deployment.yml`, so before we continue you should familiarize yourself with what happens in that file. If you have forgotten about something, you can always refer to [the API docs for Kubernetes resources](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.15/#deployment-v1-apps). When you feel like you have an okay understanding of the file (it is okay to only understand parts for now!), then we can actually do the deployment! Type the following:
```
kubectl apply -f yaml/database-deployment.yml
```

You can use `kubectl get all` to see the deployment and pods being created, or just `kubectl get pods` to get the pod information. The MongoDB image is quite large, so it may take some time to pull. To get continous updates on what happens, you could try `kubectl get pods -w`. This will start a watcher process, and you will see new pods being created, continuously. 


Now that we have our deployment up and running, let's expose it so other pods in our cluster can communicate with it! This operation is called creating a service. A service configuration can in this case be very minimal; we just have to match the label in our deployment and specify the ports used. This happens in the file `yaml/database-service.yml`, so take a quick look at that file. Just like for `Deployments`, you can always consult the [the API docs for Kubernetes resources](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.15/#service-v1-core). Type the following to create the service:
```
kubectl apply -f yaml/database-service.yml
```


Now your database service is created, we can deploy the `bookservice` so we have something that talks to it. The files themselves aren't that different from the database deployment. The main difference is the names, labels, and image. So to deploy and expose the `bookservice`, you can do the following:
```
kubectl apply -f yaml/bookservice-deployment.yml
kubectl apply -f yaml/bookservice-service.yml
```


Now everything is up and running! To find the URL for accessing the frontend, you can use the command `minikube service list` if you are using Minikube. To open the service directly in your browser you can use `minikube service bookservice-service`. Now you can play around with it! Scale it, describe it, or do something completely different! See the commands in the slides for some examples.

> *Updating:* So you have updated something in a YAML file? How do you update it in your cluster? You don't have to delete anything! Just run the same `kubectl apply` commands as when you created them! 


### Cleaning
You might want to delete the deployments and services we created? To do that, you can type the following commands:
```
kubectl delete service database
kubectl delete deployment database-deployment
kubectl delete service bookservice-service
kubectl delete deployment bookservice-deployment
```

	
	
## Exercises
Don't know what to do? Try some of the following examples!

-- TODO: should the Ingress part be included here?

### If using Minikube: Change service type to `LoadBalancer` in `bookservice-service.yml`
Minikube supports the `LoadBalancer` type, which will actually create an external IP for us...

-- TODO: write more!


### Add simple metrics with Prometheus and ...


### Adding logging
