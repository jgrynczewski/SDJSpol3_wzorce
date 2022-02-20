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
    filter(products, spec) {
        const filteredProducts = []

        for (const p of products) {
            if (spec.isSatisfied(p)) {
                filteredProducts.push(p)
            }
        }
        return filteredProducts
    }
}

class SizeSpecification {
    constructor(size) {
        this.size = size
    }

    isSatisfied(item) {
        return this.size === item.size
    }
}

class ColorSpecification {
    constructor(color) {
        this.color = color
    }

    isSatisfied(item) {
        return this.color === item.color
    }
}

const apple = new Product("Apple", SMALL, GREEN)
const tree = new Product("Tree", LARGE, GREEN)
const house = new Product("House", LARGE, BLUE)

const products = [apple, tree, house]

const largeSpec = new SizeSpecification(LARGE)

const pf = new ProductFilter()
const result = pf.filter(products, largeSpec)

console.log("Duże produkty:")
for (const item of result) {
    console.log(`${item.name} jest duży`)
}

const greenSpec = new ColorSpecification(GREEN)

const result2 = pf.filter(products, greenSpec)

console.log("Zielone produkty:")
for (const item of result2) {
    console.log(`${item.name} jest zielony`)
}
