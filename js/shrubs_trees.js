//https://lxnfykqvjokljzdduzaq.supabase.co

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4bmZ5a3F2am9rbGp6ZGR1emFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDg2MzksImV4cCI6MjAyMzQ4NDYzOX0.BWTCFL4NjwtJLRusGsYDCJOh0go7Wwpi1l7ouN_bEnE
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://lxnfykqvjokljzdduzaq.supabase.co/rest/v1/vild_mad?limit=22", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4bmZ5a3F2am9rbGp6ZGR1emFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDg2MzksImV4cCI6MjAyMzQ4NDYzOX0.BWTCFL4NjwtJLRusGsYDCJOh0go7Wwpi1l7ouN_bEnE",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  console.log(items);
  items.forEach(showItem);
  selectAllArticles();
}

function showItem(item) {
  const template = document.querySelector("#itemTemplate").content;

  //make copy

  const copy = template.cloneNode(true);

  //change input

  copy.querySelector("img").src = item.image;

  copy.querySelector("h2").textContent = item.title;

  //append

  document.querySelector("main .grid_produktliste").appendChild(copy);
}

function selectAllArticles() {
  const plantCards = document.querySelectorAll(".plant-card");
  console.log("plantCards er", plantCards);
  plantCards.forEach(generateRandomBackgroundColor);
}

function generateRandomBackgroundColor(card) {
  const colors = ["#48481F", "#D5CBB2", "#62622E", "#B29B7F", "#797939", "#98623A", "#633E23"];
  const randomIndex = Math.floor(Math.random() * colors.length); // Genererer tilfeldig indeks
  const randomColor = colors[randomIndex]; // Henter fargen med den tilfeldige indeksen
  console.log("farven er ", randomColor); // Skriver ut fargen
  card.style.backgroundColor = randomColor; // Setter bakgrunnsfargen til kortet
}
