function handleSubmit (p__Form__Container) {

    let lFilteredFilms = (g__Filtered__Films.length > 0) ? g__Filtered__Films : g__Films;

    let l__Data = $(("#" + p__Form__Container)).serializeArray();

    if (l__Data[0].value != "" && l__Data[2].value != "") {

        let l__Film__Index = p__Form__Container.split("commentForm")[1];

        let l__Comment = { "@type": "text", "author": { "@type:": "Person", "name": l__Data[0].value}, "contentRating": {"@type": "Rating", "name": l__Data[1].value }, "name": l__Data[2].value }; 

        lFilteredFilms[l__Film__Index].comment.push(l__Comment);

        document.getElementById(p__Form__Container).reset();

        // NEW
        if (g__Logged__User != undefined) document.getElementById(("inputNickname" + l__Film__Index)).value = g__Logged__User.name;

        NewAlert('info', "Comentario añadido", ' ', false, "Close", false, 1000);

        const lCommentSection = document.getElementById(("scrollviewContent" + l__Film__Index))

        while (lCommentSection.firstChild) {
            lCommentSection.removeChild(lCommentSection.lastChild);
        }

        appendComments(lCommentSection, lFilteredFilms[l__Film__Index].comment, l__Film__Index);
       
    } else {
        NewAlert('error', "Rellene todos los campos", ' ', false, "Close", false, 1000);
    }
}