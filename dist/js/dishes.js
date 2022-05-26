function createDishesCarousel(dishes) {
    const dishesCarousel = document.getElementById("dishesCarousel");

    let content = "";

    // Indicators

    // content +=
    //     "<div class='carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4'>";

    // for (dishIndex in dishes) {
    //     if (dishIndex == 0)
    //         content +=
    //             "<button type='button' data-bs-target='#carouselCaptions' data-bs-slide-to='" +
    //             dishIndex +
    //             "' class='active' aria-current='true' aria-label='" +
    //             "dish " +
    //             dishIndex +
    //             "'></button>";
    //     else
    //         content +=
    //             "<button type='button' data-bs-target='#carouselCaptions' data-bs-slide-to='" +
    //             dishIndex +
    //             "' aria-current='true' aria-label='" +
    //             "dish " +
    //             dishIndex +
    //             "'></button>";
    // }

    // content += "</div>";

    // Content

    content += "<div class='carousel-inner relative w-full overflow-hidden'>";

    for (dishIndex in dishes) {
        if (dishIndex == 0) {
            content +=
                "<div class='carousel-item active relative float-left w-full'>";
        } else
            content += "<div class='carousel-item relative float-left w-full'>";

        content +=
            "<img src='./assets/img/dishes/dish.jpg' class='block w-full' alt=''>";

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

    // // Previous slider

    // content +=
    //     "<button class='carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0' type='button' data-bs-target='#carouselCaptions' data-bs-slide='prev'>";

    // content +=
    //     "<span class='carousel-control-prev-icon inline-block bg-no-repeat' aria-hidden='true'></span>";
    // content += "<span class='visually-hidden'>Previous</span>";

    // content += "</button>";

    // // Next sllider

    // content +=
    //     "<button class='carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0' type='button' data-bs-target='#carouselCaptions' data-bs-slide='next'>";

    // content +=
    //     "<span class='carousel-control-next-icon inline-block bg-no-repeat' aria-hidden='true'></span>";
    // content += "<span class='visually-hidden'>Next</span>";

    // content += "</button>";

    // Append content

    dishesCarousel.innerHTML = content;
}
