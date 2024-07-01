const alterarQtd = (produto, acao)=>{
    const qtd = document.getElementById(`qtd_${produto}`);
    const valor = document.getElementById(`valor_${produto}`);
    const total = document.getElementById(`total_${produto}`);
    
    if(acao == "+"){
        qtd.innerHTML = Number(somenteNumeros(qtd.innerHTML)) + 1;
    }else if(acao =='-'){
        if(Number(somenteNumeros(qtd.innerHTML)) > 0){
            qtd.innerHTML = Number(somenteNumeros(qtd.innerHTML)) - 1;
        }
    }
    total.innerHTML = formatarValor(Number(somenteNumeros(valor.innerHTML)) * Number(somenteNumeros(qtd.innerHTML)));
    subtotal();
    
    
}

const subtotal = ()=>{
    let soma = 0;
    for(let i = 1; i < 4;i++){
        soma += Number(somenteNumeros(document.getElementById(`total_${i}`).innerHTML))
    }
    document.getElementById("subtotal").innerHTML = formatarValor(soma);
}

const adicionar = (produto)=>{
    alterarQtd(produto, '+')
}

const subtrair = (produto)=>{
    alterarQtd(produto, '-')
}

const somenteNumeros = (n)=>{
    return n.replace(/\D/g,'');
}

const formatarValor = (n)=>{
    return "R$ " + n.toLocaleString('pt-Br')
}