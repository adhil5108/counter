function counter(){
let count=0;

  return{increment: function (){
    return ++count;
   },
        decrement:function(){
          if(count>0){ 
            return --count;
          }
          else{return 0}
        },
      reset:function(){
       return count=0;
      }
} 

}

const mycounter=counter()

function add(){
    document.getElementById("dis").innerHTML=mycounter.increment()
}
function minus(){
    document.getElementById("dis").innerHTML=mycounter.decrement()
}
function reset(){
    document.getElementById("dis").innerHTML=mycounter.reset()
}   