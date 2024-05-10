<?php ?>

<html>
<footer class="main-footer">
<div class="ft-container">
    <div class="copyright">
        <div class="copy-text">Cloud Forest Fund © 2023.</div>
    </div>
    <div class="socials">
        <div class="social-row">
            <div class="social-col">
                <img class="footer-logo" src="/public/assets/img/footerLogo.svg" alt="Footer Logo">
            </div>
            <div class="social-col" >
                <div class="social-network">
                    <a href="#">X</a>
                </div>
                <div class="social-network">
                    <a href="#">INSTAGRAM</a>
                </div>
                <div class="social-network">
                    <a href="#">LINKEDIN</a>
                </div>
            </div>
        </div>
    </div>
    <div class="contact-location">
        <div class="tax"><p>Cloud Forest Fund is a public 501(c)(3) tax exempt charitable organization. </p> </div>
        <div class="EIN"><p>EIN: 92-0769384</p></div>
        <div class="address">
            <p>51 Larch Drive</p>
            <p>Manhasset Hills NY 11040</p>
        </div>
    </div>
</div>
</footer>
</html>

<style>
.main-footer {
    padding: 20px 0;
}

.ft-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.copyright,
.socials,
.contact-location {
    flex: 1 1 100%;
    margin-bottom: 20px;
}

.contact-location{
    text-align: center;
}

.copyright{
    font-weight:bold;
    text-align: center;
}

.footer-logo{
    max-width:28%;
}

.social-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.social-network a{
    font-weight: bold;
}
.social-col {
    flex: 1 1 48%;
    padding: 2% 2% 2% 2%;
    display: flex; /* Add this */
    flex-direction: column; /* Add this */
    justify-content: center; /* Add this */
}

.social-network {
    margin-bottom: 10px;
    text-align: left; /* Align text to the left */
}

.social-col img {
    order: 2; /* Move the image to the right */
    margin-left: auto; /* Align the image to the right */
}

.contact-location p {
    margin: 5px 0;
}

</style>

<script>

</script>

<?php ?>