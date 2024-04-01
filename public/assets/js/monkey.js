document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        // Get the coordinates of the target div
        var monkeysvg = document.getElementById("bottom-svg");
        var monkeysvgTop = monkeysvg.getBoundingClientRect().top;
        var footer1 = document.querySelector("#footer1");
        var footer2 = document.querySelector("#footer2");
        var footer3 = document.querySelector("#footer3");

        // Check if a portion of the target div (e.g., 10% from the top) is in the viewport
        if (
            monkeysvgTop < window.innerHeight * 0.9 &&
            monkeysvgTop + monkeysvg.offsetHeight > 0.1 * window.innerHeight
        ) {
            // console.log("Reached the bottom div!");
            handleTextFade();

            // Calculate scroll percentage based on target div's height
            let monkeyScrollpercent =
                (window.scrollY - (monkeysvg.offsetTop - 0.1 * window.innerHeight)) /
                (0.8 * window.innerHeight);

            // Calculate draw length based on scroll percentage
            let monkeyDrawLength = 2531.98 * monkeyScrollpercent * 1; // Total length of the path
            // Check if footer elements exist before applying styles
            if (footer1 && footer2 && footer3) {
                // console.log('all footer svgs here');
                footer2.style.strokeDasharray = `${monkeyDrawLength}, 2531.98`;
                footer3.style.strokeDasharray = `${monkeyDrawLength}, 2531.98`;

                // Add a delay before starting the animation for footer3
                setTimeout(() => {
                    footer1.style.strokeDasharray = `${monkeyDrawLength}, 2531.98`;
                }, 2000); // Adjust the delay time as needed (in milliseconds)
            }
        }
    });

    //reveal text
    // Function to handle fade animation for elements within a container
    function handleFade(containerSelector, elementSelector, delay) {
        var containers = document.querySelectorAll(containerSelector);
        containers.forEach(function (container) {
            var elements = container.querySelectorAll(elementSelector);
            elements.forEach(function (element, index) {
                setTimeout(function () {
                    element.classList.add("show");
                }, index * delay); // Apply delay based on index
            });
        });
    }

    // Call this function for left fade
    function handleTextFade() {
        handleFade(".plants", ".left-plant-wrapper", 1000);
        handleFade(".plants", ".right-plant-wrapper", 1000);
    }
});
