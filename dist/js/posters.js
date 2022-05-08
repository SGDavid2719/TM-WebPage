
function generatePosters(p__Films) {
    // Get films container
    let l__FilmsContainer = document.getElementById("filmsContainer");

    // Get portfolio container
    let l__PortfolioContainer = document.getElementById("portfolioContainer");

    // Iterate over each film
    for (l__Index in p__Films) {

        generateFilmPoster(l__FilmsContainer, p__Films[l__Index], l__Index);

        generateFilmModal(l__PortfolioContainer, p__Films[l__Index], l__Index);
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
function generateFilmPoster(p__FilmsContainer, p__Film, p__Film__Index) {
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
 *  @example generateFilmModal("<div>", {}, 1)
 * 
 *  @param p__PortfolioContainer -
 *  @param p__Film -
 *  @param p__Film__Index
 *  
*/
function generateFilmModal(p__PortfolioContainer, p__Film, p__Film__Index) {
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

    // Create row second col div list item strong text node
    let l__Row__Second__Col__Div__List__Item__Duration__Strong = document.createElement("strong");

    // Create row second col div list item strong text node
    let l__Row__Second__Col__Div__List__Item__Duration__Strong__Text__Node = document.createTextNode("Duración: ");

    // Append text node into strong
    l__Row__Second__Col__Div__List__Item__Duration__Strong.appendChild(l__Row__Second__Col__Div__List__Item__Duration__Strong__Text__Node);

    // Create row second col div list item content text node 
    let l__Row__Second__Col__Div__List__Item__Duration__Text__Node = document.createTextNode(p__Film.duration.name);

    // Append text node into item
    l__Row__Second__Col__Div__List__Item__Duration.appendChild(l__Row__Second__Col__Div__List__Item__Duration__Strong);
    l__Row__Second__Col__Div__List__Item__Duration.appendChild(l__Row__Second__Col__Div__List__Item__Duration__Text__Node);

    // Append item into list
    l__Row__Second__Col__Div__List.appendChild(l__Row__Second__Col__Div__List__Item__Duration);

    // COUNTRY

    // Create row second col div list item
    let l__Row__Second__Col__Div__List__Item__Country = document.createElement("li");

    // Create row second col div list item strong text node
    let l__Row__Second__Col__Div__List__Item__Country__Strong = document.createElement("strong");

    // Create row second col div list item strong text node
    let l__Row__Second__Col__Div__List__Item__Country__Strong__Text__Node = document.createTextNode("País: ");

    // Append text node into strong
    l__Row__Second__Col__Div__List__Item__Country__Strong.appendChild(l__Row__Second__Col__Div__List__Item__Country__Strong__Text__Node);

    // Create row second col div list item content text node 
    let l__Row__Second__Col__Div__List__Item__Country__Text__Node = document.createTextNode(p__Film.countryOfOrigin.name);

    // Append text node into item
    l__Row__Second__Col__Div__List__Item__Country.appendChild(l__Row__Second__Col__Div__List__Item__Country__Strong);
    l__Row__Second__Col__Div__List__Item__Country.appendChild(l__Row__Second__Col__Div__List__Item__Country__Text__Node);

    // Append item into list
    l__Row__Second__Col__Div__List.appendChild(l__Row__Second__Col__Div__List__Item__Country);

    // DIRECTOR

    // Create row second col div list item
    let l__Row__Second__Col__Div__List__Item__Director = document.createElement("li");

    // Create row second col div list item strong text node
    let l__Row__Second__Col__Div__List__Item__Director__Strong = document.createElement("strong");

    // Create row second col div list item strong text node
    let l__Row__Second__Col__Div__List__Item__Director__Strong__Text__Node = document.createTextNode("Dirección: ");

    // Append text node into strong
    l__Row__Second__Col__Div__List__Item__Director__Strong.appendChild(l__Row__Second__Col__Div__List__Item__Director__Strong__Text__Node);

    // Create row second col div list item content text node 
    let l__Row__Second__Col__Div__List__Item__Director__Text__Node = document.createTextNode(p__Film.director.name);

    // Append text node into item
    l__Row__Second__Col__Div__List__Item__Director.appendChild(l__Row__Second__Col__Div__List__Item__Director__Strong);
    l__Row__Second__Col__Div__List__Item__Director.appendChild(l__Row__Second__Col__Div__List__Item__Director__Text__Node);

    // Append item into list
    l__Row__Second__Col__Div__List.appendChild(l__Row__Second__Col__Div__List__Item__Director);

    // MUSIC

    // Create row second col div list item
    let l__Row__Second__Col__Div__List__Item__Music = document.createElement("li");

    // Create row second col div list item strong text node
    let l__Row__Second__Col__Div__List__Item__Music__Strong = document.createElement("strong");

    // Create row second col div list item strong text node
    let l__Row__Second__Col__Div__List__Item__Music__Strong__Text__Node = document.createTextNode("Música: ");

    // Append text node into strong
    l__Row__Second__Col__Div__List__Item__Music__Strong.appendChild(l__Row__Second__Col__Div__List__Item__Music__Strong__Text__Node);

    // Create row second col div list item content text node 
    let l__Row__Second__Col__Div__List__Item__Music__Text__Node = document.createTextNode(p__Film.musicBy.name);

    // Append text node into item
    l__Row__Second__Col__Div__List__Item__Music.appendChild(l__Row__Second__Col__Div__List__Item__Music__Strong);
    l__Row__Second__Col__Div__List__Item__Music.appendChild(l__Row__Second__Col__Div__List__Item__Music__Text__Node);

    // Append item into list
    l__Row__Second__Col__Div__List.appendChild(l__Row__Second__Col__Div__List__Item__Music);

    // ACTOR

    // Create row second col div list item
    let l__Row__Second__Col__Div__List__Item__Actor = document.createElement("li");

    // Create row second col div list item strong text node
    let l__Row__Second__Col__Div__List__Item__Actor__Strong = document.createElement("strong");

    // Create row second col div list item strong text node
    let l__Row__Second__Col__Div__List__Item__Actor__Strong__Text__Node = document.createTextNode("Reparto: ");

    // Append text node into strong
    l__Row__Second__Col__Div__List__Item__Actor__Strong.appendChild(l__Row__Second__Col__Div__List__Item__Actor__Strong__Text__Node);

    // For each actor
    let l__Actors = "";
    for (l__Item in p__Film.actor) {
        l__Actors += p__Film.actor[l__Item].name + ", ";
    }

    // Create row second col div list item content text node 
    let l__Row__Second__Col__Div__List__Item__Actor__Text__Node = document.createTextNode(l__Actors);

    // Append text node into item
    l__Row__Second__Col__Div__List__Item__Actor.appendChild(l__Row__Second__Col__Div__List__Item__Actor__Strong);
    l__Row__Second__Col__Div__List__Item__Actor.appendChild(l__Row__Second__Col__Div__List__Item__Actor__Text__Node);

    // Append item into list
    l__Row__Second__Col__Div__List.appendChild(l__Row__Second__Col__Div__List__Item__Actor);

    // PRODUCTION COMPANY

    // Create row second col div list item
    let l__Row__Second__Col__Div__List__Item__Production__Company = document.createElement("li");

    // Create row second col div list item strong text node
    let l__Row__Second__Col__Div__List__Item__Production__Company__Strong = document.createElement("strong");

    // Create row second col div list item strong text node
    let l__Row__Second__Col__Div__List__Item__Production__Company__Strong__Text__Node = document.createTextNode("Productora: ");

    // Append text node into strong
    l__Row__Second__Col__Div__List__Item__Production__Company__Strong.appendChild(l__Row__Second__Col__Div__List__Item__Production__Company__Strong__Text__Node);

    // Create row second col div list item content text node 
    let l__Row__Second__Col__Div__List__Item__Production__Company__Text__Node = document.createTextNode(p__Film.productionCompany.name);

    // Append text node into item
    l__Row__Second__Col__Div__List__Item__Production__Company.appendChild(l__Row__Second__Col__Div__List__Item__Production__Company__Strong);
    l__Row__Second__Col__Div__List__Item__Production__Company.appendChild(l__Row__Second__Col__Div__List__Item__Production__Company__Text__Node);

    // Append item into list
    l__Row__Second__Col__Div__List.appendChild(l__Row__Second__Col__Div__List__Item__Production__Company);

    // GENRE

    // Create row second col div list item
    let l__Row__Second__Col__Div__List__Item__Genre = document.createElement("li");

    // Create row second col div list item strong text node
    let l__Row__Second__Col__Div__List__Item__Genre__Strong = document.createElement("strong");

    // Create row second col div list item strong text node
    let l__Row__Second__Col__Div__List__Item__Genre__Strong__Text__Node = document.createTextNode("Género: ");

    // Append text node into strong
    l__Row__Second__Col__Div__List__Item__Genre__Strong.appendChild(l__Row__Second__Col__Div__List__Item__Genre__Strong__Text__Node);

    // For each actor
    let l__Genres = "";
    for (l__Item in p__Film.genre) {
        l__Genres += p__Film.genre[l__Item].name + ", ";
    }

    // Create row second col div list item content text node 
    let l__Row__Second__Col__Div__List__Item__Genre__Text__Node = document.createTextNode(l__Genres);

    // Append text node into item
    l__Row__Second__Col__Div__List__Item__Genre.appendChild(l__Row__Second__Col__Div__List__Item__Genre__Strong);
    l__Row__Second__Col__Div__List__Item__Genre.appendChild(l__Row__Second__Col__Div__List__Item__Genre__Text__Node);

    // Append item into list
    l__Row__Second__Col__Div__List.appendChild(l__Row__Second__Col__Div__List__Item__Genre);

    // SINOPSIS

    // Create row second col div list item
    let l__Row__Second__Col__Div__List__Item__Sinopsis = document.createElement("li");

    // Create row second col div list item strong text node
    let l__Row__Second__Col__Div__List__Item__Sinopsis__Strong = document.createElement("strong");

    // Create row second col div list item strong text node
    let l__Row__Second__Col__Div__List__Item__Sinopsis__Strong__Text__Node = document.createTextNode("Sinopsis: ");

    // Append text node into strong
    l__Row__Second__Col__Div__List__Item__Sinopsis__Strong.appendChild(l__Row__Second__Col__Div__List__Item__Sinopsis__Strong__Text__Node);

    // Create row second col div list item content text node 
    let l__Row__Second__Col__Div__List__Item__Sinopsis__Text__Node = document.createTextNode(p__Film.description);

    // Append text node into item
    l__Row__Second__Col__Div__List__Item__Sinopsis.appendChild(l__Row__Second__Col__Div__List__Item__Sinopsis__Strong);
    l__Row__Second__Col__Div__List__Item__Sinopsis.appendChild(l__Row__Second__Col__Div__List__Item__Sinopsis__Text__Node);

    // Append item into list
    l__Row__Second__Col__Div__List.appendChild(l__Row__Second__Col__Div__List__Item__Sinopsis);

    // Append list (ul) into the second col (div)
    l__Row__Second__Col__Div.appendChild(l__Row__Second__Col__Div__List);

    // COMMENTS SECTION

    // Create opinion section div
    let l__Row__Opinion__Section = document.createElement("div");
    // Format div
    l__Row__Opinion__Section.setAttribute("id", ("opinionSection" + p__Film__Index));

    // Create opinion section div form
    let l__Row__Opinion__Section__Form = document.createElement("form");
    // Format form
    l__Row__Opinion__Section__Form.setAttribute("class", "text-lg-start row");
    l__Row__Opinion__Section__Form.setAttribute("id", ("commentForm" + p__Film__Index));

    // NICKNAME INPUT

    // Create opinion section div form name column
    let l__Row__Opinion__Section__Form__Name__Col = document.createElement("div");
    // Format column
    l__Row__Opinion__Section__Form__Name__Col.setAttribute("class", "col-12 col-lg-6 p-1");

    // Create opinion section div form name column label
    let l__Row__Opinion__Section__Form__Name__Col__Label = document.createElement("label");
    // Format form
    l__Row__Opinion__Section__Form__Name__Col__Label.setAttribute("class", "text-lg-start form-label");
    l__Row__Opinion__Section__Form__Name__Col__Label.setAttribute("for", ("inputNickname" + p__Film__Index));
    l__Row__Opinion__Section__Form__Name__Col__Label.textContent = "Añade tu nombre";

    // Create opinion section div form name column input
    let l__Row__Opinion__Section__Form__Name__Col__Input = document.createElement("input");
    // Format form
    l__Row__Opinion__Section__Form__Name__Col__Input.setAttribute("type", "text");
    l__Row__Opinion__Section__Form__Name__Col__Input.setAttribute("maxlength", "40");
    l__Row__Opinion__Section__Form__Name__Col__Input.setAttribute("class", "form-control");
    l__Row__Opinion__Section__Form__Name__Col__Input.setAttribute("id", ("inputNickname" + p__Film__Index));
    l__Row__Opinion__Section__Form__Name__Col__Input.setAttribute("name", ("inputNickname" + p__Film__Index));
    l__Row__Opinion__Section__Form__Name__Col__Input.setAttribute("aria-describedby", "nameInputHelp");
    l__Row__Opinion__Section__Form__Name__Col__Input.setAttribute("placeholder", "p.e. David");
    l__Row__Opinion__Section__Form__Name__Col__Input.setAttribute("required", true);

    l__Row__Opinion__Section__Form__Name__Col.appendChild(l__Row__Opinion__Section__Form__Name__Col__Label);
    l__Row__Opinion__Section__Form__Name__Col.appendChild(l__Row__Opinion__Section__Form__Name__Col__Input);

    l__Row__Opinion__Section__Form.appendChild(l__Row__Opinion__Section__Form__Name__Col);

    // RATE SELECT

    // Create opinion section div form rate column
    let l__Row__Opinion__Section__Form__Rate__Col = document.createElement("div");
    // Format column
    l__Row__Opinion__Section__Form__Rate__Col.setAttribute("class", "col-12 col-lg-6 p-1");

    // Create opinion section div form rate column label
    let l__Row__Opinion__Section__Form__Rate__Col__Label = document.createElement("label");
    // Format form
    l__Row__Opinion__Section__Form__Rate__Col__Label.setAttribute("class", "text-lg-start form-label");
    l__Row__Opinion__Section__Form__Rate__Col__Label.setAttribute("for", ("inputRate" + p__Film__Index));
    l__Row__Opinion__Section__Form__Rate__Col__Label.textContent = "Puntuación";

    // Create opinion section div form rate column select
    let l__Row__Opinion__Section__Form__Rate__Col__Select = document.createElement("select");
    // Format form
    l__Row__Opinion__Section__Form__Rate__Col__Select.setAttribute("class", "form-select");
    l__Row__Opinion__Section__Form__Rate__Col__Select.setAttribute("id", ("inputRate" + p__Film__Index));
    l__Row__Opinion__Section__Form__Rate__Col__Select.setAttribute("name", ("inputRate" + p__Film__Index));

    // Create opinion section div form rate column select option
    let l__Row__Opinion__Section__Form__Rate__Col__Select__Option__1 = document.createElement("option");
    // Format form
    l__Row__Opinion__Section__Form__Rate__Col__Select__Option__1.setAttribute("selected", true);
    l__Row__Opinion__Section__Form__Rate__Col__Select__Option__1.textContent = "1";

    l__Row__Opinion__Section__Form__Rate__Col__Select.appendChild(l__Row__Opinion__Section__Form__Rate__Col__Select__Option__1);

    // Create opinion section div form rate column select option
    let l__Row__Opinion__Section__Form__Rate__Col__Select__Option__2 = document.createElement("option");
    // Format form
    l__Row__Opinion__Section__Form__Rate__Col__Select__Option__2.textContent = "2";

    l__Row__Opinion__Section__Form__Rate__Col__Select.appendChild(l__Row__Opinion__Section__Form__Rate__Col__Select__Option__2);

    // Create opinion section div form rate column select option
    let l__Row__Opinion__Section__Form__Rate__Col__Select__Option__3 = document.createElement("option");
    // Format form
    l__Row__Opinion__Section__Form__Rate__Col__Select__Option__3.textContent = "3";

    l__Row__Opinion__Section__Form__Rate__Col__Select.appendChild(l__Row__Opinion__Section__Form__Rate__Col__Select__Option__3);

    // Create opinion section div form rate column select option
    let l__Row__Opinion__Section__Form__Rate__Col__Select__Option__4 = document.createElement("option");
    // Format form
    l__Row__Opinion__Section__Form__Rate__Col__Select__Option__4.textContent = "4";

    l__Row__Opinion__Section__Form__Rate__Col__Select.appendChild(l__Row__Opinion__Section__Form__Rate__Col__Select__Option__4);

    // Create opinion section div form rate column select option
    let l__Row__Opinion__Section__Form__Rate__Col__Select__Option__5 = document.createElement("option");
    // Format form
    l__Row__Opinion__Section__Form__Rate__Col__Select__Option__5.textContent = "5";

    l__Row__Opinion__Section__Form__Rate__Col__Select.appendChild(l__Row__Opinion__Section__Form__Rate__Col__Select__Option__5);

    l__Row__Opinion__Section__Form__Rate__Col.appendChild(l__Row__Opinion__Section__Form__Rate__Col__Label);
    l__Row__Opinion__Section__Form__Rate__Col.appendChild(l__Row__Opinion__Section__Form__Rate__Col__Select);

    l__Row__Opinion__Section__Form.appendChild(l__Row__Opinion__Section__Form__Rate__Col);

    // OPINION TEXTAREA

    // Create opinion section div form name column
    let l__Row__Opinion__Section__Form__Opinion__Col = document.createElement("div");
    // Format column
    l__Row__Opinion__Section__Form__Opinion__Col.setAttribute("class", "col-12 p-1");

    // Create opinion section div form name column label
    let l__Row__Opinion__Section__Form__Opinion__Col__Label = document.createElement("label");
    // Format form
    l__Row__Opinion__Section__Form__Opinion__Col__Label.setAttribute("class", "text-lg-start form-label");
    l__Row__Opinion__Section__Form__Opinion__Col__Label.setAttribute("for", ("inputComment" + p__Film__Index));
    l__Row__Opinion__Section__Form__Opinion__Col__Label.textContent = "Añade un comentario";

    // Create opinion section div form name column input
    let l__Row__Opinion__Section__Form__Opinion__Col__Input = document.createElement("textarea");
    // Format form
    l__Row__Opinion__Section__Form__Opinion__Col__Input.setAttribute("class", "form-control");
    l__Row__Opinion__Section__Form__Opinion__Col__Input.setAttribute("id", ("inputComment" + p__Film__Index));
    l__Row__Opinion__Section__Form__Opinion__Col__Input.setAttribute("name", ("inputComment" + p__Film__Index));
    l__Row__Opinion__Section__Form__Opinion__Col__Input.setAttribute("aria-describedby", "opinionTextareaHelp");
    l__Row__Opinion__Section__Form__Opinion__Col__Input.setAttribute("placeholder", "p.e. Esta película...");
    l__Row__Opinion__Section__Form__Opinion__Col__Input.setAttribute("required", true);

    l__Row__Opinion__Section__Form__Opinion__Col.appendChild(l__Row__Opinion__Section__Form__Opinion__Col__Label);
    l__Row__Opinion__Section__Form__Opinion__Col.appendChild(l__Row__Opinion__Section__Form__Opinion__Col__Input);

    l__Row__Opinion__Section__Form.appendChild(l__Row__Opinion__Section__Form__Opinion__Col);

    // SUBMIT BUTTON

    // Create opinion section div form
    let l__Row__Opinion__Section__Form__Button = document.createElement("div");
    // Format form
    l__Row__Opinion__Section__Form__Button.setAttribute("class", "row");

    // Create opinion section div form
    let l__Row__Opinion__Section__Form__Button__Col = document.createElement("div");
    // Format form
    l__Row__Opinion__Section__Form__Button__Col.setAttribute("class", "col-12 p-1 d-flex justify-content-end");

    // Create opinion section div form
    let l__Row__Opinion__Section__Form__Button__Col__Btn = document.createElement("button");
    // Format form
    l__Row__Opinion__Section__Form__Button__Col__Btn.setAttribute("class", "btn btn-primary");
    l__Row__Opinion__Section__Form__Button__Col__Btn.setAttribute("id", ("addComment" + p__Film__Index));
    l__Row__Opinion__Section__Form__Button__Col__Btn.textContent = "Añade tu comentario";

    l__Row__Opinion__Section__Form__Button__Col.appendChild(l__Row__Opinion__Section__Form__Button__Col__Btn);
    l__Row__Opinion__Section__Form__Button.appendChild(l__Row__Opinion__Section__Form__Button__Col);

    // COMMENTS

    // Create opinion section div form
    let l__Row__Opinion__Section__Comments = document.createElement("div");
    // Format form
    l__Row__Opinion__Section__Comments.setAttribute("class", "row pt-4 p-1");

    // Create opinion section div form
    let l__Row__Opinion__Section__Comments__View = document.createElement("div");
    // Format form
    l__Row__Opinion__Section__Comments__View.setAttribute("class", "p-3 p-lg-5 scrollviewContent");
    l__Row__Opinion__Section__Comments__View.setAttribute("id", ("scrollviewContent" + p__Film__Index));

    for (let l__Comment__Index in p__Film.comment) {
        let l__Card = document.createElement("div");
        l__Card.setAttribute("class", "card border-dark mx-3 mx-lg-4 pb-3 mb-3");

        let l__Card__Header = document.createElement("div");
        l__Card__Header.textContent = p__Film.comment[l__Comment__Index].author.name;
        l__Card__Header.setAttribute("class", "card-header fw-bold");

        let l__Card__Body = document.createElement("div");
        l__Card__Body.setAttribute("class", "card-body text-dark");

        let l__Card__Body__Title = document.createElement("h5");
        l__Card__Body__Title.textContent = p__Film.comment[l__Comment__Index].contentRating.name + "/5";
        l__Card__Body__Title.setAttribute("class", "card-title");

        let l__Card__Body__Text = document.createElement("p");
        l__Card__Body__Text.textContent = p__Film.comment[l__Comment__Index].name;
        l__Card__Body__Text.setAttribute("class", "card-text");

        l__Card__Body.appendChild(l__Card__Body__Title);
        l__Card__Body.appendChild(l__Card__Body__Text);

        l__Card.appendChild(l__Card__Header);
        l__Card.appendChild(l__Card__Body);

        l__Row__Opinion__Section__Comments__View.appendChild(l__Card);
    }

    l__Row__Opinion__Section__Comments.appendChild(l__Row__Opinion__Section__Comments__View);


    // Append form into comments section
    l__Row__Opinion__Section.appendChild(l__Row__Opinion__Section__Form);
    // Append form into comments section
    l__Row__Opinion__Section.appendChild(l__Row__Opinion__Section__Form__Button);
    // Append form into comments section
    l__Row__Opinion__Section.appendChild(l__Row__Opinion__Section__Comments);


    // Append content into row
    l__Row__Div.appendChild(l__Row__H2);
    l__Row__Div.appendChild(l__Row__P);
    l__Row__Div.appendChild(l__Row__Col__Div);
    l__Row__Div.appendChild(l__Row__Second__Col__Div);
    l__Row__Div.appendChild(l__Row__Opinion__Section);

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

function clearPosters() {

    // Get films container
    let l__FilmsContainer = document.getElementById("filmsContainer");

    // Get portfolio container
    let l__PortfolioContainer = document.getElementById("portfolioContainer");

    while (l__FilmsContainer.firstChild) {
        l__FilmsContainer.removeChild(l__FilmsContainer.lastChild);
    }

    while (l__PortfolioContainer.firstChild) {
        l__PortfolioContainer.removeChild(l__PortfolioContainer.lastChild);
    }
}