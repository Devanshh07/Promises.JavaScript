//Promises 

function savedata(data){
    return new Promise((resolve,reject) =>{
        let internet = Math.floor(Math.random() * 10) +1;
        if(internet>4){
            resolve("data saved!");
        } else{
            reject("Error");
        };
    });
    
 };
 savedata();

