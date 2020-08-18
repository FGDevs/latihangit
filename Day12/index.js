/* Advanced Loop */
/*
// 1. .forEach
for(i=0=i<arr.length;i++){

}
arr.forEach((val,index) => {
    
});
    // 1a. for in
    var obj = { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, stock : 9}

    for (const props in obj){
        console.log('propertiynya '+props+' '+obj[props])
    }   
*/
// 2. .map
var arrProduct = [
    { id: 1579581080923,category: 'Fast Food' , name: "Noodle", price: 3500, stock : 9},
    { id: 1579581081130,category: 'Electronic' , name: "Headphone", price: 4300000, stock :8 },
    { id: 1579581081342,category: 'Cloth' , name: "Hoodie", price: 300000, stock :7 },
    { id: 1579581081577,category: 'Fruit' , name: "Apple", price: 10000, stock :8 }
  ];

const bubblesort=(array=[],props)=>{
    for (let i=array.length;i>0;i--){
        for(let j=0;j<i;j++){
            if(array[j][props]>array[j+1][props]){
                const temp=array[j]
                array [j]=array [j+1]
                array [j+1]=temp
            }
        }
    }
    return array
}
/*
var outputProd=arrProduct.map((val)=>{
    return (
        ` <tr>
            <td>${val.id}</td>
            <td>${val.category}</td>
            <td>${val.name}</td>
            <td>${val.price}</td>
            <td>${val.stock}</td>
        </tr>`
    )
})

console.log(outputProd)

// 3. .filter
var list=['1','2'].filter((val)=>{
    return val%2==1
})

console.log(list)

    //filter ala
    function filteralalala(arr=['1','2'],cb){
        var output=[]
        for(let i=0;i<arr.length;i++){
            if(cb(arr[i],i)){
                output.push(arr[i])
            }
        }
        return output
    }
*/
// 4. .method

