# hack-a-thing-2-hackchain2

## How to run
Execute the install-setup-... script locally. Detailed instructions on the tutorial.  
https://medium.freecodecamp.org/how-to-build-a-blockchain-network-using-hyperledger-fabric-and-composer-e06644ff801d   
more detailed instructions are on this tutorial I followed  

Please check the branch `init-fabric-dev` for my work and the other branch for my partner's work.

## Short Description
This was an attempt to build something that will simulate on top of the hyperledger network, a technology that we potentially hope to use in our app.  

It basically records all transactions that occur over the network in a convenient user-friendly way. It can be applied to many different situations, especially for permission-control in proprietary or organization network.  

## What I Learned 
This seemed like a very object oriented way of working with the blockchain. `Model` in the `.cto` file is simply a class definition and each object of the class (or `entity`) has properties that correspond to instance variables. Not only are `participants` in the network objects, so are `items` and actually `transactions` between `participants`. 

The transaction does act like an object in the network, or it can be thought of as a `joins` table. Even the `notification` of a transaction is an object. So I learned an interesting, helpful way of understanding and utilizing a blockchain network.  


## How does this hack-a-thing inspire you or relate to your possible project ideas?
This is definitely a piece of technology that we can use in our project. Implementing a new blockchain is not something we can do in the amount of time we have. The Hyperledger gives us just what we need so that we can actually build something interesting with the help of a blockchain.   

The tutorial worked with a built-in user interface so that we can meddle around with the code and easily visualize what was going on.
But it has a developer mode that allows for more complex and nuanaced control of this amazing technology. This is the mode that we definitely explore further.  

## What didn't work
So the Hyperledger suite does come with the ability to build an Angular app that works with the server of the Hyperledger to interact with users. I wanted to try doing this but some API calls did not seem like they were up to date or functioning. 

This also seems like something we need to explore. An user-interacting piece of the technology is something that we definitely need to develop as a part of our project.  

CS98   
Jeong Tae Bang
