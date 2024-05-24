function toggleDropdown(id) {
  document.getElementById(id).classList.toggle("show");
}

function filterJobs(criteria, value) {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const cardData = card.dataset[criteria].toLowerCase();
    if (cardData.includes(value.toLowerCase())) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (const element of dropdowns) {
      const openDropdown = element
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
