// **Arrays

// const superH = []; // --> this is never type throw error
// superH.push("hi");

// const superH:[] = []; // --> this is empty type throw error
// superH.push("hi");

const superHeros: string[] = [];
// const heroPower: number[] = []

superHeros.push("spiderman");
// heroPower.push(2)

const heroPower: Array<number> = [] // --> this is the second way to define array

type User = {
    name: string
    isActive: boolean
}

const allUsers: User[] = [] // --> customize type define in array

allUsers.push({name: "", isActive: true})

const MLModels: number[][] = [ // --> 2D array define.
    [255, 255, 255],
    []
]

export {}
