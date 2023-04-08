/**
 * Two approaches are discussed
 * 1-Working on two dependent task - to load the data from two sources i.e API's and DB.
 * 2-Working on two independent task - By saving time.
 */

//Dependent Async Task 
async function getStoreData(){
    const apiData = await getDataFromAPI();
    const db = await getFromDB();    
}

//Independent async task (Parallel Tasks)
const [ApiData, db] = await Promise.all([getDataFromAPI(), getFromDB()]);

//Second method
//If any promise fails then it will go to catch block.
Promise.all([getDataFromAPI(), getFromDB()]).then(function([api, db]){


}).catch(function(err){
    console.log(err);
});


