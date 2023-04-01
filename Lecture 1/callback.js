//Callback
function getData(callback){
    console.log("Before");
    setTimeout(function(){
        const data = {name:'Ameer', age:23};
        callback(data);
    }, 2000);
    console.log("After");
}
//getData is high order function
getData(function(value){
    console.log(value);
});

/*
 * Event Loop (for call Stack checking)
 * Call Stack 
 * Message Queue or Event Queue:
 *  -When stack is completed then MQ is executed. 
 *  -Dequeue from MQ and push to call Stack.
 * JS conference (20-22minutes)
 * Nested Callbacks (callback hell)
 */