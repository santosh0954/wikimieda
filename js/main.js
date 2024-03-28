console.log(
  'Designed with ❤ by "Santosh Jha". (Email: santoshjhavns@gmail.com)'
);


const toggleSearch = document.getElementById("toggle-search");
const searchInput = document.getElementById("search-input");
const navbar = document.querySelector(".menu");

toggleSearch.addEventListener("click", function () {
  searchInput.classList.toggle("d-none");
  if (!searchInput.classList.contains("d-none")) {
    toggleSearch.innerHTML = "<i class='fa fa-close'></i>";
    navbar.classList.toggle("hideMenu");
  } else {
    toggleSearch.innerHTML = "<i class='fa fa-search'></i>";
    navbar.classList.toggle("hideMenu");
  }
});