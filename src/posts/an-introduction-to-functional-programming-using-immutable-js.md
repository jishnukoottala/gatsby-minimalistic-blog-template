---
path: /intro-immutable-js
title: An Introduction to Functional Programming using Immutable.js
date: 2018-11-07T08:10:37.714Z
image: /assets/immutablejs.png
---
\# Immutable js

![](/assets/immutablejs.png)



  Immutabality in javascript.

  There are primitive types and reference type of data types in JavaScript.

Using immutability in our application solves a lot of issues like :-

\- Concurrency

\- Complexity

\- Shared mutable state

\`\``javascript 

var a = {name:'John',age:23}

var b = a;

b.name='Harry';

a;

{name: "Harry", age: 23}



let c = Object.assign({},a,{age:45});

c;

{name: "Harry", age: 45}

a;

{name: "Harry", age: 23}



\`\``



Here c is created using a so it is not a reference to a. therefore any changes we make to c , won't affect a, but in the case of b, it is direct reference to the object a itself.



Another example

\`\``javascript 

var a ={name:"John", things:\[0,1,2]};

var b = Object.assign({},a,{name:"Fred"}); //creating a new object from a

b.things.push(3);

4

a.things;

(4) \[0, 1, 2, 3] //pushing anything to b.things is also getting reflected in a.things



//we can correct this using..

b.things = a.things.concat(3);

\`\``



\## Basics

Immutable data cannot be changes once created, leading to much simpler app development

Immutable.js package gives us many persistent immutable data structures





\### Maps

Maps are unordered collection, just like objects with key-value pairs

\`\``javascript

import Immutable from 'immutable';



var map1 = Immutable.Map({a:1,b:2,c:3}); //creates a new object

var map2 = map1.set('b',45);



console.log(map1.get('b')); //2

console.log(map2.get('b')); //45



//Here map1 object is not changed



// merging two maps

 map1.merge(map2)

\`\``



\### List 

List is ordered collection similar to javascript array.



var list1 = Immutable.List(\[1,2,3,4]);
