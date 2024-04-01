    window.addEventListener("scroll", function () {
        // Get the coordinates of the target div
        var sect1 = document.getElementById("team-svg");
        var sect1Top = sect1.getBoundingClientRect().top;
        var path1 = document.querySelector("#vectorPath1");

        // Check if the target div is in the viewport
        if (sect1Top < window.innerHeight && sect1Top + sect1.offsetHeight > 0) {
            console.log("Reached the target div!");
            handleTextFade();

            // Calculate scroll percentage based on target div's height
            let scrollPercentage =
                (window.scrollY - sect1.offsetTop) / sect1.offsetHeight;

            // Calculate draw length based on scroll percentage
            let drawLength = 2268.36 * scrollPercentage * 3; // Total length of the path
            path1.style.strokeDasharray = `${drawLength}, 2268.36`;
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
                handleFade(".team-container-wrap", ".team-container__left", 1200);
                handleFade(".team-container-wrap", ".team-container__right", 1200);
            }
        }
    });
