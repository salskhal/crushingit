const userIcon = document.getElementById("user-dropdown");
const userDropdown = document.getElementById("user-dropdown-content");

const notificationIcon = document.getElementById("notification-dropdown");
const notificationDropdown = document.getElementById(
  "notification-dropdown-content"
);

userIcon.addEventListener("click", () => {
  userDropdown.classList.toggle("show");
});

notificationIcon.addEventListener("click", () => {
  notificationDropdown.classList.toggle("show");
});

// close user dropdown when notification dropdown is clicked
notificationIcon.addEventListener("click", () => {
  userDropdown.classList.remove("show");
});

// close notification dropdown when user dropdown is clicked
userIcon.addEventListener("click", () => {
  notificationDropdown.classList.remove("show");
});

// cta button

const ctaIcon = document.getElementById("ctaIcon");
const cta = document.getElementById("cta");

ctaIcon.addEventListener("click", () => {
  cta.classList.add("close");
});

// // progress bar

// const progressBtn = document.getElementById("step");
// const progressNumber = document.getElementById("progress-number");
// const progress = document.getElementById("progressBar");

// let progressWidth = 0;
// let progressNumberValue = 0;
// let progressEnd = 5;

// // increment progress bar by 20% on click
// // increment progress number by 1 on click

// progressBtn.addEventListener("click", () => {
//   // increment progress bar
//   progressWidth += 20;
//   if (progressWidth > 100) {
//     progressWidth = 100;
//   }
//   progress.style.width = `${progressWidth}%`;

//   // increment progress number
//   progressNumberValue += 1;

//   if (progressNumberValue > progressEnd) {
//     progressNumberValue = progressEnd;
//   }
//   progressNumber.innerHTML = progressNumberValue;
// });



// accrodion script

const accordion = document.getElementsByClassName("step");

// Todo
// 1. set first accordion to active
// 2. loop through all accordion
// 3. when accordion is clicked, remove active class from all accordion
// 4. add active class to clicked accordion


// 1. set first accordion to active
accordion[0].classList.add("active");

// 2. loop through all accordion
for (let i = 0; i < accordion.length; i++) {
  // 3. when accordion is clicked, remove active class from all accordion
  accordion[i].addEventListener("click", () => {
    for (let j = 0; j < accordion.length; j++) {
      accordion[j].classList.remove("active");
    }
    // 4. add active class to clicked accordion
    accordion[i].classList.add("active");
  });
}




