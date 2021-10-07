// Toggle Menu
let toggleMenu = document.querySelector(".menu-toggle");
toggleMenu.onclick = function () {
  this.classList.toggle("opening");
};

// Click Anywhere Outside Menu And Toggle Butoon
document.addEventListener("click", (e) => {
  if (e.target !== toggleMenu) {
    // Check If Menu Is Open
    if (toggleMenu.classList.contains("opening")) {
      // Toggle Class Open On Links
      toggleMenu.classList.toggle("opening");
    }
  }
});

// Select All Elemnets
const allLinks = document.querySelectorAll(".links a");
function scrollToSmoothAnyWhere(elements) {
  elements.forEach((elementSmooth) => {
    elementSmooth.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scrollToSmoothAnyWhere(allLinks);

//Create slider
var sliderList = Array.from(document.querySelectorAll(".slider-box li"));
var sliderListP = Array.from(document.querySelectorAll(".slider-box li p"));
var sliderListA = Array.from(document.querySelectorAll(".slider-box li a"));
var slideIndicator = document.querySelector(".slide-indicators");
var sliderCount = sliderList.length;
var currentSlide = 1;
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

for (var i = 1; i <= sliderCount; i++) {
  var indicatorElement = document.createElement("span");
  indicatorElement.setAttribute("data-slide", i);
  indicatorElement.classList.add("single-indicator");
  indicatorElement.appendChild(document.createTextNode(i));
  slideIndicator.appendChild(indicatorElement);
}
// Get The New Created span
var slideIndicatorBullets = Array.from(
  document.querySelectorAll(".slide-indicators span")
);
// Loop All Bullets Items
for (var i = 0; i < slideIndicatorBullets.length; i++) {
  slideIndicatorBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-slide"));
    theCkecker();
  };
}
// Trigger The Ckecker Function
theCkecker();

// Next Slide Function
function nextSlide() {
  if (nextBtn.classList.contains("disabled")) {
    // Do Nothing
    return false;
  } else {
    currentSlide++;
    theCkecker();
  }
}

// Previous Slide Function
function prevSlide() {
  if (prevBtn.classList.contains("disabled")) {
    // Do Nothing
    return false;
  } else {
    currentSlide--;
    theCkecker();
  }
}
//Checker Function
function theCkecker() {
  removeAllActive();
  sliderList[currentSlide - 1].classList.add("active");
  slideIndicator.children[currentSlide - 1].classList.add("active");

  // // Check If Current Slider Is First
  if (currentSlide == 1) {
    //Add Disbled Class On Previous Button
    prevBtn.classList.add("disabled");
  } else {
    //Remove Disbled Class On Previous Button
    prevBtn.classList.remove("disabled");
  }

  // // Check If Current Slider Is Last
  if (currentSlide == sliderCount) {
    //Add Disbled Class On Next Button
    nextBtn.classList.add("disabled");
  } else {
    //Remove Disbled Class On Next Button
    nextBtn.classList.remove("disabled");
  }
}
// Remove All Active Classes
function removeAllActive() {
  //Loop Li
  sliderList.forEach(function (li) {
    li.classList.remove("active");
  });

  //Loop Indicator Bullet
  slideIndicatorBullets.forEach(function (span) {
    span.classList.remove("active");
  });
}

function hoversToggleP() {
  for (var i = 0; i < sliderListP.length; i++) {
    sliderListP[i].classList.toggle("hovers");
  }
}
Array.from(sliderListP).forEach(function (p) {
  p.addEventListener("mouseover", hoversToggleP);
});

Array.from(sliderListP).forEach(function (p) {
  p.addEventListener("mouseout", hoversToggleP);
});
//####################################
function hoversToggleA() {
  for (var i = 0; i < sliderListA.length; i++) {
    sliderListA[i].classList.toggle("hovers");
  }
}

Array.from(sliderListA).forEach(function (a) {
  a.addEventListener("mouseover", hoversToggleA);
});

Array.from(sliderListA).forEach(function (a) {
  a.addEventListener("mouseleave", hoversToggleA);
});
// End Slider

// Start Sklis circle-progress
let progressText = document.querySelectorAll(".progress-text");
let progressDiv = document.querySelectorAll(".progress");
let progressSklis = document.querySelector(".skllis");

let checkDiv = false;

window.onscroll = function () {
  let skillsOffestTop = progressSklis.offsetTop;
  let skillsOuterHeight = progressSklis.offsetHeight;
  let windowHieght = window.innerHeight;
  let windowScrollTop = window.pageYOffset;
  if (
    windowScrollTop >= skillsOffestTop + skillsOuterHeight - windowHieght &&
    checkDiv === false
  ) {
    for (let i = 0; i < progressText.length; i++) {
      progressText[i].textContent = 0;
      number = 0;
      progressDiv[i].style.bottom = "100";
      progressDiv[i].style.bottom = progressText[i].dataset.number - 100 + "%";

      function changeNumber() {
        complete = parseInt(progressText[i].dataset.number);

        if (number < complete) {
          number++;
          progressText[i].textContent = number;
          setTimeout(changeNumber, 50);
        } else {
          progressText[i].textContent = complete + "%";
        }
      }
      changeNumber();
      checkDiv = true;
    }
  }
};
// End Sklis circle-progress

// timeline menu
const allTimelineMenu = document.querySelectorAll("#timeline-menu ul li");
const allTimelineContent = document.querySelectorAll(
  "#timeline-content .content-text"
);
const allTimelineProcess = document.querySelector("#line-process");
let count = "25%";
allTimelineMenu.forEach((li) => {
  li.addEventListener("click", (e) => {
    allTimelineContent.forEach((text) => {
      if (text.classList.contains(li.dataset.content)) {
        handleActiveClasses(text);
        allTimelineProcess.style.width = text.dataset.count + "%";
      }
    });
  });
});

// Handle Active Classes
function handleActiveClasses(even) {
  // Remove Active Class From All Childern
  even.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });
  // Add Active Class On Element Self
  even.classList.add("active");
}
