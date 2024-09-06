function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    // Obtém o valor digitado no campo de pesquisa
    let termoPesquisa = document.querySelector('input[type="text"]').value.toLowerCase();

    // Filtra os dados com base no termo de pesquisa
    let resultados = dados.filter(dado => 
        dado.titulo.toLowerCase().includes(termoPesquisa) ||
        dado.descricao.toLowerCase().includes(termoPesquisa)
    );

    // Inicializa uma string vazia para armazenar os resultados filtrados
    let resultadosFinais = "";

    // Itera sobre cada dado filtrado e cria o HTML para exibição
    for (let dado of resultados) {
        resultadosFinais += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultadosFinais;
}
