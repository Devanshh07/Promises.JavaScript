

let h1 = document.querySelector("h1");


// Asynchronous function is nothing but function which is dependend some logic => then execute

function savedata(data, success, fail) {

    let speed = Math.floor(Math.random() * 10) + 1;
    if (speed > 4) {
        success();
    } else {
        fail();

    };


};

// Look At this Call Back hell => that save data function is Asynchronous Function becouse 
// it is dependend in Network speed!
savedata("Data 1", () => { 

    console.log("save data 1"); // situation of CallBackHell => callback under callback  
                                 // nesting of callback => Calllback hell!
 
    savedata("Data 2", () => {

        console.log("save data 2");

        savedata("Data 3", () => {

            console.log("Save data 3");

            savedata("Data 4", () => {

                console.log("Save data 4");

                savedata("Data 5", () => {

                    console.log("save data 5");

                }, () => {
                    console.log("fail data 5");
                })
            }, () => {
                console.log("Fail data 4");
            })
        }, () => {
            console.log("fail Data 3");
        })
    }, () => {
        console.log("fail data 2");
    })
}, () => {
    console.log("fail data 1");
})