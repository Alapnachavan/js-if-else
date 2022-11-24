Balance="20000"
console.log("*********WELCOME**********")
console.log("*****ATM******")
const readlinesync= require("readline-sync")
var ATM_CARD=readlinesync.question("ENTER THE ATM CARD")
if (ATM_CARD=="debit card"){
    var language =readlinesync.question("enter your language")
    if (language=="hindi", "marathi", "english"){
        var account=readlinesync.question("enter the account")
        if (account=="saving","current"){
            var pin_code=readlinesync.question("enter your code")
                if (pin_code>=1 || pin_code<=9){
                    var amount_cash=readlinesync.questionInt("enter the amount of cash")
                    if (amount_cash>0 && amount_cash<=20000){
                        console.log(amount_cash,"withdraw money")
                        console.log(20000-amount_cash,"remaining money in ATM")
                    } else{
                        console.log(amount_cash,"This amount is not your account")
                    }
                } else {
                    console.log("This is not your pin code")
                }
            } else {
                console.log("This is  not proper account name")
            }
        } else {
            console.log("incorrect language")
        }
} else{
    console.log("This is not ATM card")
}



    