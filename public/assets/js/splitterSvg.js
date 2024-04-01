document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        // Get the coordinates of the target div
        var splitSvg = document.getElementById("splitter-svg");
        var splitSvgTop = splitSvg.getBoundingClientRect().top;
        var splitLeft = document.querySelector("#splitterSvgLeft");
        var splitRight = document.querySelector("#splitterSvgRight");

        // Check if a portion of the target div (e.g., 10% from the top) is in the viewport
        if (
            splitSvgTop < window.innerHeight * 0.95 &&
            splitSvgTop + splitSvg.offsetHeight > 0.05 * window.innerHeight
        ) {
            // console.log("Reached the target div!");
            handleTextFade();

            // Calculate scroll percentage based on target div's height
            let scrollPercentage =
                (window.scrollY - (splitSvg.offsetTop - 0.1 * window.innerHeight)) /
                (0.8 * window.innerHeight);

            // Calculate draw length based on scroll percentage
            let drawLength = 511.14 * scrollPercentage * 3; // Total length of the path
            splitLeft.style.strokeDasharray = `${drawLength}, 511.14`;
            splitRight.style.strokeDasharray = `${drawLength}, 511.14`;
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
        handleFade(".splitter-text", ".splitter-left-container", 1000);
        handleFade(".splitter-text", ".splitter-right-container", 1000);
    }
});
