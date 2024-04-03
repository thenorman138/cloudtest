// document.addEventListener("DOMContentLoaded", function () {
//     // Define a function to handle fading in text blocks for a given section
//     function fadeTextOnScroll(sectionId, textBlockIds) {
//         // Get the section element
//         var section = document.getElementById(sectionId);
//         console.log('new section here');
//         console.log(section);
//         // Get the top position of the section relative to the viewport
//         var sectionTop = section.getBoundingClientRect().top;

//         // Check if the section is at least 10% visible in the viewport
//         if (sectionTop < window.innerHeight * 0.9) {
//             // Loop through the text block IDs and fade them in
//             textBlockIds.forEach(function (textBlockId, index) {
//                 var textBlock = document.getElementById(textBlockId);
//                 console.log(textBlock);
//                 if (textBlock) {
//                     // Apply a delay for each text block to create a staggered effect
//                     setTimeout(function () {
//                         textBlock.classList.add("show");
//                     }, index * 3000); // Adjust the delay time as needed
//                 }
//             });
//         }
//     }

//     // Call the fadeTextOnScroll function for each section as the user scrolls
//     window.addEventListener("scroll", function () {
//         fadeTextOnScroll("team-description", ["teamdesc"]);
//         fadeTextOnScroll("team-block-right-1", ["team-text-block-1"]);
//         fadeTextOnScroll("team-block-left-1", ["team-text-block-2"]);
//         fadeTextOnScroll("team-block-right-2", ["team-text-block-3"]);
//         fadeTextOnScroll("team-block-left-2", ["team-text-block-4"]);
//         fadeTextOnScroll("vertical-uni", ["vert-uni-text"]);
//         fadeTextOnScroll("vertical-blurb", ["vert-blurb-text"]);
//         // Add more sections and their corresponding text blocks as needed
//     });
// });





// // window.addEventListener("scroll", function () {
//     //     // Get the coordinates of the target div
//     //     var sect1 = document.getElementById("team-1");
//     //     var sect1Top = sect1.getBoundingClientRect().top;

//     //     // Check if the target div is in the viewport
//     //     if (sect1Top < window.innerHeight && sect1Top + sect1.offsetHeight > 0) {
//     //         handleTextFade();

//     //         // Function to handle fade animation for elements within a container
//     //         function handleFade(containerSelector, elementSelector, delay) {
//     //             var containers = document.querySelectorAll(containerSelector);
//     //             containers.forEach(function (container) {
//     //                 var elements = container.querySelectorAll(elementSelector);
//     //                 elements.forEach(function (element, index) {
//     //                     setTimeout(function () {
//     //                         element.classList.add("show");
//     //                     }, index * delay); // Apply delay based on index
//     //                 });
//     //             });
//     //         }
//     //         // Call this function for left fade
//     //         function handleTextFade() {
//     //             handleFade(".team-container-wrap", ".team-container__left1", 1200);
//     //             handleFade(".team-container-wrap", ".team-container__right1", 1500);
//     //         }
//     //     }
//     // });
