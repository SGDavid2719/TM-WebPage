function handleSubmit(p__Form__Container) {
    const l__Data = $("#" + p__Form__Container).serializeArray();

    console.log(l__Data);

    if (l__Data[0].value != "" && l__Data[2].value != "") {
        const l__Film__Identifier = p__Form__Container.split("commentForm")[1];

        const l__Comment = {
            "@type": "Comment",
            author: { "@type:": "Person", name: l__Data[0].value },
            contentRating: { "@type": "Rating", name: l__Data[1].value },
            name: l__Data[2].value,
        };

        g__Films
            .filter((film) => film.identifier == l__Film__Identifier)[0]
            .comment.push(l__Comment);

        // Update peliculas.json
        saveCommentChanges(g__Films);

        document.getElementById(p__Form__Container).reset();

        // NEW
        if (g__Logged__User != undefined)
            document.getElementById(
                "inputNickname" + l__Film__Identifier
            ).value = g__Logged__User.name;

        NewAlert(
            "info",
            "Comentario añadido",
            " ",
            false,
            "Close",
            false,
            1000
        );

        const lCommentSection = document.getElementById(
            "scrollviewContent" + l__Film__Identifier
        );

        while (lCommentSection.firstChild) {
            lCommentSection.removeChild(lCommentSection.lastChild);
        }

        appendComments(
            lCommentSection,
            g__Films.filter((film) => film.identifier == l__Film__Identifier)[0]
                .comment,
            l__Film__Identifier
        );
    } else {
        NewAlert(
            "error",
            "Rellene todos los campos",
            " ",
            false,
            "Close",
            false,
            1000
        );
    }
}
