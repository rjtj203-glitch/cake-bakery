/* =====================================================
   CHETAN'S BAKERY
   Product & Shopping Cart JavaScript
===================================================== */


/* ================= PRODUCTS ================= */

const products = [

    {
        id: 1,
        name: "Chocolate Truffle Cake",
        category: "cake",
        price: 650,
        description: "Rich chocolate cake with creamy chocolate frosting.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 2,
        name: "Black Forest Cake",
        category: "cake",
        price: 600,
        description: "Classic chocolate cake with cherries and cream.",
        image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 3,
        name: "Red Velvet Cake",
        category: "cake",
        price: 750,
        description: "Soft red velvet sponge with delicious cream cheese frosting.",
        image: "https://images.unsplash.com/photo-1586788224331-947f68671cf1?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 4,
        name: "Butterscotch Cake",
        category: "cake",
        price: 650,
        description: "Creamy butterscotch cake with crunchy caramel pieces.",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 5,
        name: "Chocolate Pastry",
        category: "pastry",
        price: 80,
        description: "Soft chocolate pastry topped with chocolate cream.",
        image: "https://images.unsplash.com/photo-1575377427642-087cf684f29d?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 6,
        name: "Pineapple Pastry",
        category: "pastry",
        price: 70,
        description: "Fresh pineapple pastry with soft whipped cream.",
        image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 7,
        name: "Strawberry Pastry",
        category: "pastry",
        price: 80,
        description: "Fresh strawberry pastry with creamy topping.",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 8,
        name: "Veg Pattie",
        category: "pattie",
        price: 35,
        description: "Crispy golden pattie filled with spicy vegetables.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 9,
        name: "Paneer Pattie",
        category: "pattie",
        price: 45,
        description: "Crispy pattie stuffed with delicious spicy paneer.",
        image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 10,
        name: "Cheese Pattie",
        category: "pattie",
        price: 50,
        description: "Crunchy pattie filled with melted cheese.",
        image: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 11,
        name: "Veg Momos",
        category: "momos",
        price: 80,
        description: "Steamed momos filled with fresh vegetables.",
        image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 12,
        name: "Paneer Momos",
        category: "momos",
        price: 100,
        description: "Soft steamed momos filled with spicy paneer.",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 13,
        name: "Fried Momos",
        category: "momos",
        price: 110,
        description: "Crispy fried momos served with spicy chutney.",
        image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 14,
        name: "Tandoori Momos",
        category: "momos",
        price: 130,
        description: "Smoky tandoori momos with special bakery sauce.",
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80"
    }

];


/* ================= CART ================= */

let cart = [];


/* ================= DISPLAY PRODUCTS ================= */

function displayProducts(productList) {

    const grid = document.getElementById("product-grid");

    grid.innerHTML = "";


    if (productList.length === 0) {

        grid.innerHTML = `
            <div style="
                grid-column: 1/-1;
                text-align:center;
                padding:50px;
            ">
                <h2>😔 No products found</h2>
                <p>Try another search.</p>
            </div>
        `;

        return;
    }


    productList.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";


        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.description}
                </p>


                <div class="product-bottom">

                    <span class="price">
                        ₹${product.price}
                    </span>

                    <button
                        class="add-btn"
                        onclick="addToCart(${product.id})"
                    >
                        + Add
                    </button>

                </div>

            </div>

        `;


        grid.appendChild(card);

    });

}


/* ================= FILTER PRODUCTS ================= */

function filterProducts(category) {

    if (category === "all") {

        displayProducts(products);

        return;
    }


    const filtered = products.filter(
        product => product.category === category
    );


    displayProducts(filtered);

}


/* ================= SEARCH ================= */

function searchProducts() {

    const searchValue =
        document
            .getElementById("search")
            .value
            .toLowerCase()
            .trim();


    const filtered = products.filter(product =>

        product.name
            .toLowerCase()
            .includes(searchValue)

        ||

        product.category
            .toLowerCase()
            .includes(searchValue)

        ||

        product.description
            .toLowerCase()
            .includes(searchValue)

    );


    displayProducts(filtered);

}


/* ================= ADD TO CART ================= */

function addToCart(productId) {

    const product = products.find(
        item => item.id === productId
    );


    if (!product) return;


    const existingItem = cart.find(
        item => item.id === productId
    );


    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }


    updateCart();


    // Open cart automatically

    openCart();

}


/* ================= UPDATE CART ================= */

function updateCart() {

    const cartItems =
        document.getElementById("cart-items");

    const cartCount =
        document.getElementById("cart-count");

    const cartTotal =
        document.getElementById("cart-total");


    /* Calculate total quantity */

    const totalQuantity = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );


    cartCount.textContent = totalQuantity;


    /* Empty cart */

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

        cartTotal.textContent = "₹0";

        return;
    }


    /* Display cart items */

    cartItems.innerHTML = "";


    cart.forEach(item => {

        const cartItem =
            document.createElement("div");


        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <div>

                <h4>
                    ${item.name}
                </h4>

                <small>
                    ₹${item.price} × ${item.quantity}
                </small>

            </div>


            <div class="quantity">

                <button
                    onclick="changeQuantity(${item.id}, -1)"
                >
                    −
                </button>

                <span>
                    ${item.quantity}
                </span>

                <button
                    onclick="changeQuantity(${item.id}, 1)"
                >
                    +
                </button>

            </div>


            <button
                class="remove-btn"
                onclick="removeFromCart(${item.id})"
            >
                Remove
            </button>

        `;


        cartItems.appendChild(cartItem);

    });


    /* Calculate price */

    const total = cart.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );


    cartTotal.textContent = `₹${total}`;

}


/* ================= CHANGE QUANTITY ================= */

function changeQuantity(productId, change) {

    const item = cart.find(
        product => product.id === productId
    );


    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        cart = cart.filter(
            product => product.id !== productId
        );

    }


    updateCart();

}


/* ================= REMOVE ITEM ================= */

function removeFromCart(productId) {

    cart = cart.filter(
        item => item.id !== productId
    );


    updateCart();

}


/* ================= OPEN CART ================= */

function openCart() {

    document
        .getElementById("cart")
        .classList
        .add("active");


    document
        .getElementById("cart-overlay")
        .classList
        .add("active");

}


/* ================= CLOSE CART ================= */

function closeCart() {

    document
        .getElementById("cart")
        .classList
        .remove("active");


    document
        .getElementById("cart-overlay")
        .classList
        .remove("active");

}


/* ================= CHECKOUT ================= */

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

        return;
    }


    let orderMessage =
        "Hello Chetan's Bakery!%0A%0A";

    orderMessage +=
        "I would like to order:%0A%0A";


    cart.forEach(item => {

        orderMessage +=
            `${item.name} x ${item.quantity} = ₹${item.price * item.quantity}%0A`;

    });


    const total = cart.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );


    orderMessage +=
        `%0ATotal: ₹${total}`;


    /*
        Replace the number below with
        the bakery's actual WhatsApp number.

        Format:
        91 + phone number

        Example:
        919876543210
    */

    const phoneNumber = "919467211478";


    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${orderMessage}`;


    window.open(
        whatsappURL,
        "_blank"
    );

}


/* ================= INITIAL LOAD ================= */

displayProducts(products);

updateCart();
