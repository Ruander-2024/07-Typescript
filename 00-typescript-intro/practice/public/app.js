//  Product interface létrehozása
//  Bruttó ár beállító függvény
function setGrossPrice(product) {
    var productionCost = product.productionCost, profitMargin = product.profitMargin, vatRate = product.vatRate;
    var gross = productionCost * (1 + profitMargin / 100) * (1 + vatRate / 100);
    product.grossPrice = Math.round(gross); // Egész számra kerekítés
}
//  Példatermékek létrehozása
var products = [
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
function calculateProfit(products) {
    var totalProfit = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        if (product.grossPrice === undefined) {
            setGrossPrice(product);
        }
        var netProfit = (product.grossPrice - product.productionCost) * product.soldQuantity;
        totalProfit += netProfit;
    }
    if (totalProfit > 500) {
        return "Alert, extraprofit: ".concat(totalProfit - 500, "!");
    }
    return totalProfit;
}
//  Függvények tesztelése
// Bruttó árak beállítása
products.forEach(setGrossPrice);
console.log("Termékek bruttó ára:", products);
// Haszon összesítése
var profit = calculateProfit(products);
console.log("Összesített haszon:", profit);
