<?php ?>

<html>
<header class="main-header">
  <div class="logo">
    <img src="/public/assets/img/headerLogo.svg" alt="Logo">
    <img
      src="/public/assets/img/logoGif.gif"
      alt="Animated Logo"
      class="animated-logo"
    />
  </div>
  <div class="menu-wrapper">
    <nav id="menu" class="menu">
      <div class="internal-menu-wrap">
        <img
          src="/public/assets/img/menuIcon.png"
          alt="Menu"
          class="menu-icon-internal"
          onclick="toggleMenu()"
        />
      </div>
      <div class="menu-list">
        <a href="/">Home</a>
        <a href="/about/">CFF</a>
        <a href="/blog/">CFF PILLARS</a>
        <a href="/blog/">OUR STORY</a>
      </div>
    </nav>
    <img src="/public/assets/img/menuIcon.png" alt="Menu" class="menu-icon" />
  </div>
</header>
</html>

<style>
  .logo {
    position: relative;
    display: inline-block; /* Ensure the container fits its content */
  }

  .static-logo,
  .animated-logo {
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease; /* Smooth transition for opacity */
  }

  /* Initially hide the animated logo */
  .animated-logo {
    opacity: 0;
  }

  /* Show the animated logo on hover */
  .logo:hover .animated-logo {
    opacity: 1;
  }

  .logo {
    width: 16rem;
    height: auto;
    padding: 2rem 2rem 2rem 0; /* Adjust padding as needed */
  }

  .main-header {
    padding: 2rem 4rem 2rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu-wrapper {
  }

  .menu {
    position: absolute;
    top: 0;
    height: 100vh;
    right: -100%; /* Initially hide the menu off-screen */
    width: 300px; /* Adjust menu width as needed */
    background-color: #dd1d47; /* Change to your desired background color */
    transition: right 0.5s ease;
    z-index: 1;
  }

  .show {
    right: 0; /* Show the menu by sliding it in from the right */
  }

  .menu-icon {
    width: 6rem; /* Adjust icon size as needed */
    height: auto;
    cursor: pointer;
  }
  .menu-icon-internal {
    width: 5rem; /* Adjust icon size as needed */
    height: auto;
    cursor: pointer;
  }
  .internal-menu-wrap {
    padding: 2rem;
    margin-left: 65%;
    right: 0;
  }
  .menu-list {
    text-align: center;
  }
  .menu-list a {
    display: block;
    margin-bottom: 5px;
    color: white;
    font-size: 2vw;
  }
</style>

<script>
  function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
  }

  document.addEventListener("click", function (event) {
    const menu = document.getElementById("menu");
    const menuIcon = document.querySelector(".menu-icon");
    const menuIconInternal = document.querySelector(".menu-icon-internal");
    const targetElement = event.target;

    if (targetElement === menuIcon || targetElement === menuIconInternal) {
      toggleMenu();
    } else if (
      !menu.contains(targetElement) &&
      menu.classList.contains("show")
    ) {
      menu.classList.remove("show");
    }
  });
</script>

<?php ?>