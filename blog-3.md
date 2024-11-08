<!-- Blog-3: Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases. -->

## Why are Type Guards Necessary?

**Introduction** : TypeScript's static typing helps catch errors early in the development process. However, when working with dynamic data or union types, type checking becomes challenging. This is where type guards come in. Type guards allow you to narrow down the type of a variable, enabling you to perform operations safely.

### What Are Type Guards?

Type guards are runtime checks that let you confirm the type of a value within a conditional block. With type guards, you can handle union types, work with `any` or `unknown` types safely, and create robust applications.

#### Types of Type Guards in TypeScript

1. `typeof` Type Guard
2. `instanceof` Type Guard
3. User-Defined Type Guards
4. Discriminated Unions


### Why Are Type Guards Important?

- **Safety and Predictability** : Type guards prevent runtime errors by checking types.

- **Better Code Suggestions** : TypeScript's editor support can offer better suggestions when you use type guards.

- **Improved Readability** : Explicit checks make code easier to understand.

---

## Types of Type Guards with Example

There are several ways to implement Type Guards in TypeScript. Let's explore them one by one with examples.


#### `typeof` Type Guard : 

The `typeof` operator is a common way to perform type checks for primitive data types like `string`, `number`, and `boolean`.

```typescript 

const processValue = (value: number | string) => {
  if (typeof value === 'string') {
    console.log('String length:', value.length);
  } else {
    console.log('Doubled number:', value * 2);
  }
};

processValue(5); // Output: Doubled number: 10
processValue('TypeScript'); // Output: String length: 10

```


#### `instanceof` Type Guard :

You can use `instanceof` to check if an object is an instance of a particular class or constructor function.

```typescript

class Car {
  drive = () => console.log('Driving...');
}

class Bike {
  pedal = () => console.log('Pedaling...');
}

const startVehicle = (vehicle: Car | Bike) => {
  if (vehicle instanceof Car) {
    vehicle.drive();
  } else {
    vehicle.pedal();
  }
};

const myCar = new Car();
const myBike = new Bike();

startVehicle(myCar); // Output: Driving...
startVehicle(myBike); // Output: Pedaling...

```

#### User-Defined Type Guard :

```typescript 

interface Fish {
  swim(): void;
}

interface Bird {
  fly(): void;
}

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim();
  } else {
    animal.fly();
  }
}


```

### When to Use Type Guards
- **Union Types** : When a variable can be more than one type.
- **`any` or `unknown` Types** : To safely handle values without explicit types.
- **Complex Objects** : When working with different interfaces or classes.

---

### **Conclusion** 
Type guards are essential for making TypeScript code robust, safe, and predictable. By leveraging built-in and custom type guards, you can write cleaner and more maintainable code, especially when dealing with complex data types and dynamic scenarios.

