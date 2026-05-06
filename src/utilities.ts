// utility types

type Product = {
    id: number
    name: string
    price: string
    stock: number
    color?: string
}

type ProductSummary = Pick<Product, "id" | "name" | "price">

type ProductWithoutStock = Omit<Product, "stock" | "color">

type ProductWithColor = Required<Product>

const product1: ProductWithColor = {
    id: 234,
    name: "Laptop",
    price: "$1000",
    stock: 10,
    color: "black"
}

type OptionalProduct = Partial<Product>
type ProductReadonly = Readonly<Product>

const emptyObject: Record<string, unknown> = {}
const product2 = {
    id: 234,
    name: "Laptop",
    price: "$1000",
    stock: 10,
    color: "black"
}