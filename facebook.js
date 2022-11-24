console.log("**WELCOME TO FACEBOOK**")
const readlinesync= require("readline-sync")
var name=readlinesync.question("ENTER THE name:")
if (name=="a" || "z"){
    var birth =readlinesync.question("enter the date of birthdate:")
    if (birth>="1 to 9"){
        var number=readlinesync.question("enter your phone  ")
        if (number=="1" || "9"){
            var gender=readlinesync.question("enter the gender")
                if (gender=="male" || "female"){
                    var password=readlinesync.questionInt("enter the password")
                    if (password=="0" && "9" || "A" && "Z"){
                        var otp=readlinesync.questionInt("enter the otp")
                        if (otp>=0 &&  6){
                            var login=readlinesync.questionInt("enter the password:")
                            if (login=="1234")
                            console.log("your facebook account is done")
                        }else{
                            console.log("your pasword is not valid")

                        }
                    } else{
                        console.log("invalid otp")
                    }
                } else {
                    console.log("something wrong")
                }
            } else {
                console.log("nothing")
            }
        } else {
            console.log("your phone number is not valid")
        }
} else{
    console.log("your birthdate not valid")
}
