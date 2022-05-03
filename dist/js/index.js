// Globals
var g__Films;

$(document).ready(function () {
    fetch('./json/peliculas.json')
        .catch((error) => console.log("Hubo un error al cargar el JSON, número: " + error.status + ", " + error.statusText))
        .then((result) => result.json())
        .then((result) => {
            g__Films = result;
            console.log(g__Films);

            GeneratePosters();
        });
});

function GeneratePosters() {
    // Get films container
    let l__FilmsContainer = document.getElementById("filmsContainer");

    // Get portfolio container
    let l__PortfolioContainer = document.getElementById("portfolioContainer");

    // Iterate over each film
    for (l__Index in g__Films) {
        console.log(g__Films[l__Index])

        GenerateFilmPoster(l__FilmsContainer, g__Films[l__Index], l__Index);

        GenerateFilmModal(l__PortfolioContainer, g__Films[l__Index], l__Index);
    }
}

/*
 *  Genera el poster de una pelicula pasada por parámetros. Se añade al contenedor de pósters.
 *  
 *  @example GenerateFilm("<div>", {}, 1)
 * 
 *  @param p__FilmsContainer -
 *  @param p__Film -
 *  @param p__Film__Index
 *  
*/
function GenerateFilmPoster(p__FilmsContainer, p__Film, p__Film__Index) {
    // Create film div container
    let l__Film__Div = document.createElement("div");
    // Format div
    l__Film__Div.setAttribute("class", "col-lg-4 col-sm-6 mb-4");

    // Create item (div)
    let l__Portfolio__Item__Div = document.createElement("div");
    // Format div
    l__Portfolio__Item__Div.setAttribute("class", "portfolio-item");

    let l__Portfolio__Link__A = document.createElement("a");
    // Format a
    l__Portfolio__Link__A.setAttribute("class", "portfolio-link");
    l__Portfolio__Link__A.setAttribute("data-bs-toggle", "modal");
    l__Portfolio__Link__A.setAttribute("href", ("#portfolioModal" + p__Film__Index));

    let l__Portfolio__Img = document.createElement("img");
    // Format img
    l__Portfolio__Img.setAttribute("class", "img-fluid");
    l__Portfolio__Img.setAttribute("src", p__Film.image[0].name);
    l__Portfolio__Img.setAttribute("alt", p__Film.name);

    // Append image into a
    l__Portfolio__Link__A.appendChild(l__Portfolio__Img);

    // Append link into item
    l__Portfolio__Item__Div.appendChild(l__Portfolio__Link__A);

    // Create caption (div)
    let l__Portfolio__Caption__Div = document.createElement("div");
    // Format div
    l__Portfolio__Caption__Div.setAttribute("class", "portfolio-caption");

    // Create caption heading (div)
    let l__Portfolio__Caption__Heading__Div = document.createElement("div");
    // Format div
    l__Portfolio__Caption__Heading__Div.setAttribute("class", "portfolio-caption-heading");
    // Create text node
    let l__Portfolio__Caption__Heading__Text__Node = document.createTextNode(p__Film.name);
    // Append text node
    l__Portfolio__Caption__Heading__Div.appendChild(l__Portfolio__Caption__Heading__Text__Node);

    // Create caption heading (div)
    let l__Portfolio__Caption__Subheading__Div = document.createElement("div");
    // Format div
    l__Portfolio__Caption__Subheading__Div.setAttribute("class", "portfolio-caption-subheading text-muted");
    // Create text node
    let l__Portfolio__Caption__Subheading__Text__Node = document.createTextNode(p__Film.releasedEvent.name);
    // Append text node
    l__Portfolio__Caption__Subheading__Div.appendChild(l__Portfolio__Caption__Subheading__Text__Node);

    // Append captions into caption
    l__Portfolio__Caption__Div.appendChild(l__Portfolio__Caption__Heading__Div);
    l__Portfolio__Caption__Div.appendChild(l__Portfolio__Caption__Subheading__Div);

    // Append caption into item
    l__Portfolio__Item__Div.appendChild(l__Portfolio__Caption__Div);

    // Append item into film
    l__Film__Div.appendChild(l__Portfolio__Item__Div);

    // Append film into films container
    p__FilmsContainer.appendChild(l__Film__Div);
}

