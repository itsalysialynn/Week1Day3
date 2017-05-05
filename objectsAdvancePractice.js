var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

var result = {};

function calculateSales(companySalesData) {
  var totalsales = 0;
  var totaltax = 0;

  for (var i = 0; i < companySalesData.sales.length; i++) {
    totalSales += companySalesData.sales[i];
  }

  switch(companySalesData[i].province) {
    case "AB":
      totalSalesTax = totalSales * salesTaxRates.AB;
      break;

    case "BC":
      totalSalesTax = totalSales * salesTaxRates.BC;
      break;

    case "SK":
      totalSales = totalSales * salesTaxRates.SK;
  }
  
  if (result.hasOwnProperty(companySalesData.name)) {
    result[companySalesData.name].totalSales += totalSales
    result[companySalesData.name].totalSalesTax += totalSalesTax
  } else {
    result[companySalesData.name] = = {'totalSales': totalSales, 'totalSalesTax': totalSalesTax}
  }
}

for (i = 0; i < companySalesData.length; i++) {
 calculateSales(companySalesData[i]);
};


 












// function calculateSales(index) {

//   var sum = 0;
//   for (var i = 0; i < companySalesData[index].sales.length; i++) {
//     sum += companySalesData[index].sales[i];
//    } //first for bracket
// return sum; 
// } 

// console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
