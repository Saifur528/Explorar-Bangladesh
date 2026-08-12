// ================= LOGO → HOME PAGE =================

document.addEventListener("DOMContentLoaded", function () {

    const logo = document.querySelector(".logo");

    if (logo) {

        logo.style.cursor = "pointer";

        logo.addEventListener("click", function () {

            // Division pages are inside the "pages" folder
            if (window.location.pathname.includes("/pages/")) {

                window.location.href = "../index.html";

            } else {

                // Home page
                window.location.href = "index.html";

            }

        });

    }

});