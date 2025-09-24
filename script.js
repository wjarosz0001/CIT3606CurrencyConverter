// Add your currency exchange rate here
const exchangeRates = {
    "USD": {
      "USD": 1,
      "KRW": 1392.27,
      // Add more "to" currencies and rates as needed
    },
    "EUR": {
      "USD": 1.07,
      "KRW": 1639.69,
      // Add more "to" currencies and rates as needed
    },

    // Add more "from" currencies as needed
    "KRW": {
      "USD": 0.00072,
      "EUR": 0.00061,
    
    }
  };



  const convert = () => {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const fromAmount = document.getElementById("fromAmount").value;

    const exchangeRate = exchangeRates[fromCurrency][toCurrency];
    const toAmount = fromAmount * exchangeRate;
    document.getElementById("toAmount").value = toAmount;
  }