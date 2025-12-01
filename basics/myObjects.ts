const User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isAvtive: true
}


// ** Bad Behaviour of Object
function createUser({ name, isPaid }: {name: string, isPaid: boolean}){} // --> By using the function like this give no error but i'll show where the object behaves weired.
createUser({name: "harsh", isPaid: false}); 

// --> here is the bad behaviour
// createUser({name: "harsh", isPaid: false, email: "h@h.com"}); // --> here it will throw error.
let newUser = {name: "hitesh", isPaid: false, email: "h@h.com"} //--> but when you wrap same thing in variable here it will not throw error. Till now i didnt face off with solution on this bad behaviour.
createUser(newUser)



// ** How Object return and other way of declare the type
function createCourse():{name: string, price: number}{ //--> function return object because you mention or infer the return type here.
    return {name: "reactjs", price: 399}
}

// ** Aliases
type User = {
    name: string;
    email: string;
    isActive: boolean
}


function createProfile(user: User): User{ // --> here i also mentioned about the return type of this function that is object.
    return {name: "", email: "", isActive: true}
}

createProfile({name: "", email: "", isActive: true})


// ** ReadOnly --> No one change by accessing it through object
// ** Optional --> This will allow you for, if you not decalre one element in object you can carry on.

type Profile = {
    readonly _id: string //--> this will not update you this field by accessing object
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number // --> this will allow you, if you dont assign value.
}

let myUser: Profile = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false
}

myUser.email = "h@gmail.com" // --> You are allow to change this.
// myUser._id = "asa" // --> but not this, because you use readonly, uncomment it you will saw a error over this.

// --> Intersect multiple Type or Aliases
type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & { // --> It combines multiple types into one single type that must contain all properties from each type and also add some new properties.
    cvv: number
} 



export {}