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

