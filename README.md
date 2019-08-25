# Introduction to Kubernetes - talk
Introduction to Kubernetes (k8s). Here the presentation, as well as all example files are included. I will also include a quick guide on getting k8s running on your computer. 


## About the folders
- *examples*: Example code you can play around with
- *slides*: The slides used in the presentation
- *extra*: Some extra markdown documents explaining various concepts that might be interesting



## Next steps
Depending on your background, there may be several different next steps. If you are not comfortable with bash and Unix based command lines (like in GNU/Linux), I recommend you to learn more about that first. Docker (and container creation and usage in general) require some knowledge on GNU/Linux and the command line. Already feel comfortable with basic command line usage? Start by creating Dockerfiles. 


[Want to just play around with examples to get a feel for k8s?](example/README.md) 


## Extra resources
These resources was linked in the talk, and now you can click on them for real :D
- [kubectl API docs](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.15/). API docs for `kubectl`. Make sure you are checking the docs for the same version of Kubernetes that you are using. 
- [Smooth Sailing with Kubernetes (comic)](https://cloud.google.com/kubernetes-engine/kubernetes-comic/). Comic about what Kubernetes is, and what problems it solves. From Google.
- [KataCoda](https://www.katacoda.com/): Interactive Kubernetes courses and playground. Don't do all! Find out what you want to learn, and pick relevant courses. At least my recommendation.
- [Kubernetes for Developers by Joseph Heck](https://www.amazon.com/gp/product/B07931YQK3): The book I've used to learn more after experiments at home. Great for learning K8s, even though you might not feel 100 % comfortable with container building in general (Dockerfiles)
- [kubectl cheatsheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/). Cheatsheet for kubectl, the main tool for interacting with your k8s cluster.
- [Docker CLI to kubectl](https://kubernetes.io/docs/reference/kubectl/docker-cli-to-kubectl/). Used to the Docker CLI? Want to know how you can do the same operations to your cluster? This is the place!
- [NodePort vs LoadBalancer vs Ingress](https://medium.com/google-cloud/kubernetes-nodeport-vs-loadbalancer-vs-ingress-when-should-i-use-what-922f010849e0). Need a refresher on the differences between NodePort, LoadBalancer and Ingress? Look no further!
