fetch("data/products.json")
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById("products-grid");

    if (!container) return;

    container.innerHTML = "";

    products.forEach(product => {
      const card = document.createElement("article");
      card.className = "product-card";

      card.innerHTML = `
        <button class="product-image-button" onclick="openImage('${product.image}', '${product.name}')">
          <img src="${product.image}" alt="${product.name}">
        </button>

        <div class="product-card-content">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => console.error("Error loading products:", error));

function openImage(src, alt) {
  const overlay = document.createElement("div");
  overlay.className = "image-lightbox";

  overlay.innerHTML = `
    <button class="lightbox-close" onclick="this.parentElement.remove()">×</button>
    <img src="${src}" alt="${alt}">
  `;

  overlay.addEventListener("click", function(event) {
    if (event.target === overlay) {
      overlay.remove();
    }
  });

  document.body.appendChild(overlay);
}
