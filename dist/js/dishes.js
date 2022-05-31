function createDishesCarousel(dishes) {
    const dishesCarousel = document.getElementById("dishesCarousel");

    let content = "";

    // Content

    content += "<div class='carousel-inner relative w-full overflow-hidden'>";

    for (dishIndex in dishes) {
        if (dishIndex == 0) {
            content +=
                "<div class='carousel-item active relative float-left w-full'>";
        } else
            content += "<div class='carousel-item relative float-left w-full'>";

        content +=
            "<img src='./assets/img/dishes/dish.webp' class='block w-full' alt=''>";

        content +=
            "<div class='carousel-caption hidden md:block absolute text-center h-auto'>";
        content +=
            "<h5 class='text-xl text-dark font-semibold'>" +
            dishes[dishIndex].name +
            "</h5>";
        content +=
            "<p class='text-dark'>" + dishes[dishIndex].description + "</p>";
        content += "</div>";

        content += "</div>";
    }

    content += "</div>";

    // Append content

    dishesCarousel.innerHTML = content;
}
