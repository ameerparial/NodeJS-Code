/**
 * callback
 * Usage:
 * -Asynchronous Programming
 * -Event Handling
 * -Timers
 */

/* Callback approaches
function getData(callback){
    console.log("Before");
    setTimeout(function(){
        const data = {name:'Ameer', age:23};
        callback(data);
    }, 0);
    console.log("After");
}

//getData is high order function
getData(function(value){
    console.log(value);
});

*/

/*
 * Event Loop (for call Stack checking)
 * Call Stack 
 * Message Queue or Event Queue:
 *  -When stack is completed then MQ is executed. 
 *  -Dequeue from MQ and push to call Stack.
 * JS conference (20-22minutes)
 * Nested Callbacks (callback hell)
 */

// Promises
/**
 * Three States
 * Pending
 * Resolved
 * Failed/Rejected
 */

function getData(){
    return new Promise((resolve, reject)=>{
        const data = JSON.stringify({name:'Ameer', age:23});
        if(!data){
           return reject("Data kathy aa?");
        }
        resolve(data);      
    });
}

//chain of then is increased.
getData().then(res =>JSON.parse(res)).then(data => console.log(data)).catch(rej =>console.log(rej));

//Chaining solution
//IIF
(async function(){
    try{
        const data = await getData();
        console.log(JSON.parse(data));
    }catch(err){
        console.log(err);
    }
})();
