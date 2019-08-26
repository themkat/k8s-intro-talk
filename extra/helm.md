# Helm

In this page we will quickly look at what Helm is, how you can use it, and how you can view the resources it generates. The last part can be useful if you are just starting to learn to use k8s, because you can actually get familiar with different kinds of resource declarations. This will only be a brief guide, so you will have to go to other places for more information on Helm.


## What is Helm?
Helm is a package manager for k8s. The standard repo has different premade templates for various components you might want to deploy to your cluster. These includes various databases, MQ, Jenkins (yes, running it in your cluster) and more. You may think: Why can't I just set these up myself? You showed me the yaml files to do this after all! What you may not be thinking is that some components may require more setup (PersistantVolumeClaims, various DaemonSets etc.), and that it may take you a long time to create these configurations yourself. Also, many templates from Helm follows best practices that avoids data loss, flaky container runs and so on. Why use hours setting up a component that is ready made? Now you can use time to get your own code working as good as possible :) 


## Using Helm
### Install and deploy
To install Helm, see [its github repo](https://github.com/helm/helm) and follow the instructions. When you have installed Helm you an continue with the next instructions.

To get started type `helm init`. This will set everything up so you are ready to use Helm. You will need to deploy something called `Tiller` (a Pod) to your cluster. Your Helm CLI will communicate with `Tiller`, and it will do the actual deployments to your cluster. The `helm init` command will deploy `Tiller` to your cluster if it is not already there.It may take a few seconds for `Tiller` to start and be ready.

Before you continue, it will be wise to refresh the local cache of programs that exists on the repos you have configured (for now, only local and standard repo are configured. We will not go into more details on adding repos here). To update, type the command `helm repo update`.


Helm uses templates for how the deployed resources will look. These are called Charts.



### Searching for Charts
To search for a chart you can type `helm search redis` (replace `redis` with something you would like to search for). 


### Inspecting charts
This is probably the most useful feature of Helm if you are still learning about Kubernetes! Here you can see what resources are created and all the configurations necessary. To inspect a known chart you can use the command `helm inspect stable/redis` (where you replace `stable/redis` with a chart you may have found with the search command above). 


### Installing
Once you have found a chart you would like to install, you can install it with the `helm install stable/redis` (where you replace `stable/redis` with a chart you may have found with the search command above). The chart may require you to override some values or have something already installed in your cluster. You can usually see this with the inspect command. One example of a chart that can be installed without any overriding is the `stable/jenkins` chart. It will print the next steps needed directly in the terminal!


Sadly, a more detailed guide for Helm is outside the scope of this guide. If you want to read one possible solution to installing something like Redis, with overridden values and some setup, take a look at [this article](https://medium.com/@thanawitsupinnapong/setting-up-redis-in-kubernetes-with-helm-and-manual-persistent-volume-f1d52fa1919f).

