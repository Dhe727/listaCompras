let itens = [];

document.querySelector('input[type="submit"]')
.addEventListener('click',()=>{
    

    let nomeProduto = document.querySelector('input[name="Nome_produto"]');
    let ValorProduto = document.querySelector('input[name="Valor_Produto"]');
    let quantProduto = document.querySelector('input[name="quant_produto"]');
    let somaProduto = document.querySelector('.somaProduto');
     
itens.push({
    nome: nomeProduto.value,
    quant: quantProduto.value,
    valor: ValorProduto.value
})
    //alert("Produto:" + itens[0].nome +  " Valor:" + itens[0].valor);

    let listaProdutos = document.querySelector('.lista-produtos');
    let somatorio = 0;
    let valorSoma = 0;
    listaProdutos.innerHTML = "";
    itens.map((val)=>{
        if(val.quant == "") {
            val.quant = 1;
        }
        valorSoma = val.quant * val.valor;
        somatorio += parseFloat(valorSoma);
        listaProdutos.innerHTML+= `
        <div class="lista-produtos-single">
            <h3>${val.nome}</h3>
            <h3>${val.quant}</h3>
            
            <h3 class="valor"> <span>R$${valorSoma}</span> </h3>
      
        </div>
        `
    })
    somatorio = somatorio.toFixed(2);
    somaProduto.innerHTML =`
    <h1>Total: R$ ${somatorio}</h1>
    `;
    nomeProduto.value = "";
    ValorProduto.value = "";
    quantProduto.value = "";
});

    



