function createDishesCarousel (dishes) {

    console.log(dishes)

    const dishesCarousel = document.getElementById("dishesCarousel");

    let content = "";

    // Indicators

    content += "<div class='carousel-indicators'>";

    for (dishIndex in dishes) {

        if (dishIndex === 0) content += "<button type='button' data-bs-target='#carouselCaptions' data-bs-slide-to='" + dishIndex + "' class='active' aria-current='true' aria-label='" + "dish" + dishIndex + "'></button>";
        else content += "<button type='button' data-bs-target='#carouselCaptions' data-bs-slide-to='" + dishIndex + "' aria-current='true' aria-label='" + "dish" + dishIndex + "'></button>";
    }

    content += "</div>";

    // Content

    content += "<div class='carousel-inner'>";

    for (dishIndex in dishes) {

        if (dishIndex === 0) content += "<div class='carousel-item active'>";
        else content += "<div class='carousel-item'>";

        content += "<img src='./assets/img/dishes/caldereta.jpg' class='d-block w-100' alt=''>";

        content += "<div class='carousel-caption d-none d-md-block'>";
        content += "<h5>" + dishes[dishIndex].name + "</h5>";
        content += "<p>" + dishes[dishIndex].description + "</p>";
        content += "</div>";

        content += "</div>";
    }

    content += "</div>";

    // Previous slider

    content += "<button class='carousel-control-prev' type='button' data-bs-target='#carouselCaptions' data-bs-slide='prev'>";

    content += "<span class='carousel-control-prev-icon' aria-hidden='true'></span>";
    content += "<span class='visually-hidden'>Previous</span>";

    content += "</button>";

    // Next sllider

    content += "<button class='carousel-control-next' type='button' data-bs-target='#carouselCaptions' data-bs-slide='next'>";

    content += "<span class='carousel-control-next-icon' aria-hidden='true'></span>";
    content += "<span class='visually-hidden'>Next</span>";

    content += "</button>";

    // Append content

    dishesCarousel.innerHTML = content;

    const carousel = new bootstrap.Carousel(dishesCarousel)

    console.log(carousel)
}