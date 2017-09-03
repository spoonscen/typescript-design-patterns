# Design Principles
- Identify the aspects of your application that vary and separate them from what stays the same.
- Program to an interface, not an implementation. (Program to a supertype)
- Favor composition over inheritance.
- Strive for loosely coupled designs between objects that interact.
- Classes should be open for extension, but closed for modification

# Patterns
* Strategy `npm run strategy`
  * The Strategy Pattern defines a family of algorithms, encapsulates each one and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.
* Observer `npm run observer`
  * The Observer Pattern defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.
* Decorator `npm run decorator`
  * The Decorator Pattern attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.
* Factory Method `npm run factory`
  * The Factory Method Pattern defines an interface for creating an object, but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.


