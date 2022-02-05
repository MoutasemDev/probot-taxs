const tax = require("./index")


console.log(tax.specific("70k","5000",true))// without true will give a erorr or type 700000
const result = tax.tax("1.7m",true)//without true will give a erorr or type 1700000
if(result){
    console.log(result)
}
/*
result: {
tax: 17894737,
wasit: 18836566,
difference: 894737 
}
*/
