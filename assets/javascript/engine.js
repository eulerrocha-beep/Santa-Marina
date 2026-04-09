const state = {
    sanduiche: {
        menu: document.getElementById("menu"),
        btn: document.getElementById("menu-btn"),
    }
}




    state.sanduiche.btn.addEventListener("click", () => {
    state.sanduiche.menu.classList.toggle("ativo");
});