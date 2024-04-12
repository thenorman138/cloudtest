document.addEventListener("DOMContentLoaded", function() {

    const topLottiePlayer = document.getElementById("top-wavy").querySelector("dotlottie-player");
    const bottomLottiePlayer = document.getElementById("bottom-wavy").querySelector("dotlottie-player");

    topLottiePlayer.stop();
    bottomLottiePlayer.stop();

    $(window).scroll(function () {
        
    if ($(window).scrollTop() >= $(
        '.bottom-text-player').offset().top + $('.bottom-text-player').
            outerHeight() - window.innerHeight) {

        topLottiePlayer.play();
        bottomLottiePlayer.play();
        // window.alert('You reached the end of the DIV');
    }
    }); 
});
    
//         let callback = (entries, observer) => {
//         entries.forEach(entry => {
//             window.alert('here it is');
//         })
//         }
//         let observer = new IntersectionObserver(callback, {
//         threshold: [0.5] // If 50% of the element is in the screen, we count it!
//         // Can change the thresholds based on your needs. The default is 0 - it'll run only when the element first comes into view
//         });
    
    
    
//         ['mtn-container'].forEach(d => {
//         const div = document.getElementById(d);
//         if (div) observer.observe(div);
//         })
// }

//     window.addEventListener("scroll", playLottiePlayers);

    // const mountainContainer = document.querySelector(".bottom-text-player");
    // const topLottiePlayer = document.getElementById("top-wavy").querySelector("dotlottie-player");
    // const bottomLottiePlayer = document.getElementById("bottom-wavy").querySelector("dotlottie-player");
    // let isPlaying = false;

    // function playLottiePlayers() {
    //     topLottiePlayer.stop();
    //     bottomLottiePlayer.stop();
    //     if (!isPlaying && isElementInViewport(mountainContainer)) {
    //         window.alert("mountain container")
    //         topLottiePlayer.play();
    //         bottomLottiePlayer.play();
    //         isPlaying = true;
    //     }
    // }

    // function isElementInViewport(el) {
    //     const rect = el.getBoundingClientRect();
    //     console.log('rectangle here');
    //     console.log(rect);
    //     return (
    //         rect.top >= 0 &&
    //         rect.left >= 0 &&
    //         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //     );
    // }

    // window.addEventListener("scroll", playLottiePlayers);
    // window.addEventListener("resize", playLottiePlayers);

    // playLottiePlayers(); // Initial check on page load




// document.addEventListener("DOMContentLoaded", function() {
//     // Function to handle intersection
//     function handleIntersection(entries, observer) {
//         entries.forEach((entry, index) => {
//             if (entry.isIntersecting) {
//                 // Play the animation for the current target
//                 playAnimation(index);
//                 // Unobserve the target to prevent unnecessary triggers
//                 observer.unobserve(entry.target);
//             }
//         });
//     }

//     // Options for the Intersection Observer
//     const options = {
//         root: null,
//         rootMargin: "0px",
//         threshold: 0.9, // Trigger when 50% of the target is visible
//     };

//     // Create a new Intersection Observer
//     const observer = new IntersectionObserver(handleIntersection, options);

//     // Target elements
//     const svgContainers = [
//         document.getElementById("top-wavy"),
//         document.getElementById("bottom-wavy")
//     ];

//     console.log(svgContainers);
//     // Load animations for each target element
//     const animations = svgContainers.map((svgContainer, index) => {
//         if (svgContainer) { // Add this check
//             const animItem = bodymovin.loadAnimation({
//                 wrapper: svgContainer,
//                 animType: "svg",
//                 loop: false,
//                 autoplay: false,
//                 path: `https://lottie.host/114fe753-4fb8-4fe9-a5b1-1673bfa4e6e8/GE3qivXby2.json`, // Adjust path accordingly
//             });
//             // Start observing each target element
//             observer.observe(svgContainer);
//             return animItem;
//         } else {
//             return null; // Return null if element is null
//         }
//     });

//     // Function to play the animation for the given index
//     function playAnimation(index) {
//         svgContainers[index].classList.remove("counter-hide");
//         animations[index].goToAndPlay(0, true);
//         // Event listener for animation completion
//         animations[index].addEventListener("complete", () => {
//             svgContainers[index].classList.add("counter-hide");
//         });
//     }
// });
