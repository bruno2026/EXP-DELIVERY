function increment() {
    let btnPlus = document.getElementById('marmita-counter-value').innerHTML;
    let inteiro = parseInt(btnPlus)
    let soma =  inteiro + 1;
    let str = soma.toString()
    
    let btnPlus1 = document.getElementById('marmita-counter-value')
    btnPlus1.innerHTML = str;
  }

function decrement() {
    let btnPlus = document.getElementById('marmita-counter-value').innerHTML;
    let inteiro = parseInt(btnPlus)
    
    if(inteiro > 1){
    let subtracao =  inteiro - 1;
    let str = subtracao.toString()
    
    let btnPlus1 = document.getElementById('marmita-counter-value')
    btnPlus1.innerHTML = str;
    }
    
  }

function somar(){
    const valor = document.getElementsByClassName("order-card-price selected")[0].innerHTML;
    const replace = String(valor).replace(/\D/g, "");
    //const divisao = Number(replace) / 100

    console.log(replace)

    let btnPlus = document.getElementById('marmita-counter-value').innerHTML;
    let inteiro = parseInt(btnPlus)
    let somar = inteiro * replace
    
    let ValueFormatado = somar.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    })
    
    const total = document.getElementById('btn-span-total')
    total.innerHTML = ValueFormatado
  }

function subtract(){
    const valor = document.getElementsByClassName("order-card-price selected")[0].innerHTML;
    const replace = String(valor).replace(/\D/g, "");
    const divisao = Number(replace)
    
    const valor1 = document.getElementById('btn-span-total').innerHTML;
    const replace1 = String(valor1).replace(/\D/g, "");
    const divisao1 = Number(replace1) / 100
    
    if(divisao1 > divisao){
    let subtrair = divisao1 - divisao
    
    let ValueFormatado = subtrair.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    })
    
    const total = document.getElementById('btn-span-total')
    total.innerHTML = ValueFormatado
   }
  }

function limite_textarea(valor) {
    quant = 0;
    total = valor.length;
    
    if(total > quant & total <= 140){     
      resto = total + quant
      restoSTR = String(resto)
      document.getElementById('coment-count').innerHTML = restoSTR + " / 140";
      console.log(resto)
    } else {
      document.getElementById('coment-count').innerHTML = 0 + " / 140";
    }
 }

function openModal(id) {
        // Abrir modal
        // Adicionar a class active ao modal
        document.querySelector('.modal-overlay')
            .classList.toggle('active')

        
            document.getElementById(id).classList.toggle('selected')

            const preco = document.getElementById(`price-${id}`).innerHTML;
            const replace = String(preco).replace(/\D/g, "");
            const replace1 = Number(replace)
            const preco1 = document.getElementById(`price-${id}`)
            preco1.classList.toggle('selected')



            let ValueFormatado = replace1.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL"
              })

            console.log(replace)

            const total = document.getElementById('btn-span-total')
            total.innerHTML = ValueFormatado

}

    
    



    

    


