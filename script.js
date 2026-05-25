fetch("data/products.json")
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById("products-list");

    if (!container) return;

    container.innerHTML = "";

    products.forEach(product => {
      const card = document.createElement("article");
      card.className = "product-card";

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-content">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
        </div>
      `;

      container.appendChild(card);
    });
  });
