let clickCount = 0;

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {

    // Prevent clicking same card again
    if (card.classList.contains("flipped")) return;

    // Flip card
    card.classList.add("flipped");
});
});


function flipCard(card) {
  clickCount++;

  const img = card.querySelector(".result-img");

  if (clickCount === 1) {
    img.src = "bad.jpeg"; // your BAD image
    card.classList.add("flip");

    document.getElementById("Try-again").style.display = "flex";
    
  }
   

   else if (clickCount === 2) {

       img.src = "good.jpeg"; // your GOOD image
    card.classList.add("flip");
      document.getElementById("popup").style.display = "flex";
    }
  }

// Show popup automatically (it already shows because no display:none)

const popup = document.getElementById("popup");
const okBtn = document.getElementById("okBtn");
// When user clicks OK → hide popup
okBtn.addEventListener("click", () => {
  popup.style.display = "none";
  });

const TryAgain = document.getElementById("Try-again");
const retryBtn = document.getElementById("retryBtn");


// When user clicks OK → hide popup
retryBtn.addEventListener("click", () => {
  TryAgain.style.display = "none";
  });


document.getElementById("closeBtn").addEventListener("click", function() {
  document.getElementById("popup").style.display = "none";
});

document.getElementById("closeBtn").addEventListener("click", function() {
  document.getElementById("Try-again").style.display = "none";


});

function startConfetti() {
  setInterval(() => {
    confetti({
      particleCount: 5,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        y: 0
      }
    });
  }, 200);
}

// Start immediately
startConfetti();

if (clickCount === 2) {
  document.getElementById("popup").style.display = "flex";
}

document.getElementById("okBtn").addEventListener("click", function() {
  document.getElementById("reload").style.display = "none";

  
});
function updateDate() {
  const today = new Date();

  const day = today.getDate();
  const month = today.toLocaleString('default', { month: 'long' });

  // Function to add "st", "nd", "rd", "th"
  function getDaySuffix(day) {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  }

  const formattedDate = `${day}${getDaySuffix(day)} of ${month}`;

  document.getElementById("date").textContent = formattedDate;
}


// Run immediately
updateDate();






