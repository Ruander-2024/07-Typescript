export abstract class Hero{
    constructor(protected name: string, protected _money: number){

    }

    public status(): string {
        return `${this.name} has ${this._money} gold`
    }

    public pay(amount:number):void{
        this._money = this._money + amount;
    }

    get money(){
        return this._money;
    }
}

export class Fighter extends Hero{
    constructor(name: string, private readonly armorColor: string){
        super(name, 0)
    }

    public status(): string {
        return `${this.name} has ${this._money} gold a/an ${this.armorColor} armor`
    }
}

export class Bard extends Hero{
    constructor(name: string){
        super(name, 200)
    }

    public pay (amount:number){
        this._money = this._money + Math.floor(amount * 0.8);   
    }
}

export class Warlock extends Hero {
    constructor(name: string, private readonly demonName: string) {
        super(name, 0);
    }

 public status(): string {
    return `${this.name} has ${this._money} gold and works for ${this.demonName}.`;
}


public pay(amount: number): void {
    const enhancedAmount = Math.floor(amount * 1.1); 
    this._money += enhancedAmount;
}
}