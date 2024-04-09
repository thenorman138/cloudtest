document.addEventListener("DOMContentLoaded", function () {
    // Debounce function
    function debounce(func, wait) {
        let timeout;
        return function () {
            const context = this,
                args = arguments;
            const later = function () {
                timeout = null;
                func.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    var pathLeft = document.querySelector('#svgPathLeft');
    var pathRight = document.querySelector('#svgPathRight');

    var pathLengthLeft = pathLeft.getTotalLength();
    var pathLengthRight = pathRight.getTotalLength();

    pathLeft.style.strokeDasharray = pathLengthLeft;
    pathRight.style.strokeDasharray = pathLengthRight;

    pathLeft.style.strokeDashoffset = pathLengthLeft;
    pathRight.style.strokeDashoffset = pathLengthRight;

    var impactFade = document.querySelector('.impact-fade-in-div');
    var impactninety1 = document.querySelector('.ninety-left');
    var impactninety2 = document.querySelector('.ninety-right');
    var blurbFade1 = document.querySelector('.topSvgBlurbLeft');
    var blurbFade2 = document.querySelector('.topSvgBlurbRight');
    var fadeInStarted = false;

    window.addEventListener(
        "scroll",
        debounce(function () {
var scrollPercentage = 9 * ((Math.max(0, window.scrollY - 7 * parseFloat(getComputedStyle(document.documentElement).fontSize))) / (document.documentElement.scrollHeight - window.innerHeight));

            // Length to offset the dashes
            var drawLeft = pathLengthLeft * scrollPercentage;
            var drawRight = pathLengthRight * scrollPercentage;

            // Draw in reverse
            pathLeft.style.strokeDashoffset = Math.max(0, pathLengthLeft - drawLeft);
            pathRight.style.strokeDashoffset = Math.max(0, pathLengthRight - drawRight);

            // console.log(scrollPercentage);

            // Fade in div smoothly when the line is about 15% drawn
            if (scrollPercentage >= 0.29 && !fadeInStarted) {
                fadeInStarted = true;
                fadeInDivSmoothly(impactFade);
                fadeInDivSmoothly(impactninety1);
                fadeInDivSmoothly(impactninety2);
            }

            if (scrollPercentage >= 0.57) {
                blurbFade1.classList.add('show');
                blurbFade2.classList.add('show');
            }

            // Post scrollPercentage to other script if it's over 0.99
            if (scrollPercentage > 0.99) {
                window.postMessage({ type: 'scrollPercentage', value: scrollPercentage }, '*');
            }

        }, 10)
    );

    function fadeInDivSmoothly(element) {
        var opacity = 0;
        var interval = setInterval(function () {
            opacity += 0.05; // Adjust the increment value as needed for the desired speed
            element.style.opacity = opacity;
            if (opacity >= 1) {
                clearInterval(interval);
            }
        }, 80); // Adjust the interval duration for smoother or faster animation
    }
});
