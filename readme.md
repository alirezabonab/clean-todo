# CLEAN TODO

## This is a sample implementation of Clean Architecture pattern.

[link to article on medium](https://bit.ly/2YjfpB9)

check out the article to learn more about concept and also implementation.

![alt text](https://miro.medium.com/max/1400/0*92PWr5yl15J-VlO1.jpg)


Clean architecture is a practical software architecture solution from the Legendary Robert C. Martin (a.k.a. “Uncle Bob”). By applying universal rules of software ar
chitecture, you can dramatically improve developer productivity throughout the life of any software system.

![alt text](https://miro.medium.com/max/201/0*WTZVIGsdexDjOi6X.png)

---
## Why Clean Architecture?

![alt text](https://miro.medium.com/max/1400/1*HdtyTdPc1fE-YygMn78Mbg.png)

Why maximizing the number of decisions not made?!! We as developers know by experiment that the frameworks we pick at the beginning of the project (Databases or Web Frameworks, etc.) are hard to replace during the lifetime of the project and that’s because of tight coupling and a lot of other early decisions, one of the common mistakes is that we build our project based on these frameworks and then let the business logic to be wrapped around them.
The answer is, We should build an architecture that enables change, Yes I emphasize Change. Change of low-components and frameworks without hitting the core logic and high-level components.

![alt text](https://miro.medium.com/max/1400/1*hKFW9pNSZRgDvujOq6vFVQ.png)

The pattern emphasizes that every software project is constructed of only two elements the Policy and the Details.
The policy (high-level Components) is the core of the software system which includes all business rules, all entities, and everything that makes a unique identity to that software. Like a customer entity or checkout action in an e-commerce platform.
The detail (Lower Level Components) is ways that humans can interact with the business rules, the pattern names these as IO devices, databases, web servers, etc. Like a checkout button that triggers the corresponding business rule or persisting that customer entity in a database or file or any persistence mechanism.

![alt text](https://miro.medium.com/max/1400/1*ixCtW9jx-1zbHITz9Kgfeg.png)

The final goal of the pattern is to separate the high-level components from low-level components And try to keep them working together and making high-level immune from changes in details.
Let me make this whole idea concrete in your mind by some examples. Imagine software that is built on top of a relational database like MySQL and uses Express Js as a web server then after one year the stakeholders introduce new requirements and features that are inconsistent with relational database and require NoSql database. If software implementation follows good architecture with loose coupling between components you don’t need to do revolution with changes. It’s pretty easy to replace the database or web server or any other detail of the software that fits the solution without affecting the business rules and higher-level components.

Uncle bob emphasises on SOLID principles incorporate with Clean Architecture pattern to form a readable, maintainable, scalable and easy deployable software solution.

---

### Data flow
![alt text](https://miro.medium.com/max/1068/1*jz0aVf55ln96Cct7k2xMRQ.png)

---

### Ports and Adapters
![alt text](https://miro.medium.com/max/1086/1*av_Qbnk_uBxa2YFnpVl0yg.png)


