document.addEventListener("DOMContentLoaded", function () {
    var mtntext1 = document.querySelector('.text-over-mountain__left');
    var mtntext2 = document.querySelector('.text-over-mountain__right');
    var path2Left = document.querySelector("#mountainSvgLeft");
    var path2Right = document.querySelector("#mountainSvgRight");
    var mtnSvg = document.getElementById("mountain-svg");
    var drawingStarted = false;

    // Listen for the message from the first JavaScript file
    window.addEventListener('message', function(event) {
        if (event.data && event.data.type === 'scrollPercentage') {
            var scrollPercentage = event.data.value;
            // Check if the scroll percentage is over 0.99 and drawing hasn't started yet
            if (!drawingStarted && scrollPercentage > 0.99) {
                console.log("Scroll percentage over 0.99, triggering action...");
                drawingStarted = true;
            }
            // Animate the drawing based on the current scroll position
            animateDrawing();
        }
    });

    // Function to animate the drawing based on current scroll position
    function animateDrawing() {
        if (drawingStarted) {
            // console.log('drawing mountain svg now');
            // Establish new scroll percentage based on scroll position within mtnSvg
            // Define the offset as a fraction of the container's height
            const offsetFraction = 0.5;

            // Calculate the offset based on the container's height
            const offset = mtnSvg.offsetHeight * offsetFraction;

            // Calculate the scroll percentage with the offset
            let mtnScrollPercentage =
                Math.min(Math.max((window.scrollY - mtnSvg.offsetTop + offset) / (mtnSvg.offsetHeight - offset), 0), 1);

            // console.log('new scroll percentage');
            // console.log(mtnScrollPercentage);

            let drawLength = 1500 * mtnScrollPercentage * .65 ; // Total length of the path
            path2Left.style.strokeDasharray = `${drawLength}, 1500`;
            path2Right.style.strokeDasharray = `${drawLength}, 1500`;
            // Add classes based on current scroll position
            if (mtnScrollPercentage >= 0.6) {
                mtntext1.classList.add("show");
                mtntext2.classList.add("show");
            }
        }
    }



});





    // window.addEventListener("scroll", function () {
    //     // Get the coordinates of the target div
    //     var mtnSvg = document.getElementById("mountain-svg");
    //     var mtnSvgTop = mtnSvg.getBoundingClientRect().top;
    //     var path2Left = document.querySelector("#mountainSvgLeft");
    //     var path2Right = document.querySelector("#mountainSvgRight");

    //     // Check if a portion of the target div (e.g., 10% from the top) is in the viewport
    //     if (
    //         mtnSvgTop < window.innerHeight * 0.99 &&
    //         mtnSvgTop + mtnSvg.offsetHeight > 0.01 * window.innerHeight
    //     ) {
    //         console.log("Reached the target div!");
    //         handleTextFade();

    //         // Calculate scroll percentage based on target div's height
    //         let scrollPercentage =
    //             (window.scrollY - (mtnSvg.offsetTop - 0.1 * window.innerHeight)) /
    //             (0.8 * window.innerHeight);

    //         // Calculate draw length based on scroll percentage
    //         let drawLength = 1500 * scrollPercentage * 3.5; // Total length of the path
    //         path2Left.style.strokeDasharray = `${drawLength}, 1500`;
    //         path2Right.style.strokeDasharray = `${drawLength}, 1500`;
    //         // Perform actions when the target div is reached

    //         // Fade in div smoothly when the line is about x% drawn
    //         if (scrollPercentage >= 0.26 ) {


    //         }

    //         if (scrollPercentage >= 0.11 ) {
    //             console.log('mountain text should show now');
    //             mtntext1.classList.add("show");
    //             mtntext2.classList.add("show");
    //         }

    //         //reveal text
    //         // Function to handle fade animation for elements within a container
    //         function handleFade(containerSelector, elementSelector, delay) {
    //             var containers = document.querySelectorAll(containerSelector);
    //             containers.forEach(function (container) {
    //                 var elements = container.querySelectorAll(elementSelector);
    //                 elements.forEach(function (element, index) {
    //                     setTimeout(function () {
    //                         element.classList.add("show");
    //                     }, index * delay); // Apply delay based on index
    //                 });
    //             });
    //         }

    //         // Call this function for left fade
    //         function handleTextFade() {
    //             // handleFade(".mtn-text-container", ".text-over-mountain__left", 1000);
    //             // handleFade(".mtn-text-container", ".text-over-mountain__right", 1000);
    //         }
    //     }
    // });

// });
