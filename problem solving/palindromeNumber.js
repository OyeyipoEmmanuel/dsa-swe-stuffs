const x = 121
let y = []
for(let i = 0; i < x.toString().length; i++){
    y[i] = x.toString()[i]
}

y.reverse()

let c = '';
for(let k = 0; k < y.length; k++){
    c += y[k]
}
let cToNum = Number(c)

if(x === cToNum){
    console.log(true)
}else{
    console.log(false)
}


