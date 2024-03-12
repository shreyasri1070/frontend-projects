let userchoice=0;
let  compuchoice=0;
let  contains=document.querySelectorAll(".contains");
let show=document.querySelector("#show");
let userscore=document.querySelector("#user-score");
let comscore=document.querySelector("#computer-score")

let showWinner=(userWin,userchoiceId,compchoice)=>{
    if(userWin){
     
        show.innerText=`You Win!  ${userchoiceId} beats ${compchoice}`;
        show.style.backgroundColor="green"
        userchoice++;
        userscore.innerText=userchoice;
    }
    else{
       
        show.innerText=`You Loose !  ${compchoice} beats ${userchoiceId}`;
        show.style.backgroundColor="red";
        compuchoice++;
        comscore.innerText=compuchoice;
    }
}
let comchoice=()=>{
    let options=["rock","paper","scissor"];
    let indx=Math.floor(Math.random()*3);
    return options[indx];
} 

let playgames=(userchoiceId)=>{
   
    // computer choice needed
    const compchoice=comchoice();
   
    if(userchoiceId===compchoice){
        //draw
        show.innerText="Match draw! play again";
        show.style.backgroundColor=" rgb(26, 26, 63);"
    }
    else{
        let userWin;
        if(userchoiceId==="rock"){
            //scissor:win,paper:loose user
           userWin = compchoice==="scissor" ? true:false;
           
        }
        else if(userchoiceId==="paper"){
            //scissor:loose,rock:win user
            userWin=compchoice==="scissor"?false:true;
        }
        else{
            // paper:win,rock:loose user
            userWin=compchoice==="paper"?true:false;
        }
         showWinner(userWin,userchoiceId,compchoice);
    }


}

for(let contain of contains){
    contain.addEventListener("click",()=>{
        const userchoiceId=contain.getAttribute("id")
        console.log(userchoiceId,"was clicked")
        playgames(userchoiceId);
    })
}






