import { Hero } from "./heroes";

export class Party{
    private heroes: Hero[] = [];

    public addHero(hero: Hero): void{
        this.heroes.push(hero);
    }

    public retireHeroes(): void{
        if(this.heroes.length > 0){
            this.heroes = this.heroes.filter(hero => hero.money < 5000);
        }
    }

    public getPayment(amount: number): void{
        if(this.heroes.length > 0){
            this.heroes.forEach(hero => hero.pay(amount));
        }
    }

    public getStatus(): string | string[]{
        return this.heroes.length > 0
        ? this.heroes.map(hero => hero.status())
        : 'No heroes';
    }
}