// ** types
let a: number = 5;
let b: string = "Hello, TypeScript!";
let c: boolean = true;

// ts use for type checking

// -> these 3 are main primitive data types in TypeScript

console.log(a);
console.log(b);
console.log(c);


// ** types exception : any
let dAny; // -> if you hover over dAny, you will see its type is 'any'. This 4th type in ts we have to avoid it by using {let dany: type}. type{number, string, boolean, etc};

function greet(){
    return "hi"
}

dAny = greet();
console.log(dAny);


// ** type inference
let e = 10;     // --> ts infers the type of e as number.
// e = "hello"; // --> this will throw an error because e is inferred as number
e=20; // --> this is valid
console.log(e);


//** functions

function addTwo(num: number): number {
    return a + 2;
    // return "hello"; // --> this will not throw an error because I dont explicitly specify the return type. 
                    // --> to fix this, we can explicitly specify the return type of the function.
                    // --> function addTwo(num: number): number {}
}

function getUpper(val: string){
    return val.toUpperCase();
}

function signUp(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = true) =>{}

const getHello = (s: string):string => {  // --> another way to define function, if i mention :string after parameters, it means the return type is string, if we didnt return string, it will throw an error.
    return ""
}

const heros = ["thor", "spiderman", "ironman"]
// const heros = [1, 2, 3]

heros.map(hero =>{ // --> here in map function, ts infers the type of hero as string because heros is an array of strings. if heros was an array of numbers, hero would be inferred as number. It will automatically infer the type.
    return `hero is ${hero}`
})

heros.map((hero): string => { // --> here we are specifying the return type of the function inside map as string.
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{ // --> void means this function doesnt return anything.
    console.log(errmsg);
    
}

function handleError(errmsg: string): never{ // --> never means this function will never return anything. It will either throw an error or infinite loop.
    throw new Error(errmsg);
    
}



let myValue = addTwo(5);
getUpper("hiii");
// getUpper(11); // --> this will throw an error because 11 is not a string

signUp("harsh", "h@gmail.com", true);
loginUser("harsh", "h@gmail.com"); // --> isPaid is optional here because we have given it a default value of true





export {}; // --> used to avoid error 'Cannot redeclare block-scoped variable' temporary. If i dont use this, a,b,c throw this error.