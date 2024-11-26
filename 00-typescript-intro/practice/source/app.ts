//  Product interface létrehozása

interface Product {
    name: string;
    readonly productId: number;
    description: string;
    productionCost: number;
    profitMargin: number;
    vatRate: 15 | 25; // Csak 15% vagy 25% engedélyezett
    grossPrice?: number; // Opcionális
    soldQuantity: number;
  }
 
  
//  Bruttó ár beállító függvény

function setGrossPrice(product: Product): void {
    const { productionCost, profitMargin, vatRate } = product;
    const gross = productionCost * (1 + profitMargin / 100) * (1 + vatRate / 100);
    product.grossPrice = Math.round(gross); // Egész számra kerekítés
  }


//  Példatermékek létrehozása

const products: Product[] = [
    {
      name: "Termék A",
      productId: 1,
      description: "Első termék",
      productionCost: 100,
      profitMargin: 20,
      vatRate: 25,
      soldQuantity: 10,
    },
    {
      name: "Termék B",
      productId: 2,
      description: "Második termék",
      productionCost: 200,
      profitMargin: 15,
      vatRate: 15,
      soldQuantity: 5,
    },
  ];

  

//   Haszon összesítő függvény


function calculateProfit(products: Product[]): string | number {
    let totalProfit = 0;
  
    for (const product of products) {
      if (product.grossPrice === undefined) {
        setGrossPrice(product);
      }
      const netProfit = (product.grossPrice! - product.productionCost) * product.soldQuantity;
      totalProfit += netProfit;
    }
  
    if (totalProfit > 500) {
      return `Alert, extraprofit: ${totalProfit - 500}!`;
    }
  
    return totalProfit;
  }

  

//  Függvények tesztelése

// Bruttó árak beállítása
products.forEach(setGrossPrice);
console.log("Termékek bruttó ára:", products);

// Haszon összesítése
const profit = calculateProfit(products);
console.log("Összesített haszon:", profit);
