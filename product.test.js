const { addProduct, resetProducts, removeProduct, getProducts, updateProduct } = require("./product");

test("Comprobar Undefined", () => {
    resetProducts()

    const test = addProduct("azucar", 2)
    expect(test).toEqual({id: 1, nombre: "azucar", precio: 2})
})

test("Comprobar Duplicado", () => {
    const duplicado = addProduct("azucar", 2)
    expect(duplicado).toEqual({id: 2, nombre: "azucar", precio: 2})
})

test("Comprobar Traer Producto", () => {
    const traer = getProducts(2)
    expect(traer).toEqual({id: 2, nombre: "azucar", precio: 2})
})

test("Comprobar Actualización", () => {
    const update = updateProduct(1, "sal", 3)
    expect(update).toEqual({id: 1, nombre: "sal", precio: 3})
})

/* test("Comprobar Remove", () => {
    const indice = removeProduct(2)
    expect(indice).toBe(undefined)
}) */