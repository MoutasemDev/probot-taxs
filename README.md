 # welcome to probot-taxs package
 
 **What can I do?**

count probot tax or tax with a middleman(wasit) or with interest for the middleman
## Getting Started
### Installation

To use Probot tax in your project, run:
```js
npm i probot-taxs
```
### exapmle Usage
```js
const Discord = require('discord.js');
const client = new Discord.Client();

const tax = require('probot-taxs');

client.on("message",message=>{
  if(message.content.startsWith("tax")){
    let amount = message.content.split(" ").slice(1).join(" ");
    if(!amount) return message.channel.send("amount cant be empty")
    let taxs = tax.tax(amount,true) // true will accept amount like this 1.7m or 100k
    //when you will a interest for the middleman(wasit) use tax.specific(amount,interest) und then the middleman transfer taxs.wasit
    if(!taxs)return message.channel.send("put a vailed number")
    var embed=new Discord.MessageEmbed()
    .setTitle("Probot tax")
    .addField("**with  tax**",`**${taxs.tax}**`)
    .addField("** tax with wasit**",`**${taxs.wasit}**`)
    .addField("** tax differnt**",`**${taxs.difference}**`)
    message.channel.send(embed);
  }});
```

# interest for the middleman

```js
const tax = require('probot-taxs');

tax.specific(amount,interest,true)//true will accept amount like this 1.7m or 100k
/*
console.log(tax.specific("70k","5000",true))
-> output

{ 
  tax: 73685,
 wasit: 77564,
 difference: 3685,
  With: 82827 
  }
*/
```
