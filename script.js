
const result = document.getElementById("result");

    result.onclick = async function () {
      const from = document.getElementById("from").value;
      const Amount = document.getElementById("input").value;
      const to = document.getElementById("to").value;

      const URL = `https://2024-03-06.currency-api.pages.dev/v1/currencies/${from}.json`;

      try {
        const response = await fetch(URL);
        const data = await response.json();
  
        const info=data[from][to]*Amount;
        console.log(info);
         
        const convert =document.getElementById('convert')
        convert.innerHTML=`${Amount} ${from.toUpperCase()} = ${info.toFixed(2)} ${to.toUpperCase()}`
        
        document.getElementById("input").value = "";

      } catch (error) {
          console.error("Error fetching exchange rate:", error);
      }

      console.log(Amount);      
    };
