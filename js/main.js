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

// calendar related script 

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();
const day = date.getDay();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function renderCalendar() {
 const currentDate = document.querySelector(".calendar_wrapper header p");
 const days = document.querySelector(".calendar_wrapper .days");
 
 let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
 let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
 let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
 let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
 let liTag = "";
 for (let i = firstDayofMonth; i > 0; i--) {
  console.log(lastDateofLastMonth, i )
   liTag += `<li class="inactive"> ${lastDateofLastMonth - i + 1} </li>`;
  
}

currentDate.innerText = `${months[currMonth]} ${currYear}`;
for (let i = 1; i <= lastDateofMonth; i++) {
  const isToday = new Date().getDate() === i && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active": "";
  liTag += `<li class=${isToday}> <a href="${months[currMonth]}-${i}-holidays"> ${i} </a> </li>`;
  
}
for (let i = lastDayofMonth; i < 6; i++) {
   liTag += `<li class="inactive"> ${i - lastDayofMonth + 1} </li>`;
  
}

  days.innerHTML = liTag;

};
renderCalendar()

const nextPrevButton = document.querySelectorAll(".calendar_wrapper .btn-group button");
nextPrevButton.forEach((item) => {
  item.addEventListener("click", function () {
    // console.log(this.id)
    currMonth = this.id === "prev" ? currMonth - 1 : currMonth + 1;
    if(currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    }
    renderCalendar()
  });
});
