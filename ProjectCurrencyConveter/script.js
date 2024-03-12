let base="https://open.er-api.com/v6/latest";
const convert=document.querySelector(".submit");
let fromCur=document.querySelector(".from select");
let toCur=document.querySelector(".to select");

let select=document.querySelectorAll(".select-container select")


for(let opt of select){
    for(code in countryList){
      let newOption=document.createElement("option");
      newOption.innerText=code; // new element is created and addedd to select element
      //newOption.value=code;
      if(opt.id==="select"&& code ==="USD"){
        newOption.selected="USD"
      }
      else if(opt.id==="select1"&& code ==="INR"){
        newOption.selected="INR";
      }
     opt.append(newOption);
    

     
      }
      opt.addEventListener("change",(eve)=>{ //eve is the event object and eve.taget is place where changes take palce
        console.log(eve.target);
       updateFlag(eve.target);
      });

    }



const updateFlag=(element)=>{
  
   let img=element.parentElement.querySelector("img")
 let img_url=`https://flagsapi.com/${countryList[element.value]}/flat/64.png`;
    img.src=img_url;
    

};


convert.addEventListener("click",async (eve)=>{
    eve.preventDefault();
    let url=`${base}/${fromCur.value}`;
    let response =await fetch(url);
    let actu_res=await response.json();
    let rate=  actu_res.rates[toCur.value]  // object can be accessed with [index]
   let input=document.querySelector(".type");
   let amt=input.value;
   if(amt<0||amt==""){
    amt=1;
    input.value=1;
   }            
   console.log(amt);
   let act_amt=rate*amt;
   console.log(act_amt)
   let msg=document.querySelector(".msg");
   msg.innerText=`${amt} ${fromCur.value} = ${act_amt} ${toCur.value}`
  
   
});



