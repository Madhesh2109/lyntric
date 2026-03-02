// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Navbar shrink on scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// ================= HERO COUNTER ANIMATION =================

const heroCounters = document.querySelectorAll(".counter");

const startCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const updateCounter = () => {
        const increment = target / 100;

        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
};

// Trigger animation when hero loads
window.addEventListener("load", () => {
    counters.forEach(counter => {
        startCounter(counter);
    });
});


// Animated Counter
const counters = document.querySelectorAll('.counter');
const speed = 200; // lower = faster

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
};

// Trigger animation when section appears
const marketSection = document.querySelector('.market-intel');

const counterObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        startCounters();
        counterObserver.disconnect();
    }
}, { threshold: 0.5 });

counterObserver.observe(marketSection);

// Fade-in animation for timeline
const items = document.querySelectorAll(".timeline-item");

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, {
    threshold: 0.3
});

items.forEach(item => {
    timelineObserver.observe(item);
});

// ================= CONTACT FORM =================
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! We will get back to you shortly.");
});

// ================= YAHOO FINANCE LIVE TICKER =================
/*

const symbols = [
    { symbol: "HDFCBANK.NS", name: "HDFC Bank" },
    { symbol: "ICICIBANK.NS", name: "ICICI Bank" },
    { symbol: "SBIN.NS", name: "SBI" },
    { symbol: "PAYTM.NS", name: "Paytm" }
];

const tickerTrack = document.getElementById("tickerTrack");

async function fetchStockData() {
    tickerTrack.innerHTML = "Loading market data...";
    let tickerHTML = "";

    try {
        const response = await fetch("http://localhost:3000/api/stocks");
        const data = await response.json();

        const results = data.quoteResponse.result;

        results.forEach(stock => {
            const price = stock.regularMarketPrice.toFixed(2);
            const changePercent = stock.regularMarketChangePercent.toFixed(2);

            const direction = changePercent >= 0 ? "▲" : "▼";
            const color = changePercent >= 0 ? "#00ff88" : "#ff4d4d";

            tickerHTML += `
                <span style="margin:0 40px; color:white;">
                    ${stock.shortName} ₹${price}
                    <span style="color:${color};">
                        ${direction} ${changePercent}%
                    </span>
                </span>
            `;
        });

        tickerTrack.innerHTML = tickerHTML;

    } catch (error) {
        tickerTrack.innerHTML = "Market data unavailable.";
    }
}

// Fetch on load
fetchStockData();

// Refresh every 60 seconds
setInterval(fetchStockData, 60000);

*/