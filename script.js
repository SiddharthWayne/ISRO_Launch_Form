// JavaScript for interactive button movement

document.addEventListener("DOMContentLoaded", function () {
    const nextButton = document.getElementById("nextButton");

    if (nextButton) {
        nextButton.addEventListener("mouseover", function () {
            this.style.transform = "translateY(-5px)";
        });

        nextButton.addEventListener("mouseout", function () {
            this.style.transform = "translateY(0)";
        });

        nextButton.addEventListener("click", function () {
            window.location.href = "registration.html"; // Redirect to registration page
        });
    }
});
