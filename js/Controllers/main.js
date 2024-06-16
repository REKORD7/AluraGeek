import { servicesProducts } from "../services/product-services.js";

const productContainer = document.querySelector("[data-product-series]");
const form = document.querySelector("[data-form]");


function createCard(name, price, image, id) {
    const card = document.createElement("li");
    card.classList.add("product_card");

    card.innerHTML = `
        <div class="img_container">
            <img src="${image}" alt="${name}">
        </div>
        <div class="card_info">
            <h3 class="product_name">${name}</h3>
            <div class="card_price">
                <p>$ ${price}</p>
                <button class="delete_btn" data-id="${id}">
                    <img src="./img/trash.png" alt="boton eliminar">
                </button>
            </div>
        </div>
    `;

    productContainer.appendChild(card);

    const deleteBtn = card.querySelector(".delete_btn");
    deleteBtn.addEventListener("click", () => {
        const id = deleteBtn.getAttribute("data-id");
        servicesProducts.deleteProduct(id);

    })

    return card;
}

const render = async () => {
    try {
        const listProducts = await servicesProducts.productList();
        listProducts.forEach(product => {
            productContainer.appendChild(
                createCard(
                    product.name, 
                    product.price, 
                    product.image, 
                    product.id
                )
            )
        });
    } catch (error) {
        console.log(error);
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("[data-name ]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    servicesProducts.createProduct(name,price,image)
    .then((res) => window.location.reload())
    .catch((err) => console.log(err));
})


render();
