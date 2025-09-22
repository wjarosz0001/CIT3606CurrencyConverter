// Add your currency exchange rate here
const exchangeRates = {
    "USD": {
      "USD": 1,
      "EUR": 0.93,
      "SK": 9.35,
      // Add more "to" currencies and rates as needed
    },
    "EUR": {
      "USD": 1.07,
      "EUR": 1,
      "SK": 11.04,
      // Add more "to" currencies and rates as needed
    },

    // Add more "from" currencies as needed
  };


  const convert = () => {
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const fromAmount = document.getElementById("fromAmount").value;

    const exchangeRate = exchangeRates[fromCurrency][toCurrency];
    const toAmount = fromAmount * exchangeRate;
    document.getElementById("toAmount").value = toAmount;
  }