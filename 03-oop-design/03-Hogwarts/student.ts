// Alap osztály
export class Student {
    name: string;
    house: string;

    constructor(name: string, house: string) {
        this.name = name;
        this.house = house;
    }

    introduce(): string {
        return `Hi! I am ${this.name} from House ${this.house}`;
    }
}

// Gryffindor osztály
export class Gryffindor extends Student {
    bestFriend: string;

    constructor(name: string, bestFriend: string) {
        super(name, "Gryffindor");
        this.bestFriend = bestFriend;
    }

    introduce(): string {
        return `${super.introduce()}, and my best friend is ${this.bestFriend}`;
    }
}

// Slytherin osztály
export class Slytherin extends Student {
    favoriteCurse: string;

    constructor(name: string, favoriteCurse: string) {
        super(name, "Slytherin");
        this.favoriteCurse = favoriteCurse;
    }

    introduce(): string {
        return `${super.introduce()}, and my favourite curse is ${this.favoriteCurse}`;
    }
}

// Ravenclaw osztály
export class Ravenclaw extends Student {
    iq: number;

    constructor(name: string, iq: number) {
        super(name, "Ravenclaw");
        this.iq = iq;
    }

    introduce(): string {
        return `${super.introduce()}, and my IQ is ${this.iq}`;
    }
}

// Hufflepuff osztály
export class Hufflepuff extends Student {
    constructor(name: string) {
        super(name, "Hufflepuff");
    }
}
