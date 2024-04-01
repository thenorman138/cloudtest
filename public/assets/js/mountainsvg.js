    window.addEventListener("scroll", function () {
        // Get the coordinates of the target div
        var mtnSvg = document.getElementById("mountain-svg");
        var mtnSvgTop = mtnSvg.getBoundingClientRect().top;
        var path2Left = document.querySelector("#mountainSvgLeft");
        var path2Right = document.querySelector("#mountainSvgRight");

        // Check if a portion of the target div (e.g., 10% from the top) is in the viewport
        if (
            mtnSvgTop < window.innerHeight * 0.9 &&
            mtnSvgTop + mtnSvg.offsetHeight > 0.1 * window.innerHeight
        ) {
            console.log("Reached the target div!");
            handleTextFade();

            // Calculate scroll percentage based on target div's height
            let scrollPercentage =
                (window.scrollY - (mtnSvg.offsetTop - 0.1 * window.innerHeight)) /
                (0.8 * window.innerHeight);

            // Calculate draw length based on scroll percentage
            let drawLength = 890 * scrollPercentage * 5; // Total length of the path
            path2Left.style.strokeDasharray = `${drawLength}, 890`;
            path2Right.style.strokeDasharray = `${drawLength}, 890`;
            // Perform actions when the target div is reached

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
                handleFade(".mtn-text-container", ".text-over-mountain__left", 1000);
                handleFade(".mtn-text-container", ".text-over-mountain__right", 1000);
            }
        }
    });
