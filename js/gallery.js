const galleryGrid = document.getElementById("galleryGrid");

const galleryImages = [

    // ================= DHAKA =================
    "../images/dhaka/ahsaanmanzil.png",
    "../images/dhaka/hatirjheel.png",
    "../images/dhaka/lalbaghfort.png",
    "../images/dhaka/metrorail.png",
    "../images/dhaka/parliament.png",
    "../images/dhaka/sonargaon.png",

    // ================= CHATTOGRAM =================
    "../images/chattogram/bandarban.png",
    "../images/chattogram/coxsbazar.png",
    "../images/chattogram/kaptailake.png",
    "../images/chattogram/karnafuli.png",
    "../images/chattogram/patenga.png",
    "../images/chattogram/rangamati.png",

    // ================= SYLHET =================
    "../images/sylhet/bichanakandi.png",
    "../images/sylhet/jaflong.png",
    "../images/sylhet/lalakhal.png",
    "../images/sylhet/ratargul.png",
    "../images/sylhet/shahjalal.png",
    "../images/sylhet/teagarden.png",

        // ================= KHULNA =================
    "../images/khulna/andharamanik.png",
    "../images/khulna/dublar_char.png",
    "../images/khulna/kuakata.png",
    "../images/khulna/shat_gombuj.png",
    "../images/khulna/sixty_dome_mosque.png",
    "../images/khulna/sundarbans.png",

    // ================= RAJSHAHI =================
    "../images/rajshahi/uttara_ganabhaban.png",
    "../images/rajshahi/choto_sona_mosque.png",
    "../images/rajshahi/paharpur.png",
    "../images/rajshahi/bagha_mosque.png",
    "../images/rajshahi/varendra_museum.png",
    "../images/rajshahi/puthia.png"
    

];


// ================= SHOW IMAGES =================

galleryImages.forEach(function(image) {

    const card = document.createElement("div");
    card.className = "gallery-item";

    const img = document.createElement("img");

    img.src = image;
    img.alt = "Explore Bangladesh";
    img.loading = "lazy";

    // Image না পাওয়া গেলে card hide করবে
    img.onerror = function() {
        card.style.display = "none";
    };

    card.appendChild(img);
    galleryGrid.appendChild(card);

});
// ================= IMAGE LIGHTBOX =================

const lightbox = document.getElementById("imageLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.querySelector(".lightbox-close");


// Gallery image click
document.addEventListener("click", function(e) {

    if (e.target.tagName === "IMG" &&
        e.target.closest(".gallery-item")) {

        lightboxImage.src = e.target.src;
        lightbox.classList.add("active");

    }

});


// Outside / background click করলে বন্ধ হবে
lightbox.addEventListener("click", function(e) {

    if (e.target === lightbox) {
        lightbox.classList.remove("active");
        lightboxImage.src = "";
    }

});


// X button
closeLightbox.addEventListener("click", function() {

    lightbox.classList.remove("active");
    lightboxImage.src = "";

});


// ESC চাপলেও বন্ধ হবে
document.addEventListener("keydown", function(e) {

    if (e.key === "Escape") {
        lightbox.classList.remove("active");
        lightboxImage.src = "";
    }

});