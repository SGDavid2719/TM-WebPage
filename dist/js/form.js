function handleSubmit (p__Form__Container) {

    console.log("??")

    let lFilteredFilms = (g__Filtered__Films.length > 0) ? g__Filtered__Films : g__Films;

    let l__Data = $(("#" + p__Form__Container)).serializeArray();

    if (l__Data[0].value != "" && l__Data[2].value != "") {

        let l__Film__Identifier = p__Form__Container.split("commentForm")[1];

        let l__Comment = { "@type": "Comment", "author": { "@type:": "Person", "name": l__Data[0].value}, "contentRating": {"@type": "Rating", "name": l__Data[1].value }, "name": l__Data[2].value }; 

        lFilteredFilms.filter(film => film.identifier == l__Film__Identifier)[0].comment.push(l__Comment);

        document.getElementById(p__Form__Container).reset();

        // NEW
        if (g__Logged__User != undefined) document.getElementById(("inputNickname" + l__Film__Identifier)).value = g__Logged__User.name;

        NewAlert('info', "Comentario añadido", ' ', false, "Close", false, 1000);

        const lCommentSection = document.getElementById(("scrollviewContent" + l__Film__Identifier))

        while (lCommentSection.firstChild) {
            lCommentSection.removeChild(lCommentSection.lastChild);
        }

        appendComments(lCommentSection, lFilteredFilms.filter(film => film.identifier == l__Film__Identifier)[0].comment, l__Film__Identifier);
       
    } else {
        NewAlert('error', "Rellene todos los campos", ' ', false, "Close", false, 1000);
    }
}