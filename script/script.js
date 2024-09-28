var mileSec = 1000;
var count = 10;
let cenDiv = document.getElementById("center-div");
cenDiv.style.fontSize = 100+"px";
cenDiv.style.color = "blue";
cenDiv.innerText = count;
setTimeout(()=>{
    count--;
    cenDiv.innerText = count;
    setTimeout(()=>{
        count--;
        cenDiv.innerText = count;
        setTimeout(()=>{
            count--;
            cenDiv.innerText = count;
            setTimeout(()=>{
                count--;
                cenDiv.innerText = count;
                setTimeout(()=>{
                    count--;
                    cenDiv.innerText = count;
                    setTimeout(()=>{
                        count--;
                        cenDiv.innerText = count;
                        setTimeout(()=>{
                            count--;
                            cenDiv.innerText = count;
                            setTimeout(()=>{
                                count--;
                                cenDiv.innerText = count;
                                setTimeout(()=>{
                                    count--;
                                    cenDiv.innerText = count;
                                    setTimeout(()=>{
                                        cenDiv.innerText = "Happy Independence Day";
                                        document.body.style.backgroundSize = "100% 100%";
                                    },mileSec);
                                },mileSec);
                            },mileSec);
                        },mileSec);
                    },mileSec);
                },mileSec);
            },mileSec);
        },mileSec);
    },mileSec);
},mileSec);