import { Fish } from "./fish";

export class Aquarium {
    protected fishtank: Fish[] = [];

    public addFish(fish: Fish): void{
        this.fishtank.push(fish);
    }

    public feed(amount: number): void{
        this.fishtank.forEach(fish => fish.feed(amount));   
    }

    public removeFish(): void{
        this.fishtank = this.fishtank.filter(fish => fish._weight < 11);
    }

    public getStatus(): string[]{
        return this.fishtank.map(fish => fish.status());
    }







}