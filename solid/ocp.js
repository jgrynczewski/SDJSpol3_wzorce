// O - Open Close Principle (OCP)

const RED = 1
const GREEN = 2
const BLUE = 3

const SMALL = 1
const MEDIUM = 2
const LARGE = 3


class Product {
    constructor(name, size, color) {
        this.name = name
        this.size = size
        this.color = color
    }
}

class ProductFilter {

    filterBySize(products, size) {
        const filteredProducts = []

        for (const p of products) {
            if (p.size === size) {
                filteredProducts.push(p)
            }
        }
        return filteredProducts
    }

    filterByColor(products, color) {
        const filteredProducts = []

        for (const p of products) {
            if (p.color === color) {
                filteredProducts.push(p)
            }
        }
        return filteredProducts
    }
}


const apple = new Product("Apple", SMALL, GREEN)
const tree = new Product("Tree", LARGE, GREEN)
const house = new Product("House", LARGE, BLUE)

const products = [apple, tree, house]

const pf = new ProductFilter()
const result = pf.filterBySize(products, LARGE)

console.log("Duże produkty:")
for (const item of result) {
    console.log(`${item.name} jest duży`)
}

const result2 = pf.filterByColor(products, GREEN)
console.log("Zielone produkty:")
for (const item of result2) {
    console.log(`${item.name} jest zielony`)
}
