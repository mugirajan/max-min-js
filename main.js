function myFun(){
    const array=[10,1,2,3,4,5]
    let max=array[0];
    for(let i = 0; i < array.length; i++){
       if(array[i] > max){ 
            
         max = array[i]; 
       }
    }
    console.log(max);
}
myFun()