
function selectItem(price,id){
  let cardContainer = document.getElementById(id);
  let cardPrice = document.getElementById("price-"+id);
  let orderCardPrice = document.getElementById("price-"+id);
  let marmitaCounterValue = document.getElementById("counter-"+id);
      
  cardContainer.classList.toggle("selected");
  cardPrice.classList.toggle("selected");

  let btnCart = document.getElementById("btn-marmita-cart-text-"+ id);
  btnCart.innerHTML = "Adicionar ao carrinho"

    if(cardContainer.classList.contains("selected")){
      let btnCart = document.getElementById("btn-marmita-cart-text-"+ id);
      btnCart.innerHTML = "Remover do carrinho"
    }else{
      let ValueFormatado = price.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
      });
      orderCardPrice.innerHTML = "R$ " + ValueFormatado + ",00";
      marmitaCounterValue.innerHTML = '01'
    }
}


function totalValue(){
  
  let amount = document.getElementsByClassName("order-card-price selected");
  let orderSelected = document.getElementById("amount-selected");
  
  let somar = 0;
  let somar1 = 0;
  let amountSelected = document.getElementById("amount-selected-total");
  
  if(amount.length == 0){amountSelected.innerHTML = 'R$ 0,00', orderSelected.innerHTML = 0 }

  for(let i=0; i < amount.length; i++) {
    amount1 = amount[i].innerHTML;
    let replace = String(amount1).replace(/\D/g, "");
    let divisao = Number(replace) / 100;
    somar = somar + divisao;
    somar1 =  i;

    let ValueFormatado = somar.toLocaleString("pt-br", {
             style: "currency",
             currency: "BRL"
           });
    amountSelected.innerHTML = ValueFormatado;
    orderSelected.innerHTML = somar1;
    
  }

}

//   let amount = document.getElementsByClassName("order-card-price selected")[0].innerHTML;
//   let replace = String(amount).replace(/\D/g, "");
//   let divisao = Number(replace) / 100;
  

//   let amountSelected = document.getElementById("amount-selected-total");
//   let replace2 = String(amountSelected).replace(/\D/g, "");
//   let divisao2 = Number(replace2) / 100;
 
//  console.log(divisao2);
  
//   if(divisao2 === 0){
//   total = divisao + divisao2;
//   amountSelected.innerHTML =  total;
//   console.log("igual a zero " )

//   }else{

//     console.log("diferente de zero")
//     //amountSelected.innerHTML = total;
//   }
//   // for(let i=0; i < amount.length; i++) {
//   //   let amountSelected = document.getElementsByClassName("amount-selected")[0];
//   //   let inteiro = amountSelected.innerHTML;
//   //   inteiro = Number(inteiro) / 100;
//   //   resultado = 0;
//   //   let total = amount[i].innerHTML;
//   //   let replace = String(total).replace(/\D/g, "");
//   //   let divisao = Number(replace) / 100;
//   //   resultado = inteiro + divisao;
//   }

//   //amountSelected.innerHTML = resultado;
  


//   //Coletar o preço do Valor total - class amount-selected

//   //somar o price-id + class






function somar(price,id){
  let btnPlus = document.getElementById("counter-" + id).innerHTML;
  let inteiro1 = parseInt(btnPlus);

  inteiro1 ++;
  console.log(inteiro1);
     let sum = inteiro1 * price;
     let ValueFormatado = sum.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    })

    let total = document.getElementById("price-" + id);
        total.innerHTML = ValueFormatado;
  }

  function subtrair(price,id){
    let counter = document.getElementById("counter-" + id).innerHTML;
    counter = parseInt(counter);

    let total = document.getElementById("price-" + id).innerHTML;
    let replace = String(total).replace(/\D/g, "");
    let divisao = Number(replace) / 100
    
    if(divisao > price){
    let sbtr = divisao - price;

    let ValueFormatado = sbtr.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL"
    })

    total = document.getElementById("price-" + id);
        total.innerHTML = ValueFormatado;
      }
  }
  
  
    
 
    

    // if(inteiro1 === 2){
    //   var valor = document.getElementById("price-" + id).innerHTML;
    //   var replace = String(valor).replace(/\D/g, "");
    //   var divisao = replace / 100;
    // }else{console.log(divisao)};
  
  //console.log(divisao);
    //const valor = document.getElementById("price-" + id).innerHTML;
    //const replace = String(valor).replace(/\D/g, "");
    //const divisao = replace / 100;

    //let btnPlus = document.getElementById("counter-" + id).innerHTML;
    //let inteiro1 = parseInt(btnPlus);

