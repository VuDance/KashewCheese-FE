export type User={
    id: string,
    name: string,
    createdAt: string,
    role: string
}
export type Product={
    name: string,
    category: string,
    price: number,
    image: string[],
    quantity: number,
    description: string
}
export type Order={
    id: string,
    name: string,
    address: string,
    date: string,
    status: string
}
export type Role={
    name: string,
    createdAt: string,
}
export type SubCategory={
    name: string,
    createdAt: string,
}
export type Category={
    name: string,
    createdAt: string,
    subCategory: SubCategory[]
}