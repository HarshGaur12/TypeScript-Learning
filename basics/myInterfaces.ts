interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number // -> getCoupon is number type
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const harsh : Admin = { // --> use admin extends from user which is inherited
    dbId: 22, email: "h@gmail.com", userId: 2211,
    githubToken: "github",
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "hitesh10", off: 10) => {
        return 10
    },
    role: "admin"
}

harsh.email = "hg@gmail.com"

export {}