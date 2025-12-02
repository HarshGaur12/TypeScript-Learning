abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
    ){}

    abstract getSepia(): void
    getReelTime(): number{
        //some complex calculation
        return 8
    }
}

// const hc = new TakePhoto("test", "Test"); // --> throw error because abstract class cannot accessible by object. but accessible by extended class object.

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
        ){
            super(cameraMode, filter)
        }

        getSepia(): void { // --> because of abstract i have to mentioned it here otherwise class will throw error.
            console.log("Sepia");
            
        }
}

const hc = new Instagram("test", "Test", 3);
hc.getReelTime() //--> abstract class is accessible by extended class object.