function increment(id) {

    let btnPlus = document.getElementById("counter-" + id).innerHTML;
    let inteiro = parseInt(btnPlus)
    let soma =  inteiro + 1;
    var str = soma.toString()
    if(soma <= 9){
        var str = soma.toString()
        str = 0 + str
      }
    
    let btnPlus1 = document.getElementById(`counter-${id}`)
    btnPlus1.innerHTML = str;
  }

function decrement(id) {
    let btnPlus = document.getElementById("counter-" + id).innerHTML;
    let inteiro = parseInt(btnPlus)
    
    if(inteiro > 1){
    let subtracao =  inteiro - 1;
    var str = subtracao.toString()
    if(subtracao <= 9){
      var str = subtracao.toString()
      str = 0 + str
    }
    
    let btnPlus1 = document.getElementById("counter-" + id)
    btnPlus1.innerHTML = str;
    }
    
  }



function sum(id, preco){

    // let btnPlus = document.getElementById("counter-" + id).innerHTML;
    // let inteiro1 = parseInt(btnPlus);
    console.log(id);
    console.log(preco);

    // if(inteiro1 === 2){
    //   var valor = document.getElementById("price-" + id).innerHTML;
    //   var replace = String(valor).replace(/\D/g, "");
    //   var divisao = replace / 100;
    // }else{console.log(divisao)};
  
  //console.log(divisao);
    //const valor = document.getElementById("price-" + id).innerHTML;
    //const replace = String(valor).replace(/\D/g, "");
    //const divisao = replace / 100;

    //let btnPlus = document.getElementById("counter-" + id).innerHTML;
    //let inteiro1 = parseInt(btnPlus);

    // let somar = inteiro1 * divisao;
    
    // let ValueFormatado = somar.toLocaleString("pt-br", {
    //   style: "currency",
    //   currency: "BRL"
    // })
    
    // const total = document.getElementById("price-" + id);
    // total.innerHTML = ValueFormatado;
    
  }
  
  
  

function subtract(){
    const valor = document.getElementsByClassName("order-card-price selected")[0].innerHTML;
    const replace = String(valor).replace(/\D/g, "");
    const divisao = Number(replace) / 100
    
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

            //pegar o card com o mesmo ID recebido e inserir a class selected
            document.getElementById(id).classList.toggle('selected')

            const preco = document.getElementById(`price-${id}`).innerHTML;
            
            //insere class selected no order card price
            const preco1 = document.getElementById(`price-${id}`)
            preco1.classList.toggle('selected')

            /*let ValueFormatado = replace1.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL"
              });
*/
            const total = document.getElementById('btn-span-total');
            total.innerHTML = preco;

            //preencher o modal com as informações do card
            
            //inserir title do card no modal
            const titleCard = document.getElementById(`title-${id}`).innerHTML;
            const modalTitle = document.getElementsByClassName('order-card-title-modal')[0];
            modalTitle.id = id;
            modalTitle.innerHTML = titleCard;

            //inserir a imagem do card no modal
            const imgCard = document.getElementById(`img-${id}`).src;
            const imgModal = document.getElementsByClassName('image-modal')[0];
            imgModal.src = imgCard;
}

function closeModal(){
    document.querySelector('.modal-overlay')
            .classList.toggle('active')
}




function saveOrder(){
  //dados do modal para array
  const modalTitle = document.getElementsByClassName('order-card-title-modal')[0].innerHTML;
  
  // Pega a lista já cadastrada, se não houver vira um array vazio
  var listOrders = JSON.parse(localStorage.getItem('listOrders') || '[]');

  listOrders.push(modalTitle);

  localStorage.setItem('listOrders', JSON.stringify(listOrders))

  console.log(modalTitle);

}


function addProduct(){
    const title = document.getElementsByClassName('order-card-title-modal')[0].innerHTML;
    const total = document.getElementById('btn-span-total').innerHTML;
    var teste = {
      title,
      total
    }
    //console.log(teste)
    
}




    

    


