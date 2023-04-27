const valueInput=document.querySelector("#number-input");
const firstCurrency=document.querySelector("#first-currency-option");
const secondCurrency=document.querySelector("#second-currency-option");
const resultInput=document.querySelector("#result");
const calculateButton=document.querySelector(".change-btn");

const apiUrl="https://api.freecurrencyapi.com/v1/latest?apikey=tcksGF30ssaC4i16pXNrG8BUXwdRTF6wJXxSZFxO&base_currency=";

calculateButton.addEventListener("click",function(){ 
    exchange();
});

async function exchange(){

    const value=Number( valueInput.value );
    const firstCurrencyOption=firstCurrency.options[firstCurrency.selectedIndex].textContent;
    const secondCurrencyOption=secondCurrency.options[secondCurrency.selectedIndex].textContent;

    const response= await fetch(apiUrl+firstCurrencyOption)
    const result= await response.json();
    const convertedResult=value * result.data[secondCurrencyOption];

    resultInput.value=convertedResult.toFixed(2);
    
}