let str='AAshhsysus'
let mapping=[]

for(let ch of str){
    if(mapping.length!=0 && mapping[mapping.length-1]===ch){
        mapping.pop()
    }else{
        mapping.push(ch)
    }

}

console.log(mapping.join(''))