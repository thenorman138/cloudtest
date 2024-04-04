    document.addEventListener("DOMContentLoaded", function () {
        const cloudSect = document.querySelector(".cloud-sect");
        const mountainContainer = document.querySelector(".mountain-container");
        const cloudReveal = document.querySelector(".cloud-reveal-img");
        const cloudRevealText = document.querySelector(".mountain-reveal-text");
        const topCloud = document.querySelector(".top-cloud-reveal-img");

        function fadeInMountain() {
            const cloudSectRect = cloudSect.getBoundingClientRect();
            const triggerPoint =
                cloudSectRect.top + window.scrollY - window.innerHeight / 2;

            if (window.scrollY > triggerPoint) {
                mountainContainer.classList.add("fade-in");
                mountainContainer.classList.add("move-up");
            } else {
                mountainContainer.classList.remove("fade-in");
                mountainContainer.classList.remove("move-up");
            }

            if (window.scrollY > triggerPoint) {
                cloudRevealText.classList.add("cloud-fade-in");
                cloudReveal.classList.add("cloud-fade-out");
                topCloud.classList.add("cloud-opacity-none");
            } else {
                cloudRevealText.classList.remove("cloud-fade-out");
                cloudReveal.classList.remove("cloud-fade-in");
            }
        }

        window.addEventListener("scroll", fadeInMountain);
        window.addEventListener("resize", fadeInMountain);
        fadeInMountain(); // Initial check on page load
    });