const promise = new Promise((resolver, rejector)=>{
    const name='ameer';
    if(name.length > 4){
        resolver(name);
    }
    else{
        rejector("Error");
    }    
});

//First way to access the promise.
promise.then(res=>console.log(res)).catch(err => console.log(err));

//Second way
promise.then(function(data){
    console.log(data);
}, function(err){
    console.log(err);
});