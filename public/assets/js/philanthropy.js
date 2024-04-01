document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        const mountainSect = document.getElementById("mountain-sect");
        if (mountainSect) { // Ensure the element exists
            var mountainRectTop = mountainSect.getBoundingClientRect().top;
            // Get the mountain-back container
            const mountainBack = document.getElementById("mountainBack");
            const mountainLogo = document.getElementById("mtnLogo");

            // Check if a portion of the target div (e.g., 10% from the top) is in the viewport
            if (
                mountainRectTop < window.innerHeight * 0.9 &&
                mountainRectTop + mountainSect.offsetHeight > 0.1 * window.innerHeight
            ) {
                console.log(mountainSect);
                mountainBack.classList.add("slide-up");
                mountainLogo.classList.add("fade-in");
            } else {
                // mountainBack.classList.remove("slide-up");
                // mountainLogo.classList.remove("fade-in");
            }
        } else {
            console.log('no mountain element');
        }
    });
});
