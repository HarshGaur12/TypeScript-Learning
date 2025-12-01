// ** Unions

let score: number | string = 33  // --> now you assigned both number or string
score = 44
score = "55"

// --> Role Based
type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let harsh: User | Admin = {name: "harsh", id: 334} // --> role based using type 
harsh = {username: "hg", id: 334};


//--> Happens sometime in Api Calls

// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
    
// }

getDbId(3)
getDbId("3")

function getDbId(id: number | string){
    // id.toLowerCase(); // --> throw error, just because it has mix of 2 types.

    if (typeof id === "string") {
        id.toLowerCase()
    }
}


//--> Array 

const data1: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]

// const data: string[] | number[] = ["1", "2", 3] // --> Again throw error because it should be number or string not mix of it.
const data: (string | number)[] = [1, 2, "3"]

const data3: (string | number | boolean)[] = ["1", "2", 3, true]


let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
// seatAllotment = "crew" // -> throw error