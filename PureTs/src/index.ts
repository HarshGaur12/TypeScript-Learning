console.log("typeScript is here still");

// ** Class
// class User{
//     email: string
//     private name: string
//     city: string = "Ldh"
//     constructor(name: string, email:string){
//         this.email = email;
//         this.name = name;
//     }
// }

// const harsh = new User("h@.com", "harsh");
// harsh.city = "f" // --> throw err because of read only prop.
// harsh.name  // --> throw err because of private prop. By default every things is public.


// -> other ways to define class with public and private class
class User{
   
    readonly city: string = "Ldh"
    constructor(public name: string, private email:string){
        this.email = email;
        this.name = name;
    }
}

const harsh = new User("harsh", "h@.com");
console.log(harsh.name)


//--> getter and setter

class User1{

    // private _courseCount = 1 // -> accessible with in class.
    protected _courseCount = 1 // --> accessible in inheritated class.

    readonly city: string = "Jaipur"
    constructor(
        public email: string, 
        public name: string,
        // private userId: string
        ){
    }


    private deleteToken(){
        console.log("Token deleted");
        
    }


    get getAppleEmail(): string{
        return `apple${this.email}`;
    }

    get courseCount(): number{
        return this._courseCount
    }

    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error("Course count should be more than 1")
        }

        this._courseCount = courseNum
    }

}

class SubUser extends User1{
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const harsh1 = new User1("h@.com", "harsh");

// harsh1.deleteToken() // -> this will not accessible because deleteToken funtione is private function
console.log(harsh1.getAppleEmail);
harsh1.courseCount = 2 // --> to set anything.
// harsh1._courseCount // --> Not Accessible because of protected and private access modifier.




 