document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        // Get the coordinates of the target div
        var splitSvg = document.getElementById("splitter-svg");
        var splitSvgTop = splitSvg.getBoundingClientRect().top;
        var splitLeft = document.querySelector("#splitterSvgLeft");
        var splitRight = document.querySelector("#splitterSvgRight");

        var splitcont1 = this.document.querySelector(".splitter-left-container");
        var splitcont2 = this.document.querySelector(".splitter-right-container");

        // Check if a portion of the target div (e.g., 10% from the top) is in the viewport
        if (
            splitSvgTop < window.innerHeight * 0.95 &&
            splitSvgTop + splitSvg.offsetHeight > 0.05 * window.innerHeight
        ) {
            // console.log("Reached the target div!");
            // handleTextFade();

            const offsetFraction = 0.18;

            // Calculate the offset based on the container's height
            const offset = splitSvg.offsetHeight * offsetFraction;

            // Calculate the scroll percentage with the offset
            let scrollPercentage =
                Math.min(Math.max((window.scrollY - splitSvg.offsetTop + offset) / (splitSvg.offsetHeight - offset), 0), 1);


            // Calculate draw length based on scroll percentage
            let drawLength = 900 * scrollPercentage; // Total length of the path
            splitLeft.style.strokeDasharray = `${drawLength}, 900`;
            splitRight.style.strokeDasharray = `${drawLength}, 900`;

            if (scrollPercentage >= 0.15) {
                splitcont1.classList.add("show");
                splitcont2.classList.add("show");
            }

            if (scrollPercentage > 0.99) {
                window.postMessage({ type: 'splitterScrollPercentage', value: scrollPercentage }, '*');
            }
        }
    });

    //reveal text
    // Function to handle fade animation for elements within a container
    // function handleFade(containerSelector, elementSelector, delay) {
    //     var containers = document.querySelectorAll(containerSelector);
    //     containers.forEach(function (container) {
    //         var elements = container.querySelectorAll(elementSelector);
    //         elements.forEach(function (element, index) {
    //             setTimeout(function () {
    //                 element.classList.add("show");
    //             }, index * delay); // Apply delay based on index
    //         });
    //     });
    // }

    // Call this function for left fade
    function handleTextFade() {
        // handleFade(".splitter-text", ".splitter-left-container", 1000);
        // handleFade(".splitter-text", ".splitter-right-container", 1000);
    }
});
