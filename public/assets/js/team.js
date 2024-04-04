window.addEventListener("scroll", function () {
    // Get the coordinates of the target div
    var sect1 = document.getElementById("team-svg");
    var sect1Top = sect1.getBoundingClientRect().top;
    var path1 = document.querySelector("#vectorPath1");
    var teamleft = document.querySelector(".team-container__left");
    var teamright = document.querySelector(".team-container__right");
    var teamdesc = document.querySelector("#teamdesc");
    var block1 = document.querySelector("#team-text-block-1");
    var block2 = document.querySelector("#team-text-block-2");
    var block3 = document.querySelector("#team-text-block-3");
    var block4 = document.querySelector("#team-text-block-4");
    var vertuni = document.querySelector("#vert-uni-text");
    var vertblurb = document.querySelector("#vert-blurb-text");
    var teamblurb = document.querySelector(".team-blurb");

    // Define the offset as a fraction of the container's height
    const offsetFraction = 0.07;

    // Calculate the offset based on the container's height
    const offset = sect1.offsetHeight * offsetFraction;

    // Check if the target div is in the viewport
    if (sect1Top < window.innerHeight && sect1Top + sect1.offsetHeight > 0) {
        // console.log("Reached the target div!");

        // Calculate scroll percentage based on target div's height
        let scrollPercentage =
            Math.min(Math.max((window.scrollY - sect1.offsetTop + offset) / (sect1.offsetHeight - offset), 0), 1);

        // console.log('team scroll percentage');
        // console.log(scrollPercentage);

        // Calculate draw length based on scroll percentage
        let drawLength = 2268.36 * scrollPercentage * 2.25; // Total length of the path
        path1.style.strokeDasharray = `${drawLength}, 2268.36`;

        // Perform actions when the target div is reached
        if (scrollPercentage >= 0.015) {
            teamleft.classList.add("show");
            teamright.classList.add("show");
            teamblurb.classList.add("show");
        }
        if (scrollPercentage >= 0.20) {
            teamdesc.classList.add("show");
        }
        if (scrollPercentage >= 0.34) {
            block1.classList.add("show");
        }
        if (scrollPercentage >= 0.50) {
            block2.classList.add("show");
        }
        if (scrollPercentage >= 0.63) {
            block3.classList.add("show");
        }
        if (scrollPercentage >= 0.78) {
            block4.classList.add("show");
        }
        if (scrollPercentage >= 0.89) {
            vertuni.classList.add("show");
            vertblurb.classList.add("show");
        }

    }
});
