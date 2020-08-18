// for
// for(let i=0;i<=5;i++){
//     console.log(i)
// }

var output=''
for (let i=0;i<6;i++){
    for(let j=0;j>i-4;j--){
        output+='-'
    }
    for(let k=0;k<=i;k++){
        output+='*'
    }
    for(let l=0;l<=i-1;l++){
        output+='*'
    }
    for(let m=0;m>i-4;m--){
        output+='-'
    }
    output+='\n'
}
console.log(output)