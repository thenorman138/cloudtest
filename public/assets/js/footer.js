document.addEventListener("DOMContentLoaded", function () {
    // Get the footer elements
    var footerLogo = document.getElementById("footerLogoSvg");
    var footerline1 = document.querySelector("#footerline1");
    var footerline2 = document.querySelector("#footerline2");
    var footerline3 = document.querySelector("#footerline3");
    var footerline4 = document.querySelector("#footerline4");
    var footerline5 = document.querySelector("#footerline5");
    var footerline6 = document.querySelector("#footerline6");

    // Calculate the draw length based on the total length of the paths
    let footerDrawLength = 3000;

    // Apply the full draw length to the SVG paths
    if (footerLogo && footerline1 && footerline2 && footerline3 && footerline4 && footerline5 && footerline6) {
        console.log('all footer svgs here');
        footerline1.style.strokeDasharray = `${footerDrawLength}, 3000`;
        footerline2.style.strokeDasharray = `${footerDrawLength}, 3000`;
        footerline3.style.strokeDasharray = `${footerDrawLength}, 3000`;
        footerline4.style.strokeDasharray = `${footerDrawLength}, 3000`;
        footerline5.style.strokeDasharray = `${footerDrawLength}, 3000`;
        footerline6.style.strokeDasharray = `${footerDrawLength}, 3000`;
    }
});
