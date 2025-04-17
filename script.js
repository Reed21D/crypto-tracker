const container = document.getElementById("crypto-container");

async function getCryptoPrices() {
  const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,dogecoin");
  const data = await response.json();

  container.innerHTML = "";
  data.forEach(coin => {
    const div = document.createElement("div");
    div.className = "crypto";
    div.innerHTML = `
      <h2>${coin.name}</h2>
      <p>💵 Price: $${coin.current_price}</p>
      <p>📈 Change (24h): ${coin.price_change_percentage_24h.toFixed(2)}%</p>
    `;
    container.appendChild(div);
  });
}

getCryptoPrices();
setInterval(getCryptoPrices, 10000); // يحدث كل 10 ثواني
