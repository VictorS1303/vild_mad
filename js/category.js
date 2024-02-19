fetch("https://lxnfykqvjokljzdduzaq.supabase.co/rest/v1/vild_mad", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4bmZ5a3F2am9rbGp6ZGR1emFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDg2MzksImV4cCI6MjAyMzQ4NDYzOX0.BWTCFL4NjwtJLRusGsYDCJOh0go7Wwpi1l7ouN_bEnE",
  },
})
  .then((res) => res.json())
  .then(showData);

function showCategories(categories) {
  console.log(categories);
  products.forEach(showCategory);
}

function showCategory(category) {
  const template = document.querySelector("#categoryTemplate").content;
  const copy = template.cloneNode(true);

  //ændre indhold

  copy.querySelector("h2").textContent = category.season;
  //copy.querySelector(".kategorier2").textContent = product.category;
  //   copy.querySelector("a").href = `produktliste.html?category=${product.category}`;

  document.querySelector("main .liste_kategori").appendChild(copy);
}
