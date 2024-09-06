const pesquisar = () => {
    let campoPesquisa = document.getElementById("pesquisa").value
    
    let htmlInjetado = "";

    campoPesquisa = campoPesquisa.toLocaleLowerCase()

    let sinopse = "";
    let genero = "";
    let titulo = "";

   
    if(!campoPesquisa){
        htmlInjetado = `
             <div class="item-resultado">
                <h2>
                    Upss...Vc não digitou nada!
                </h2>
            </div>
        `

        document.getElementById("resultados-pesquisa").innerHTML = htmlInjetado
        return
        
    }
    for(let dado of dadosFilmes){
        titulo = dado.titulo.toLocaleLowerCase();
        genero = dado.genero.toLocaleLowerCase();
        sinopse = dado.sinopse.toLocaleLowerCase();
        // (campoPesquisa.toLocaleLowerCase() == dado.titulo.toLocaleLowerCase()) (dado.titulo.toLocaleLowerCase().includes(campoPesquisa))
        if(titulo.includes(campoPesquisa) || genero.includes(campoPesquisa) || sinopse.includes(campoPesquisa)){
            htmlInjetado = `
            <div class="item-resultado">
                <h2>
                    <a href="#">${dado.titulo}</a>
                </h2>
                <img src="${dado.poster}" alt="imagem do filme: ${dado.titulo}" width="350" height="500">
                <h3>Gênero: ${dado.genero}</h3>
                <h4>Snopse</h4>
                <p class="descricao-meta">${dado.sinopse}</p>
                <a href="#">Mais informações</a>
            </div>
            `
        }
    }

    if(!htmlInjetado){
        htmlInjetado = 
        `
        <div class="item-resultado">
            <h2>
                Upss...Não temos esse filme no nosso banco de dados!
            </h2>
        </div>
    `
    }
     
    document.getElementById("resultados-pesquisa").innerHTML = htmlInjetado
    document.getElementById("pesquisa").value = ""
}



