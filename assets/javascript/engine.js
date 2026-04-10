document.addEventListener("DOMContentLoaded", () => {
    // so vai executar quando o html estiver carregado
    const state = {
        sanduiche: {
            menu: document.getElementById("menu"),
            btn: document.getElementById("menu-btn"),
        }
    };

    //  Menu hambúrguer com proteção
    if (state.sanduiche.btn && state.sanduiche.menu) { // verifica se os elementos existem antes de usar
        state.sanduiche.btn.addEventListener("click", () => {
            state.sanduiche.menu.classList.toggle("ativo");  // quando clica remove ou add a classe ativo
        });
    }

    // ✅ Filtro
    const botoes = document.querySelector(".filtros");
    const produtos = document.querySelectorAll(".produto");

    if (!botoes) return;

    botoes.addEventListener("click", (e) => {
        const botao = e.target.closest("button");
        if (!botao) return;

        const filtro = botao.dataset.filtro;

        filtrarProdutos(filtro);
        atualizarBotaoAtivo(botao);
    });

    function filtrarProdutos(categoria) {
        produtos.forEach(produto => {
            const categoriaProduto = produto.dataset.categoria;

            const mostrar =
                categoria === "todos" || categoria === categoriaProduto;

            produto.classList.toggle("hidden", !mostrar);
        });
    }

    function atualizarBotaoAtivo(botaoAtivo) {
        document.querySelectorAll(".filtros button").forEach(btn => {
            btn.classList.remove("ativo");
        });

        botaoAtivo.classList.add("ativo");
    }

});