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

const accordion = document.getElementsByClassName("step");
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

// // progress bar script

const checkboxButtons = document.querySelectorAll(".step-item-checkbox");
const progressNumber = document.getElementById("progress-number");
const progress = document.getElementById("progressBar");

let progressWidth = 0;
let progressNumberValue = 0;
let progressEnd = checkboxButtons.length;

checkboxButtons.forEach((checkboxButton) => {
  checkboxButton.addEventListener("click", () => {
    const checked = checkboxButton.classList.contains("checked");
    if (!checked) {
      // Increment progress bar
      progressWidth += 20;
      if (progressWidth > 100) {
        progressWidth = 100;
      }
      progress.style.width = `${progressWidth}%`;

      // Increment progress number
      progressNumberValue += 1;
      if (progressNumberValue > progressEnd) {
        progressNumberValue = progressEnd;
      }
      progressNumber.innerHTML = progressNumberValue;
    } else {
      // Decrement progress bar
      progressWidth -= 20;
      if (progressWidth < 0) {
        progressWidth = 0;
      }
      progress.style.width = `${progressWidth}%`;

      // Decrement progress number
      progressNumberValue -= 1;
      if (progressNumberValue < 0) {
        progressNumberValue = 0;
      }
      progressNumber.innerHTML = progressNumberValue;
    }
  });
});

// checkbox script
const HIDDEN_CLASS = "hidden";
const MARKED_AS_DONE_CLASS = "complete-icon";

function toggleCheckboxState(checkboxButton) {
  const notCheckedIcon = checkboxButton.querySelector("#not-complete-icon");
  const checkedIcon = checkboxButton.querySelector("#complete-icon");
  const loadingIcon = checkboxButton.querySelector("#loading-icon");

  const markedAsDone = checkboxButton.classList.contains(MARKED_AS_DONE_CLASS);

  if (markedAsDone) {
    unmarkCheckbox(checkboxButton, notCheckedIcon, checkedIcon, loadingIcon);
  } else {
    markCheckbox(checkboxButton, notCheckedIcon, checkedIcon, loadingIcon);
  }
}

function markCheckbox(
  checkboxButton,
  notCheckedIcon,
  checkedIcon,
  loadingIcon
) {
  notCheckedIcon.classList.add(HIDDEN_CLASS);
  loadingIcon.classList.remove(HIDDEN_CLASS);

  setTimeout(() => {
    loadingIcon.classList.add(HIDDEN_CLASS);
    checkedIcon.classList.remove(HIDDEN_CLASS);

    checkboxButton.classList.add("checked");
    checkboxButton.classList.add(MARKED_AS_DONE_CLASS);
  }, 500);
}

function unmarkCheckbox(
  checkboxButton,
  notCheckedIcon,
  checkedIcon,
  loadingIcon
) {
  checkedIcon.classList.add(HIDDEN_CLASS);
  loadingIcon.classList.remove(HIDDEN_CLASS);

  setTimeout(() => {
    loadingIcon.classList.add(HIDDEN_CLASS);
    notCheckedIcon.classList.remove(HIDDEN_CLASS);

    checkboxButton.classList.remove("checked");
    checkboxButton.classList.remove(MARKED_AS_DONE_CLASS);
  }, 500);
}

// Get all checkbox buttons

// Attach the toggleCheckboxState function to each button's click event
checkboxButtons.forEach((checkboxButton) => {
  checkboxButton.addEventListener("click", () =>
    toggleCheckboxState(checkboxButton)
  );
});

// hide content

const contentIcon = document.getElementById("content-icon");
const content = document.getElementById("step-checklist");

// make content hidden by default

content.classList.add("hide");



contentIcon.addEventListener("click", () => {
  contentIcon.classList.toggle("rotate");
  content.classList.toggle("hide");
}
);