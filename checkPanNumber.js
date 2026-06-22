
let panNumber = 'ABCDE1234F'

let regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/  //regex For 12 checking 12 number digit

let isPanNumberInCorrectFormat= regex.test(panNumber)

console.log(isPanNumberInCorrectFormat)

//++++++++++++++++++++++++++++++++++++++++++++

let panNumber2 = 'ABCDE1234F'

if(panNumber2.length !==10){
    console.log('Invalid PAN number format')
}

for(let i=0 ; i<5; i++){
    if(panNumber2[i]>='A'&& panNumber2[i]<='Z'){
        console.log('Valid PAN number format')
    }else{
        console.log('Invalid PAN number format')
    }   

}
for(let i=5 ; i<9; i++){
    if(panNumber2[i]>='0'&& panNumber2[i]<='9'){
        console.log('Valid PAN number format')
    }else{
        console.log('Invalid PAN number format')
    }
}
if(panNumber2[9]>='A'&& panNumber2[9]<='Z'){
    console.log('Valid PAN number format')
}else{
    console.log('Invalid PAN number format')
}       