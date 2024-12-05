export abstract class Fish{
    constructor(protected _name: string, protected _weight: number, protected _color: string, protected _stml: boolean){

    }

    public status(): string{
        return `${this._name}, weight: ${this._weight}, color: ${this._color}, short-term memory loss: ${this._stml}`;
    }

    public feed(amount: number): void{
        this._weight = this._weight + amount; // this._weight += amount
    }

    get weight(): number{
        return this._weight;
    }
}

export class Clownfish extends Fish {
    stripeColor: string;
    constructor(
        name: string,
        weight: number,
        color: string,
        stml: boolean,
        stripeColor: string
    ){
        super(name, weight, color, stml);
        this.stripeColor = stripeColor;
    }

    public status(): string{
        return `${this._name}, weight: ${this._weight}, color: ${this._color}-${this.stripeColor}, short-term memory loss: ${this._stml}`;
    }
}

export class Tang extends Fish {
    constructor(
        name: string,
        weight: number,
        color: string,
        stml: boolean
    ){
        super(name, weight, color, stml);
    }
}

export class Kong extends Fish {
    constructor(
        name: string,
        weight: number,
        color: string,
        stml: boolean
    ){
        super(name, weight, color, stml);
    }

    public feed(): void{
        this._weight = this._weight + 2; // this._weight += 2
    }
}