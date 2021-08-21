// best price add total section

let bInnerText=document.getElementById('best-price').innerText;
document.getElementById('total-price').innerText=bInnerText;
document.getElementById('allTotal').innerText=bInnerText;




// memory price

function input(gb){

  console.log(gb);
  if(gb=='8gb')
  {
    document.getElementById('memory-cost').innerText='0';

  }
  else if(gb==='16gb'){
    document.getElementById('memory-cost').innerText='180';

  }

  totalCalculation();

}



// storage price


function storagePrice(gb){
if(gb=='256gb'){
  document.getElementById('storage-cost').innerText='0';

}
else if(gb=='512gb'){
  document.getElementById('storage-cost').innerText='100';

}
else if(gb=='1tb'){
  document.getElementById('storage-cost').innerText='180';

}

totalCalculation();

}

// delivery cost

function deliveryCost(fee){

  
  if(fee=='free'){
    document.getElementById('delivery-cost').innerText='0';

  }
  else if(fee=='paid')
  {
    document.getElementById('delivery-cost').innerText='20';


  }
totalCalculation();

}



// calculation price section


function totalCalculation(){

  let bestPriceString=document.getElementById('best-price').innerText;
  let bestPriceNumber=parseInt(bestPriceString);
  let memoryPriceString=document.getElementById('memory-cost').innerText;
  let memoryPriceNumber=parseInt(memoryPriceString);
  let storagePriceString=document.getElementById('storage-cost').innerText;
  let storagePriceNumber=parseInt(storagePriceString);
  let deliveryCostString=document.getElementById('delivery-cost').innerText;
  let deliveryCostNumber=parseInt(deliveryCostString);
  
  
  let totalPrice=bestPriceNumber+memoryPriceNumber+storagePriceNumber+deliveryCostNumber;
   
    document.getElementById('total-price').innerText=totalPrice;
  
    document.getElementById('allTotal').innerText=totalPrice;

  
    return totalPrice;

}



// using cupon code

function cupon(){

  let cal=totalCalculation();


  let cuponString=document.getElementById('cuponValue').value;
 

  if(cuponString=='stevekaku'){

    let discountTotal=(cal*20)/100;
    newTotal=cal-discountTotal;
    document.getElementById('allTotal').innerText=newTotal;
    
    document.getElementById('cuponValue').value='';
    document.getElementById('wrong-cupon').innerText='cupon code worked !!';
  }
  else
  {
    document.getElementById('wrong-cupon').innerText='wrong cupon code,, Please try again !!';
    document.getElementById('cuponValue').value='';

  }
 
}


