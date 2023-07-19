function pushToFront(array,val){
    for(var i=array.length; i>=0;i--){
       array[i]=array[i-1];
    }
    array[0]=val;
    return array;
}


console.log(pushToFront([2,3,50],1));

function popFront(array){
    var firstVal=array[0];
    for(var i=0; i<array.length;i++){
        array[i]=array[i+1];
    }
    array.length=array.length-1;
    console.log(array);
    return firstVal;
}

console.log(popFront([1,2,3,4]));

function inserAt(array, index, val){
    for(i=array.length; i>=index; i--){
        array[i]=array[i-1];
    }
    array[index]=val;
    return array;
}

console.log(inserAt([1,2,3,4],2,66))

function removeAt(array,index){
    var val= array[index];
    for(var i=index; i<array.length-1;i++){
        array[i]=array[i+1];
    }
    array.length=array.length-1;
    console.log(array);
    return val;
}

console.log(removeAt([1,2,3,4],2));