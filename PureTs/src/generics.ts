const score: Array<number> = []
const names:Array<string> = []

function identityOne(val: boolean | number): boolean | number{  // --> it should return either number or boolean to achieve this explicitly we use generics.
    return val;
}
// console.log(identityOne(1));


function identityTwo(val: any): any{ // --> one more way to achieve generics is using any. But we know using any is the bad decession.
    return val;
}

// ** Generics write like this

function identityThree<Type>(val: Type): Type{ // --> you can use any word or letter on the place of Type. This will also good.
    return val;
}

identityThree(true) // --> By hovering on function you see when we use generics it locked the type. So thats why we use generics rather than using pipe | operators.
identityThree(22)

function identityFour<K>(val: K): K { // --> this also same because i use same word everywhere.
    return val
}

// -- example how we used this.
interface Bootle{
    brand: string,
    type: number
}

function identityFive<T extends Bootle>(user: T): T{
    return user
}

const u1 = identityFive({
    brand: "puma",
    type: 555
})

console.log(u1);


// --> How generics define array and arrow function

function getSearchProducts<T>(products: T[]): T | undefined { //--> some time array is undefined that why use | undefined .
    // do some database operations
    const myIndex = 3
    return products[myIndex];
}


const getMoreSearchProducts = <T,> (product: T[]): T | undefined =>{ // --> this way you design the arrow funtion in generics. and this , is used to tell this is syntax for generics.
    // do some database operations
    const myIndex = 3
    return product[myIndex];
}


// --> generics with DB
interface Database{
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(val1: T, val2: U): object{
    return{
        val1,
        val2
    }
}

anotherFunction(3,{
    connection: "localhost",
    username: "admin",
    password: "12345"}
);


// --> generic classes
interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}
