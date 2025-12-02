
// ** How interfaces used in class and implements

interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

 
interface Story { // --> new interface with some prop is added
    createStory(): void
}


class Instagram implements TakePhoto { // --> you have to mentioned in constructor everything that is used in interface
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}


class Youtube implements TakePhoto, Story{ // --> You can add more things into it but not less.
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){}

    createStory(): void {
        console.log("stroy was created");
        
    }

}