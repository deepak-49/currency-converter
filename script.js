// // https://v6.exchangerate-api.com/v6/9b615320f3677eaba798294a/latest/USD

const inputamount = document.getElementById("inputamount")
const fromcurrency = document.getElementById("from-currency")
const tocurrency = document.getElementById("to-currency")
const convertedresult = document.getElementById("converted-result")
const buttoncontain = document.getElementById("buttoncontain")

buttoncontain.addEventListener("click", () => {
  const amount = parseFloat(inputamount.value)
  const fromvalue = fromcurrency.value;
  const tovalue = tocurrency.value;
  
  if (!amount || isNaN(amount)) {
    alert("please enter a valid amount");
    return;
  }

 fetch(`https://v6.exchangerate-api.com/v6/9b615320f3677eaba798294a/latest/${fromvalue}`)
 
 .then((res)=>res.json())
 .then((data)=>{
  console.log(data)
  const rate=data.conversion_rates[tovalue]
  // console.log(rate[tovalue]);
  const convertedAmount=(rate*amount).toFixed(2);
  // console.log(convertedAmount);
  convertedresult.innerHTML=`<p class="conversion-result" id="converted-result">Converted Amount:<br><span class="amount">${convertedAmount}${tovalue}</span></p>`
})
})
