function searchPortfolio() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let items = document.getElementsByClassName("portfolio-item");

  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let title = item.getAttribute("data-title").toLowerCase();

    if (title.includes(input)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  }
}
