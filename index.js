module.exports={
  specific: function(args,args2,status = false){
      if(!args) return console.log(new Error("you didn't set a number")); 
        if(!args2) return console.log(new Error("you didn't set a number"));
        number = 0;
        number2 = 0;
        if(status == true){
          number = args.toString().toLowerCase().replace('k', '000').replace('m', '000000').replace(",","").replace(".","")
          number2 =  args2.toString().toLowerCase().replace('k', '000').replace('m', '000000').replace(",","").replace(".","")
         } else {
          number = args
          number2 = args2
         }
         if(isNaN(number) && status == false) return console.log(new Error("need to be a number or try to use <>.specific('amount','interest amount',true)"));
         if(isNaN(number) && status == false) return console.log(new Error("need to be a number or try to use <>.tax('amount',true)"));  
         if(isNaN(number)) return console.log(new Error("please put a vailed number"))
         if(isNaN(number2)) return console.log(new Error("please put a vailed number"))
 const taxnumber = Math.floor(number * (20/19) + 1)
 const wasit = Math.floor(taxnumber * (20/19) + 1);
const taxx = Math.floor((Number(taxnumber) + Number(number2)) * (20) / (19) + (1))
if(taxx) return {
  tax: taxnumber,
  wasit: wasit,
  difference: taxnumber - number,
  With: taxx,
}
  }, 
  tax: function(args,status = false){ 
    if(!args) return console.log(new Error("Number cant be empty"))
    number = 0;
    if(status == true){
     number = args.toString().toLowerCase().replace('k', '000').replace('m', '000000').replace(",","").replace(".","")
    } else {
     number = args
    }
    
    if(isNaN(number) && status == false) return console.log(new Error("need to be a number or try to use <>.tax('amount',true)"));  
    if(isNaN(number)) return console.log(new Error("put a vailed number like: 100k or 1.7m "))
    const taxnumber = Math.floor(number * (20/19) + 1);
    const wasit = Math.floor(taxnumber * (20/19) + 1);
    const obj = {
      tax: taxnumber,
      wasit: wasit,
      difference: taxnumber - number,
    }
    if(taxnumber) return obj;
  }
}

