//method

function savedata(data) {
    return new Promise((resolve, reject) => {
        let internet = Math.floor(Math.random() * 10) + 1;
        if (internet > 4) {
            resolve("data saved!");
        } else {
            reject("Error");
        };
    });

};
savedata("data")
.then((result)=>{
    console.log("data 1 saved");
    console.log("Success : ", result);  // result => resolve (promis success)
    return savedata("data 2")
})
.then((result)=>{
    console.log("data 2 saved!");
    console.log("Success : ", result);
    return savedata("data 3");
})
.then((result)=>{
    console.log("data 3 saved!");
    console.log("Success : ", result);
    return savedata("data 4");
})
.then((result)=>{
    console.log("data 4 saved!");
    console.log("Success : ", result);
})
.catch((Error)=>{
    console.log("Fail :" , Error); // error => promis rejectedcd
    
    console.log("Rejected!");
})
// savedata("Data")
//     .then(() => {
//         console.log("0 resolved");
//         return savedata("data 1")
//             .then(() => {
//                 console.log("1 resolved");
//                 return savedata("data 2")
//                     .then(() => {
//                         console.log("2 resolve");
//                         return savedata("data 3")
//                             .then(() => {
//                                 console.log("3 resolve!");
//                                 return savedata("data4")
//                                     .then(() => {
//                                         console.log("4 resolve!");
//                                     })
//                             })

//                     })
//             })
//     })
    