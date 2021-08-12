// Accordian
const accordianItems = document.querySelectorAll(".accordian-item");
accordianItems.forEach((accordianItem) => {
  const accordianBody = accordianItem.lastElementChild;
  if (accordianItem.classList.contains("active")) {
    accordianBody.style.maxHeight = accordianBody.scrollHeight + "px";
  }
  accordianItem.addEventListener("click", () => {
    const allactiveElement = document.querySelectorAll(
      ".accordian-item.active"
    );
    if (allactiveElement) {
      allactiveElement.forEach((item) => {
        if (item !== accordianItem) {
          item.lastElementChild.style.maxHeight = 0;
          item.classList.toggle("active");
        }
      });
    }
    accordianItem.classList.toggle("active");
    if (accordianItem.classList.contains("active")) {
      accordianBody.style.maxHeight = accordianBody.scrollHeight + "px";
    } else {
      accordianBody.style.maxHeight = 0;
    }
  });
});

// Carousel
$("#owl-one").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
  },
});

$("#owl-two").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});
//side-nav
const closeBtn = document.querySelector(".close");
const menuBar = document.querySelector(".menu-bar");
const sideNav = document.querySelector(".side-nav");
const overlay = document.querySelector(".overlay");

[menuBar, overlay, closeBtn].forEach((item) =>
  item.addEventListener("click", openClose)
);

function openClose() {
  overlay.classList.toggle("active");
  sideNav.classList.toggle("active");
  if (sideNav.classList.contains("active")) {
    menuBar.firstChild.classList = "fas fa-times";
  } else {
    menuBar.firstChild.classList = "fas fa-bars";
  }
}
