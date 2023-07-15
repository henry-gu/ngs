// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
let count=0;
const intervalId=setInterval(()=>{
        count++;
        console.log("Node Getting Startted..."+ count);
        if (count==5){
            console.log("Done!");
            clearInterval(intervalId);
        }
    },
    2000
);
