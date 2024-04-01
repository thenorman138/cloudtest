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

document.addEventListener("DOMContentLoaded", function () {
    var pathLeft = document.querySelector('#svgPathLeft');
    var pathRight = document.querySelector('#svgPathRight');

    var pathLengthLeft = pathLeft.getTotalLength();
    var pathLengthRight = pathRight.getTotalLength();

    pathLeft.style.strokeDasharray = pathLengthLeft;
    pathRight.style.strokeDasharray = pathLengthRight;

    pathLeft.style.strokeDashoffset = pathLengthLeft;
    pathRight.style.strokeDashoffset = pathLengthRight;

    window.addEventListener(
        "scroll",
        debounce(function () {
            var scrollPercentage = 7 * ((window.scrollY || window.pageYOffset) / (document.documentElement.scrollHeight - window.innerHeight));
    
            // Length to offset the dashes
            var drawLeft = pathLengthLeft * scrollPercentage;
            var drawRight = pathLengthRight * scrollPercentage;

            // Draw in reverse
            pathLeft.style.strokeDashoffset = Math.max(0, pathLengthLeft - drawLeft);
            pathRight.style.strokeDashoffset = Math.max(0, pathLengthRight - drawRight);

        }, 10)
    );
});
