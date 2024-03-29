module.exports = {
  specific: function (args, args2, status = false) {
    if (!args || !args2) {
      throw new Error("Please provide two numbers");
    }

    let number = 0;
    let number2 = 0;

    if (status) {
      number = convertToNumber(args);
      number2 = convertToNumber(args2);
    } else {
      number = args;
      number2 = args2;
    }

    if (isNaN(number) || isNaN(number2)) {
      throw new Error("Please provide valid numbers");
    }

    
    const taxnumber = calculateTax(number);
    const wasit = calculateTax(taxnumber);
    const taxx = calculateTax(number + number2);

    return {
      tax: taxnumber,
      wasit: wasit,
      difference: taxnumber - number,
      With: taxx,
    };
  },

  tax: function (args, status = false) {
    if (!args) {
      throw new Error("Please provide a number");
    }

    let number = 0;

    if (status) {
      number = convertToNumber(args);
    } else {
      number = args;
    }

    if (isNaN(number)) {
      throw new Error("Please provide a valid number (e.g., 100k or 1.7m)");
    }

    const taxnumber = calculateTax(number);
    const wasit = calculateTax(taxnumber);

    return {
      tax: taxnumber,
      wasit: wasit,
      difference: taxnumber - number,
    };
  },
};

function convertToNumber(value) {
  const suffixes = {
    k: 1e3,
    m: 1e6,
  };

  const match = value.match(/^([\d.]+)([km])?$/i);
  if (!match) {
    throw new Error("Invalid number format");
  }

  const number = parseFloat(match[1]);
  const suffix = match[2];

  if (suffix && suffixes.hasOwnProperty(suffix.toLowerCase())) {
    return number * suffixes[suffix.toLowerCase()];
  }

  return number;
}

function calculateTax(amount) {
  return Math.floor(amount * (20 / 19) + 1);
}
