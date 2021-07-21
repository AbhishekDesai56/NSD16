setTimeout(() => {
    console.log("Loading the file");
    setTimeout(() => {
        console.log("Reading the file");
        setTimeout(() => {
            console.log("Check file structure for correct or not");
            setTimeout(() => {
                console.log("If Correct, load it into the database");
                setTimeout(() => {
                    console.log("If not, discard the file and move tot the next file")
                },5000);
            },15000);
        }, 10000)
    }, 5000);
},5000);