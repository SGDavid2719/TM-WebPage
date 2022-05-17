/**
 *  Sweetalert alert pane.
 * 
 *  @example
 *  NewAlert();
 *  @param {string} p_Icon - icon to show
 *  @param {string} p_Title - title to show
 *  @param {string} p_HTML - html to show
 *  @param {string} p_ShowConfirmButton - true shows confirm button
 *  @param {string} p_Confirm_Text - confirm text
 *  @param {boolean} p_ShowConfirmButton - true close confirm button
 *  @param {number} [p_Timer] - time out
 */
 function NewAlert(p_Icon, p_Title, p_HTML, p_ShowConfirmButton, p_Confirm_Text, p_ShowCloseButton, p_Timer) {
    Swal.fire({
        icon: p_Icon,
        title: p_Title,
        html: p_HTML,
        showConfirmButton: p_ShowConfirmButton,
        confirmButtonText: p_Confirm_Text,
        showCloseButton: p_ShowCloseButton,
        timer: p_Timer,
        allowOutsideClick: false,
        allowEscapeKey: false,
    }).then((result) => {
        if (result.isConfirmed) {
            handleDeleteComment(deleteCommentFilmIdentifier, deleteCommentIndex);
            const lCommentSection = document.getElementById(("scrollviewContent" + deleteCommentFilmIdentifier))

            while (lCommentSection.firstChild) {
                lCommentSection.removeChild(lCommentSection.lastChild);
            }

            appendComments(lCommentSection, g__Films.filter(film => film.identifier == deleteCommentFilmIdentifier)[0].comment, deleteCommentFilmIdentifier);
        } else {
            deleteCommentFilmIdentifier = undefined;
            deleteCommentIndex = undefined;
        }
    });
}