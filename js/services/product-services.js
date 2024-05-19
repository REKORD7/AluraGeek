const productList = () => {
    //prueba con fake api local
    //return fetch("http://localhost:3000/products")
    
    //fake api usando vercel para desplegar en linea
    return fetch("https://fake-api-gold-seven.vercel.app/products")
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const createProduct = (name, price, image) => {
    return fetch("https://fake-api-gold-seven.vercel.app/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, price, image })
    })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

const deleteProduct = (id) =>{
    return fetch(`https://fake-api-gold-seven.vercel.app/products/${id}`, {
        method: "DELETE",
    })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export const servicesProducts = {
    productList, createProduct, deleteProduct,
}