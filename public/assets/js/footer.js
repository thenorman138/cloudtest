document.addEventListener("DOMContentLoaded", function () {
    // Get the footer elements
    var footerLogo = document.getElementById("footerLogoSvg");
    var footerline1 = document.querySelector("#footerline1");
    var footerline2 = document.querySelector("#footerline2");
    var footerline3 = document.querySelector("#footerline3");
    var footerline4 = document.querySelector("#footerline4");
    var footerline5 = document.querySelector("#footerline5");
    var footerline6 = document.querySelector("#footerline6");

    var drawingStarted = false;

    // Listen for the message from the first JavaScript file
    window.addEventListener('message', function(event) {
        if (event.data && event.data.type === 'straightFooterPercentage') {
            var footerscrollpercent = event.data.value;
            // console.log('here is footer scroll percent');
            // console.log(footerscrollpercent);
            // Check if the scroll percentage is over 0.99 and drawing hasn't started yet
            if (!drawingStarted && footerscrollpercent > 0.99) {
                console.log("footer scroll percentage over 0.99, triggering action...");
                drawingStarted = true;
            }
            // Animate the drawing based on the current scroll position
            animateFooter();
        }
    });

    function animateFooter() {
        // console.log('animating footer');
        const footerBottom = footerLogo.offsetTop + footerLogo.offsetHeight;
        const scrollPercentage = (window.scrollY + window.innerHeight - footerLogo.offsetTop) / (window.innerHeight + footerLogo.offsetHeight);

        const newDrawLength = 3000 * scrollPercentage * .75;

        footerline1.style.strokeDasharray = `${newDrawLength}, 3000`;
        // console.log(newDrawLength);
        footerline2.style.strokeDasharray = `${newDrawLength}, 3000`;
        footerline3.style.strokeDasharray = `${newDrawLength}, 3000`;
        footerline4.style.strokeDasharray = `${newDrawLength}, 3000`;
        footerline5.style.strokeDasharray = `${newDrawLength}, 3000`;
        footerline6.style.strokeDasharray = `${newDrawLength}, 3000`;
    }


    // Add scroll event listener outside of message event listener
    window.addEventListener("scroll", function () {
        animateFooter();
    });
});
