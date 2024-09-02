document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const header = document.getElementById("header");
    const registerButton = document.getElementById("registerButton");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            alert("Launch event registered successfully!");
        });
    }

    if (header) {
        header.addEventListener("mouseover", function () {
            this.style.transform = "translateY(-5px)";
        });

        header.addEventListener("mouseout", function () {
            this.style.transform = "translateY(0)";
        });
    }

    if (registerButton) {
        registerButton.addEventListener("mouseover", function () {
            this.style.transform = "translateY(-5px)";
        });

        registerButton.addEventListener("mouseout", function () {
            this.style.transform = "translateY(0)";
        });
    }
});
