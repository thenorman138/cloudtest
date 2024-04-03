    // Function to check if an element is in the viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle fade animation for elements within a container
    function handleFade(containerSelector, elementSelector) {
        var containers = document.querySelectorAll(containerSelector);
        containers.forEach(function (container) {
            if (isInViewport(container)) {
                var elements = container.querySelectorAll(elementSelector);
                elements.forEach(function (element) {
                    element.classList.add("show");
                });
            }
        });
    }

    // Call this function for left fade
    // function handleLeftFade() {
    //     handleFade(".blurbContainer", ".topSvgBlurbLeft");
    //     // handleFade(".mtn-text-container", ".text-over-mountain__left");
    // }

    // // Call this function for right fade
    // function handleRightFade() {
    //     handleFade(".blurbContainer", ".topSvgBlurbRight");
    //     // handleFade(".mtn-text-container", ".text-over-mountain__right");
    // }

    // // Add scroll event listeners
    // window.addEventListener("scroll", handleLeftFade);
    // window.addEventListener("scroll", handleRightFade);
