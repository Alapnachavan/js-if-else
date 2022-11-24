var a=require("readline-sync")
temp=a.questionInt("enter the numbers:- : ")
if (temp>=45){
    console.log("its hot")
}else if (temp>=35){
    console.log(" normal")
}else if (temp>=25){
    console.log("its cool")
}else if (temp>=15){
    console.log("very cold")
}else{
    console.log("snoze")
}