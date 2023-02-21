function aberto() {

    const btn = document.querySelector(".alert_btn");

    if (btn.style.display === "none") {
        btn.style.display = "flex";
    }

    else if (btn.style.display === "flex") {
        btn.style.display = "none";
    }

    else {
        btn.style.display = "flex";
    }
}