const coins = ['bitcoin', 'ethereum', 'dogecoin', 'litecoin'];  // Add new coin ids here

async function getCryptoData() {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coins.join(',')}`);
    const data = await response.json();
    
    const container = document.getElementById('crypto-container');
    container.innerHTML = "";  // Clear existing content

    data.forEach(coin => {
        const coinElement = document.createElement('div');
        coinElement.innerHTML = `
            <h2>${coin.name} (${coin.symbol.toUpperCase()})</h2>
            <p>السعر: $${coin.current_price}</p>
            <p>التغيير في آخر 24 ساعة: ${coin.price_change_percentage_24h}%</p>
            <hr>
        `;
        container.appendChild(coinElement);
    });
}
