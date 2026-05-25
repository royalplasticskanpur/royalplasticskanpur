fetch("data/products.json")
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById("products");

    products.forEach(product => {
      const card = document.createElement("div");
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
  })
  .catch(error => {
    console.error("Error loading products:", error);
  });
