// function callMe(){
//     return 1;
// }
// console.log(callMe());

// async function callMe2(){
//     return 1;
// }

// //A function with async returns the promise. (Async wrap the return value to promise)
// console.log(callMe2());

function getData(){
    return new Promise((resolve, reject)=>{
        const data = JSON.stringify({name:'Ameer', age:23});
        if(!data){
           return reject("Error! Data not found!");
        }
        resolve(data);      
    });
}

function callMe(){
    return getData();
}

async function call(){
    return await callMe();
}

call().then(res => console.log(res)).catch(rej =>console.log(rej));


