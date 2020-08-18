/*
var x=''
for(i=0;i<5;i++){
    for(j=0;j<=i;j++){
        x+='*'
    }
    x+='\n'
}
console.log(x)
*/

/*
var x=''
for(i=0;i<5;i++){
    for(j=i;j<5;j++){
        x+='*'
    }
    x+='\n'
}
console.log(x)
*/


console.log('  *\n **+\n***++')


var output=''
for(i=0;i<3;i++){

    for(let j=i;j<2;j++){
        output+=' '
    }
    for(let k=0;k<=i;k++){
        output+='*'
    }
    for(let h=1;h<=i;h++){
        output+='^'
    }
    output+='\n'
}

console.log(output)