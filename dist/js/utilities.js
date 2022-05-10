/**
 *  Sweetalert alert pane.
 * 
 *  @example
 *  NewAlert();
 *  @param {string} p_Icon - icon to show
 *  @param {string} p_Title - icon to show
 *  @param {string} p_HTML - icon to show
 *  @param {string} p_ShowConfirmButton - icon to show
 *  @param {string} p_Confirm_Text - icon to show
 *  @param {boolean} p_ShowConfirmButton - icon to show
 *  @param {string} p_Confirm_Text - icon to show
 *  @param {boolean} p_ShowCloseButton - icon to show
 *  @param {number} [p_Timer] - icon to show
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
            // NEW
            console.log("Comentario borrado")
        }
    });
}