/*
 *  Genera el poster de una pelicula pasada por parámetros. Se añade al contenedor de pósters.
 *  
 *  @example GenerateFilm("<div>", {}, 1)
 * 
 *  @param p__PortfolioContainer -
 *  @param p__Film -
 *  @param p__Film__Index
 *  
*/
function GenerateFilmModal(p__PortfolioContainer, p__Film, p__Film__Index) {
    // Create portfolio div container
    let l__Portfolio__Div = document.createElement("div");
    // Format div
    l__Portfolio__Div.setAttribute("class", "portfolio-modal modal fade");
    l__Portfolio__Div.setAttribute("id", ("portfolioModal" + p__Film__Index));
    l__Portfolio__Div.setAttribute("tabindex", "-1");
    l__Portfolio__Div.setAttribute("role", "dialog");
    l__Portfolio__Div.setAttribute("aria-hidden", "true");

    // Create modal dialog div 
    let l__Modal__Dialog__Div = document.createElement("div");
    // Format div
    l__Modal__Dialog__Div.setAttribute("class", "modal-dialog");

    // Create modal dialog div 
    let l__Modal__Content__Div = document.createElement("div");
    // Format div
    l__Modal__Content__Div.setAttribute("class", "modal-content");

    // Create close modal div 
    let l__Close__Modal__Div = document.createElement("div");
    // Format div
    l__Close__Modal__Div.setAttribute("class", "close-modal");
    l__Close__Modal__Div.setAttribute("data-bs-dismiss", "modal");

    // Create close modal img 
    let l__Close__Modal__Img = document.createElement("img");
    // Format div
    l__Close__Modal__Img.setAttribute("src", "assets/img/close-icon.svg");
    l__Close__Modal__Div.setAttribute("alt", "Close modal");

    // Append img into div
    l__Close__Modal__Div.appendChild(l__Close__Modal__Img);

    // Create container div 
    let l__Container__Div = document.createElement("div");
    // Format div
    l__Container__Div.setAttribute("class", "container");

    // Create row div 
    let l__Row__Div = document.createElement("div");
    // Format div
    l__Row__Div.setAttribute("class", "row");

    // Create row h2 
    let l__Row__H2 = document.createElement("h2");
    // Format div
    l__Row__H2.setAttribute("class", "text-uppercase text-lg-center");

    // Create row h2 text node 
    let l__Row__H2__Text__Node = document.createTextNode(p__Film.name);

    // Append text node into h2
    l__Row__H2.appendChild(l__Row__H2__Text__Node);

    // Create row p 
    let l__Row__P = document.createElement("p");
    // Format div
    l__Row__P.setAttribute("class", "item-intro text-muted text-lg-center");

    // Create row h2 text node 
    let l__Row__P__Text__Node = document.createTextNode(p__Film.releasedEvent.name);

    // Append text node into h2
    l__Row__P.appendChild(l__Row__P__Text__Node);

    // Create row col div 
    let l__Row__Col__Div = document.createElement("div");
    // Format div
    l__Row__Col__Div.setAttribute("class", "col-lg-6");

    // Create row col modal body div 
    let l__Row__Col__Modal__Body__Div = document.createElement("div");
    // Format div
    l__Row__Col__Modal__Body__Div.setAttribute("class", "modal-body");

    // Create row col modal body div 
    let l__Row__Col__Modal__Body__Div__Link = document.createElement("a");
    // Format a
    l__Row__Col__Modal__Body__Div__Link.setAttribute("href", p__Film.trailer.name);

    // Create row col modal body div img
    let l__Row__Col__Modal__Body__Div__Link__Img = document.createElement("img");
    // Format img
    l__Row__Col__Modal__Body__Div__Link__Img.setAttribute("class", "img-fluid d-block mx-auto");
    l__Row__Col__Modal__Body__Div__Link__Img.setAttribute("src", p__Film.image[1].name);
    l__Row__Col__Modal__Body__Div__Link__Img.setAttribute("alt", (p__Film.name + " trailer"));

    // Append image (img) into modal body link (a)
    l__Row__Col__Modal__Body__Div__Link.appendChild(l__Row__Col__Modal__Body__Div__Link__Img);

    // Append link (a) into modal body (div)
    l__Row__Col__Modal__Body__Div.appendChild(l__Row__Col__Modal__Body__Div__Link);

    // Append modal body (div) into row col (div)
    l__Row__Col__Div.appendChild(l__Row__Col__Modal__Body__Div);

    // Create row second col div 
    let l__Row__Second__Col__Div = document.createElement("div");
    // Format div
    l__Row__Second__Col__Div.setAttribute("class", "col-lg-6 text-lg-start");

    // Create row second col div list 
    let l__Row__Second__Col__Div__List = document.createElement("ul");
    // Format ul
    l__Row__Second__Col__Div__List.setAttribute("class", "list-inline");

    // DURATION

    // Create row second col div list item
    let l__Row__Second__Col__Div__List__Item__Duration = document.createElement("li");

    // Create row second col div list item content text node 
    let l__Row__Second__Col__Div__List__Item__Duration__Text__Node = document.createTextNode("<strong>Duración:</strong> " + p__Film.duration.name);

    // Append text node into item
    l__Row__Second__Col__Div__List__Item__Duration.appendChild(l__Row__Second__Col__Div__List__Item__Duration__Text__Node);

    // Append item into list
    l__Row__Second__Col__Div__List.appendChild(l__Row__Second__Col__Div__List__Item__Duration);

    // COUNTRY

    // Create row second col div list item
    let l__Row__Second__Col__Div__List__Item__Country = document.createElement("li");

    // Create row second col div list item content text node 
    let l__Row__Second__Col__Div__List__Item__Country__Text__Node = document.createTextNode("<strong>País:</strong> " + p__Film.countryOfOrigin.name);

    // Append text node into item
    l__Row__Second__Col__Div__List__Item__Country.appendChild(l__Row__Second__Col__Div__List__Item__Country__Text__Node);

    // Append item into list
    l__Row__Second__Col__Div__List.appendChild(l__Row__Second__Col__Div__List__Item__Country);

    // DIRECTOR

    // Create row second col div list item
    let l__Row__Second__Col__Div__List__Item__Director = document.createElement("li");

    // Create row second col div list item content text node 
    let l__Row__Second__Col__Div__List__Item__Director__Text__Node = document.createTextNode("<strong>Dirección:</strong> " + p__Film.director.name);

    // Append text node into item
    l__Row__Second__Col__Div__List__Item__Director.appendChild(l__Row__Second__Col__Div__List__Item__Director__Text__Node);

    // Append item into list
    l__Row__Second__Col__Div__List.appendChild(l__Row__Second__Col__Div__List__Item__Director);

    // MUSIC

    // Create row second col div list item
    let l__Row__Second__Col__Div__List__Item__Music = document.createElement("li");

    // Create row second col div list item content text node 
    let l__Row__Second__Col__Div__List__Item__Music__Text__Node = document.createTextNode("<strong>Música:</strong> " + p__Film.musicBy.name);

    // Append text node into item
    l__Row__Second__Col__Div__List__Item__Music.appendChild(l__Row__Second__Col__Div__List__Item__Music__Text__Node);

    // Append item into list
    l__Row__Second__Col__Div__List.appendChild(l__Row__Second__Col__Div__List__Item__Music);

    // ACTOR

    // Create row second col div list item
    let l__Row__Second__Col__Div__List__Item__Actor = document.createElement("li");

    // For each actor
    let l__Actors = "";
    for (l__Item in p__Film.actor) {
        l__Actors += p__Film.actor[l__Item].name + ", ";
    }

    // Create row second col div list item content text node 
    let l__Row__Second__Col__Div__List__Item__Actor__Text__Node = document.createTextNode("<strong>Reparto:</strong> " + l__Actors);

    // Append text node into item
    l__Row__Second__Col__Div__List__Item__Actor.appendChild(l__Row__Second__Col__Div__List__Item__Actor__Text__Node);

    // Append item into list
    l__Row__Second__Col__Div__List.appendChild(l__Row__Second__Col__Div__List__Item__Actor);

    // PRODUCTION COMPANY

    // Create row second col div list item
    let l__Row__Second__Col__Div__List__Item__Production__Company = document.createElement("li");

    // Create row second col div list item content text node 
    let l__Row__Second__Col__Div__List__Item__Production__Company__Text__Node = document.createTextNode("<strong>Productora:</strong> " + p__Film.productionCompany.name);

    // Append text node into item
    l__Row__Second__Col__Div__List__Item__Production__Company.appendChild(l__Row__Second__Col__Div__List__Item__Production__Company__Text__Node);

    // Append item into list
    l__Row__Second__Col__Div__List.appendChild(l__Row__Second__Col__Div__List__Item__Production__Company);

    // GENRE

    // Create row second col div list item
    let l__Row__Second__Col__Div__List__Item__Genre = document.createElement("li");

    // For each actor
    let l__Genres = "";
    for (l__Item in p__Film.genre) {
        l__Genres += p__Film.genre[l__Item].name + ", ";
    }

    // Create row second col div list item content text node 
    let l__Row__Second__Col__Div__List__Item__Genre__Text__Node = document.createTextNode("<strong>Género:</strong> " + l__Genres);

    // Append text node into item
    l__Row__Second__Col__Div__List__Item__Genre.appendChild(l__Row__Second__Col__Div__List__Item__Genre__Text__Node);

    // Append item into list
    l__Row__Second__Col__Div__List.appendChild(l__Row__Second__Col__Div__List__Item__Genre);

    // SINOPSIS

    // Create row second col div list item
    let l__Row__Second__Col__Div__List__Item__Sinopsis = document.createElement("li");

    // Create row second col div list item content text node 
    let l__Row__Second__Col__Div__List__Item__Sinopsis__Text__Node = document.createTextNode("<strong>Sinopsis:</strong> " + p__Film.description);

    // Append text node into item
    l__Row__Second__Col__Div__List__Item__Sinopsis.appendChild(l__Row__Second__Col__Div__List__Item__Sinopsis__Text__Node);

    // Append item into list
    l__Row__Second__Col__Div__List.appendChild(l__Row__Second__Col__Div__List__Item__Sinopsis);

    // Append list (ul) into the second col (div)
    l__Row__Second__Col__Div.appendChild(l__Row__Second__Col__Div__List);

    // Append content into row
    l__Row__Div.appendChild(l__Row__H2);
    l__Row__Div.appendChild(l__Row__P);
    l__Row__Div.appendChild(l__Row__Col__Div);
    l__Row__Div.appendChild(l__Row__Second__Col__Div);

    // Append row into container
    l__Container__Div.appendChild(l__Row__Div);

    // Append close modal and container into modal-content
    l__Modal__Content__Div.appendChild(l__Close__Modal__Div);
    l__Modal__Content__Div.appendChild(l__Container__Div);

    // Append modal content into modal dialog
    l__Modal__Dialog__Div.appendChild(l__Modal__Content__Div);

    // Append modal dialog into portfolio
    l__Portfolio__Div.appendChild(l__Modal__Dialog__Div);

    // Append film portfolio into films portfolio container
    p__PortfolioContainer.appendChild(l__Portfolio__Div);
}