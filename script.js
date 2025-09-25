// Add your currency exchange rate here
const exchangeRates = {
    "USD": {
      "USD": 1,
      "EUR": 0.93,
      "JPY": 147.40,
      "KRW": 1392.27,
      "RUP": 16583.00,
      // Add more "to" currencies and rates as needed
    },
    
    "EUR": {
      "USD": 1.07,

      "JPY": 0.0057,
      "KRW": 1639.69,
      "RUP": 17824.00,

      // Add more "to" currencies and rates as needed
    },
    "JPY": {
      "USD": 147.40,
      "EUR": 0.0057,
    }
    // Add more "from" currencies as needed

    "RUP": {
      "USD": 0.000060,
      "EUR": 0.000056,
      "KRW": 0.088,
      "RUP": 1,
      // Add more "to" currencies and rates as needed
    },

    "KRW": {
      "USD": 0.00072,
      "EUR": 0.00061,
      "RUP": 0.011,
      "KRW": 1,
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