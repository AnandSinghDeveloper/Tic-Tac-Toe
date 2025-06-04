let boxs= document.querySelectorAll(".cell");
let main= document.querySelector("#gameBoard");
let resetbtn=document.querySelector("#restartButton");
let newBtn =document.querySelector("#new_btn");
let msgContainer = document.querySelector(".msg_container")
let msg =document.querySelector("#msg")
console.log(resetbtn,newBtn);


let turn0=true;
const winningPattrens=[

    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

const resetGame=()=>{
turn0 = true;
enabledBox();
msgContainer.classList.add("hide")
}



boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerHTML='0'
            turn0=false;
        }else{
            box.innerHTML='x'
            turn0=true; 
        }
        box.disabled=true;
        checkWinner();
    })
})
const enabledBox=()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
}
        
    const disabledBox=()=>{
        for(let box of boxs){
            box.disabled=true;
        }
    }
       
       const showWinner=(winner)=>{
            msg.innerText=`congratulation, winner is ${winner}`;
            msgContainer.classList.remove("hide");
            disabledBox();
       }

const checkWinner=()=>{
     for(pattern of winningPattrens){
        let pos1val= boxs[pattern[0]].innerHTML;
        let pos2val= boxs[pattern[1]].innerHTML;
        let pos3val= boxs[pattern[2]].innerHTML;
        
        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val && pos2val === pos3val ){
             showWinner(pos1val);   
            }
        }
     }
}

resetbtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);
