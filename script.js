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
  // console.log(data)
  const rate=data.conversion_rates[tovalue]
  // console.log(rate[tovalue]);
  const convertedAmount=(rate*amount).toFixed(2);
  // console.log(convertedAmount);
  convertedresult.innerHTML=`<p class="conversion-result" id="converted-result">Converted Amount:<br><span class="amount">${convertedAmount}${tovalue}</span></p>`
})

})

script.js
const chatBox = document.getElementById('chatBox');
const input = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener('click', sendMessage);

async function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  const myLang = document.getElementById('myLang').value;
  const friendLang = document.getElementById('friendLang').value;

  // Add my message
  addMessage(text, 'sent');

  // Translate to friend's language
  const translated = await translateText(text, myLang, friendLang);

  // Add translated as received (simulate friend's view)
  addMessage(translated, 'received');

  input.value = '';
}

function addMessage(text, type) {
  const msg = document.createElement('div');
  msg.className = `message ${type}`;
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function translateText(text, fromLang, toLang) {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromLang}|${toLang}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.responseData.translatedText;
}

async function translateText(text, fromLang, toLang) {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromLang}|${toLang}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.responseData.translatedText;
}








