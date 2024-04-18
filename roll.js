document.addEventListener("DOMContentLoaded",function(){

    let roll = localStorage.getItem("roll")
    var call4;
    var call6;
    var call8;
    var call10;
    var call12;
    var call20;
    
    var sum = call4;

    if (roll == "d4"){
        call4 = Math.floor(Math.random() * 4) + 1;
        generateDog();
    } else {
        call4 = 0;
    }
    if (roll == "d6"){
        call6 = Math.floor(Math.random() * 6) + 1;
        generateDog();
    } else {
        call6 = 0;
    }
    if (roll == "d8"){
        call8 = Math.floor(Math.random() * 8) + 1;
        generateDog();
    } else {
        call8 = 0;
    }
    if (roll == "d10"){
        call10 = Math.floor(Math.random() * 10) + 1;
        generateDog();
    } else {
        call10 = 0;
    }
    if (roll == "d12"){
        call12 = Math.floor(Math.random() * 12) + 1
        generateDog();
    } else {
        call12 = 0;
    }
    if (roll == "d20"){
        call20 = Math.floor(Math.random() * 20) + 1;
        generateDog();
    } else {
        call20 = 0;
    }

    function generateDog() {
        fetch("https://shibe.online/api/shibes")
            .then((response) => response.json())
            .then((data) => {
                const dogImage = document.getElementById("dog-image");
                dogImage.src = data[0];
            })
            .catch((error) => console.error(error));
    }

    console.log(roll)
    console.log(call4)
    console.log(call6)
    console.log(call8)
    console.log(call10)
    console.log(call12)
    console.log(call20)
    console.log(sum)
})

