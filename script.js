// Add your currency exchange rate here
const exchangeRates = {
    "USD": {
      "USD": 1,
      // Add more "to" currencies and rates as needed
    },
    "EUR": {
      "USD": 1.07,
      // Add more "to" currencies and rates as needed
    },

    // Add more "from" currencies as needed
    "RUP": {
      "USD": 0.000060,
      // Add more "to" currencies and rates as needed
    },
    "USD": {
      "RUP": 16583.00,
      // Add more "to" currencies and rates as needed
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