# Task Tracker

## Introduction

This project is a task tracker application built with TypeScript and React. TypeScript adds optional static typing to JavaScript, improving code maintainability, readability, tooling, and catching potential errors early in development. Combining TypeScript with React yields robust and scalable applications.

## Prerequisites

- Node.js
- npm

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start the development server

### TypeScript Basics

TypeScript is a superset of JavaScript that adds static types. Here are some basic types in TypeScript:

- `boolean`: A true or false value. 
    - Example: `let isDone: boolean = false;`
- `number`: A numeric value. TypeScript supports decimal, hexadecimal, binary, and octal literals. Example: `let decimal: number = 6;`
- `string`: A text string. 
    - Example: `let color: string = "blue";`
- `array`: An array of other types. 
    - Example: `let list: number[] = [1, 2, 3];`
- `tuple`: An array with a fixed number of elements of known types. 
    - Example: `let x: [string, number] = ['hello', 10];`
- `enum`: A way of giving more friendly names to sets of numeric values. 
    - Example: `enum Color {Red, Green, Blue} let c: Color = Color.Green;`
- `any`: A type for variables that you don't know when writing an application. 
    - Example: `let notSure: any = 4;`
- `void`: A type for functions that do not return a value. 
    - Example: `function warnUser(): void { console.log("This is my warning message"); }`
- `null` and `undefined`: Subtypes of all other types. `null` and `undefined` can be assigned to anything.


Example:

```typescript
let name: string = "John Doe";
let age: number = 30;
let isStudent: boolean = true;
let hobbies: string[] = ["reading", "coding"];
```

## Interfaces

Interfaces are a powerful way to define contracts within your code. They are used to define the shape of an object.

```typescript
interface Person {
  name: string;
  age: number;
}
```

```typescript
function greet(person: Person) {
  return "Hello, " + person.name;
}
```

## Classes
TypeScript supports object-oriented programming and includes classes:

```typescript
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}
```