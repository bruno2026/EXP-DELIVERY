const OrdersController = require('./controllers/OrdersController');


pdts = OrdersController.list;

const DOM = {
    addProduct(product) {
        let produtos = document.querySelector(".orders-list-items");

            divCardContainer = document.createElement('div');
            divCardContainer.className = 'order-card-container';

            h3CardTitle = document.createElement('h3');
            h3CardTitle.className = 'order-card-title';
            h3CardTitle.textContent = product.name;

            imgCard = document.createElement('img');
            imgCard.className = 'order-card-image';
            imgCard.src = product.image_uri;

            h3CardPrice = document.createElement('h3');
            h3CardPrice.className= 'order-card-price';
            h3CardPrice.textContent = product.price;

            divCardDescript = document.createElement('div');
            divCardDescript.className = 'order-card-description';

            h3 = document.createElement('h3');
            h3.textContent = "Descrição";
            const p = document.createElement('p');
            p.textContent = product.description;

            produtos.appendChild(divCardContainer);
            divCardContainer.appendChild(h3CardTitle);
            divCardContainer.appendChild(imgCard);
            divCardContainer.appendChild(h3CardPrice);
            divCardContainer.appendChild(divCardDescript);
    
            divCardDescript.appendChild(h3);
            divCardDescript.appendChild(p);
}}

pdts.forEach(function(pdt){
    DOM.addProduct(pdt)
})

console.log(pdts.length)