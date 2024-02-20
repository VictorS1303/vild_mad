//https://lxnfykqvjokljzdduzaq.supabase.co

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4bmZ5a3F2am9rbGp6ZGR1emFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5MDg2MzksImV4cCI6MjAyMzQ4NDYzOX0.BWTCFL4NjwtJLRusGsYDCJOh0go7Wwpi1l7ouN_bEnE
const urlParams = new URLSearchParams(window.location.search);
const mySeason = urlParams.get("season");

document.querySelector(".season_overskrift").textContent = mySeason;

if (mySeason) {
  fetch(`https://lxnfykqvjokljzdduzaq.supabase.co/rest/v1/vild_mad?season=eq.${mySeason}`, {
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
  }
} else {
  fetch(`https://lxnfykqvjokljzdduzaq.supabase.co/rest/v1/vild_mad?limit=22`, {
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
  }
}

function showItem(item) {
  const template = document.querySelector("#itemTemplate").content;

  //make copy

  const copy = template.cloneNode(true);

  //change input

  copy.querySelector("img").src = item.image;

  copy.querySelector("h3").textContent = item.title;
  copy.querySelector("a").href = `plant.html/${item.id}`;

  //append

  document.querySelector("main .grid_produktliste").appendChild(copy);
}
