document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        // Get the coordinates of the target div
        var monkeysvg = document.getElementById("bottom-svg");
        var monkeysvgTop = monkeysvg.getBoundingClientRect().top;
        var footer1 = document.querySelector("#footer1");
        var footer2 = document.querySelector("#footer2");
        var footer3 = document.querySelector("#footer3");

        var plant1 = document.querySelector(".left-plant-wrapper");
        var plant2 = document.querySelector(".right-plant-wrapper");
        var monkey = document.querySelector(".monkey-wrapper");
        var arch = this.document.querySelector(".monkey-arch-text");

        drawingStarted = false;

        window.addEventListener('message', function(event) {
            if (event.data && event.data.type === 'splitterScrollPercentage') {
                var splitscrollpercent = event.data.value;
                // Check if the scroll percentage is over 0.99 and drawing hasn't started yet
                if (!drawingStarted && splitscrollpercent > 0.99) {
                    console.log("splitter scroll percentage over 0.99, triggering action...");
                    drawingStarted = true;
                }
                // Animate the drawing based on the current scroll position
                animateDrawing();
            }
        });

        // Function to animate the drawing based on current scroll position
        function animateDrawing() {
            if (drawingStarted) {
                console.log('drawing monkey svg now');
                // Establish new scroll percentage based on scroll position within monkeysvg
                // Define the offset as a fraction of the container's height
                const offsetFraction = 0.7;

                // Calculate the offset based on the container's height
                const offset = monkeysvg.offsetHeight * offsetFraction;

                // Calculate the scroll percentage with the offset
                let monkeyScrollpercent =
                    Math.min(Math.max((window.scrollY - monkeysvg.offsetTop + offset) / (monkeysvg.offsetHeight - offset), 0), 1);

                // console.log('monkey scroll percentage');
                console.log(monkeyScrollpercent);

                let drawLength = 2532 * monkeyScrollpercent * 7 ; // Total length of the path
                footer2.style.strokeDasharray = `${drawLength}, 2532`;
                footer3.style.strokeDasharray = `${drawLength}, 2532`;
                // Add classes based on current scroll position
                if (monkeyScrollpercent >= 0.015) {
                    plant1.classList.add("show");
                    plant2.classList.add("show");
                }
                if (monkeyScrollpercent >= 0.04) {
                    monkey.classList.add("show");
                    arch.classList.add("show");

                    // Define the scroll event listener inside the if block
                    window.addEventListener("scroll", function () {
                        var btmheadline = document.querySelector(".bottom-right-headline");
                        var btmrt1 = document.querySelector(".btm-rt-1");
                        var btmlft1 = document.querySelector(".btm-lft-1");
                        var btmrt2 = document.querySelector(".btm-rt-2");
                        var btmlft2 = document.querySelector(".btm-lft-2");
                        var btmlft3 = document.querySelector(".btm-lft-3");
                        // Calculate the scroll percentage
                        const scrollPercentage = (window.scrollY - monkeysvg.offsetTop) / (monkeysvg.offsetHeight - window.innerHeight);

                        // Ensure the scroll percentage is within the range [0, 1]
                        const clampedScrollPercentage = Math.min(Math.max(scrollPercentage, 0), 1);

                        // Calculate the draw length based on the scroll percentage
                        const newDrawLength = 25032 * clampedScrollPercentage * .09;
                        // console.log('bottom line percentage');
                        // console.log(clampedScrollPercentage);
                        // Apply the stroke dasharray to footer1
                        footer1.style.strokeDasharray = `${newDrawLength}, 25032`;

                        if (clampedScrollPercentage >= 0.12) {
                            btmheadline.classList.add("show");
                        }
                        if (clampedScrollPercentage >= 0.15) {
                            btmlft1.classList.add("show");
                        }
                        if (clampedScrollPercentage >= 0.18) {
                            btmrt1.classList.add("show");
                        }
                        if (clampedScrollPercentage >= 0.28) {
                            btmlft2.classList.add("show");
                        }
                        if (clampedScrollPercentage >= 0.38) {
                            btmrt2.classList.add("show");
                        }
                        if (clampedScrollPercentage >= 0.55) {
                            btmlft3.classList.add("show");
                        }

                        if (clampedScrollPercentage > 0.60) {
                            window.postMessage({ type: 'straightFooterPercentage', value: clampedScrollPercentage }, '*');
                            console.log('should trigger footer now');
                        }

                    });
                }
            }
        }
    });

});
