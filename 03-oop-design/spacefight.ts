interface Spaceship {
    name: string;
    currentDurability: number;
    maxDurability: number;
    firepower: number;
  
    status(): string;
    repair(repairPercentage: number): void;
    getDamage(damage: number): void;
  }

  
  // Spaceship osztály: 

  class SpaceshipBase implements Spaceship {
    constructor(
      public name: string,
      public maxDurability: number,
      public firepower: number
    ) {
      this.currentDurability = maxDurability;
    }
  
    public currentDurability: number;
  
    status(): string {
      return `${this.name}, durability: ${this.currentDurability}/${this.maxDurability}, firepower: ${this.firepower}`;
    }
  
    repair(repairPercentage: number): void {
      const repairAmount = Math.floor((this.maxDurability * repairPercentage) / 100);
      this.currentDurability = Math.min(this.maxDurability, this.currentDurability + repairAmount);
    }
  
    getDamage(damage: number): void {
      this.currentDurability = Math.max(0, this.currentDurability - damage);
    }
  }
  

// Speciális űrhajók: 


        // SpaceFighter:


        class SpaceFighter extends SpaceshipBase {
            constructor(name: string, firepower: number) {
            super(name, 100, firepower);
            }
        }


        // Avenger:


        class Avenger extends SpaceshipBase {
            constructor(name: string, firepower: number, public ionTorpedo: string) {
            super(name, 150, firepower);
            }
        
            status(): string {
            return `${super.status()}, ion torpedo: ${this.ionTorpedo}`;
            }
        }

        // Battlecruiser:

  
        class Battlecruiser extends SpaceshipBase {
            constructor(name: string, firepower: number) {
            super(name, 230, firepower);
            }
        
            getDamage(damage: number): void {
            const reducedDamage = Math.floor(damage * 0.8);
            super.getDamage(reducedDamage);
            }
        
            repair(repairPercentage: number): void {
            const effectiveRepairPercentage = Math.max(10, repairPercentage - 10);
            super.repair(effectiveRepairPercentage);
            }
        }



// Űrállomás: 


class SpaceStation {
    private fleet: Spaceship[] = [];
  
    addShip(ship: Spaceship): void {
      this.fleet.push(ship);
    }
  
    repairShips(repairPercentage: number): void {
      this.fleet.forEach(ship => ship.repair(repairPercentage));
    }
  
    spacefight(damage: number): number {
      const totalFirepower = this.fleet.reduce((sum, ship) => sum + ship.firepower, 0);
  
      this.fleet.forEach(ship => ship.getDamage(damage));
      this.fleet = this.fleet.filter(ship => ship.currentDurability > 0);
  
      return totalFirepower;
    }
  
    getStatus(): string[] {
      return this.fleet.map(ship => ship.status());
    }
  }

  


  const station = new SpaceStation();

  const fighter = new SpaceFighter("SS Balthar", 40);
  const avenger = new Avenger("SS Alexander", 50, "Eyepoker");
  const cruiser = new Battlecruiser("MSC Galactus", 80);
  
  station.addShip(fighter);
  station.addShip(avenger);
  station.addShip(cruiser);
  
  console.table(station.getStatus());
  station.repairShips(20);
  console.table(station.getStatus());
  
  const damageDealt = station.spacefight(30);
  console.table(`Total firepower: ${damageDealt}`);
  console.table(station.getStatus());
  

