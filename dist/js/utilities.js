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
        if (result.isConfirmed) { }
    });
}