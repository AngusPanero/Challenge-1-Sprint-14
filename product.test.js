/* - resetProducts(): reinicia la lista de productos y el id.
-1 addProduct(name, price): agrega un producto a la lista de productos.
-2 removeProduct(id): elimina un producto de la lista de productos.
-3 getProducts(): devuelve todos los productos.
-4 resetProducts(): reinicia la lista de productos.
-5 getProduct(id): devuelve un producto por su id.
-6 updateProduct(id, name, price): actualiza un producto por su id. */

let products = []; // declaramos una variable products vacío

// 1
const addProduct = (name, price) =>{
    const nuevoProducto = {
        id: products.length + 1,
        nombre: name,
        precio: price
    };

        products.push(nuevoProducto)
}
addProduct("azucar", 2)
addProduct("leche", 2)
addProduct("vino", 4)
addProduct("agua", 1,5)
addProduct("pan", 3)
addProduct("fruta", 2)
console.log("1 Add", products)

// 2
const removeProduct = (id) => {
    const indice = products.findIndex( producto => producto.id === id)
    products.splice(indice, 1)
} 
removeProduct(2)
console.log("2 Remove", products);

// 3 y 5
const getProducts = (id = null) => {
    if(id === null){
    return products;
    }
    else{
        const indice = products.findIndex(producto => producto.id === id)
        return products[indice]
    }
}
console.log("3 getProducts", getProducts());
console.log("5 getProducts ID", getProducts(5));

// 6
const updateProduct = (id, name, price) => {
    const indice = products.findIndex(producto => producto.id === id)
    if(indice !== -1){
    products[indice] = {
        id: id,
        nombre: name,
        precio: price
    };
}
}
updateProduct(6, "refresco", 2)
console.log("6 update", products)

// 4
const resetProducts = () => {
    products.splice(0, products.length);
};
resetProducts()
console.log("4 resert", products) 