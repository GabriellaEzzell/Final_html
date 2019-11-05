// alert("In my own file!");

document.body.style.background = "blue";

setTimeout(() => {
    document.body.style.background = "red";
    console.log("Hello");
    // alert("Ha, changed the background on you!");
}, 3000);