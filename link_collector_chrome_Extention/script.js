let welcomeMessage=document.getElementById("welcome");

let addcaught=[];
let local=[];
let inputbt=document.getElementById("inputbt");
let inputtbbt=document.getElementById("inputtbbt");
let ulist=document.getElementById("ulist");
let inputval="";
let i=0;
let j=1;
local=JSON.parse(localStorage.getItem("Links"));//input from local storage
addcaught=addcaught.concat(local);//concatinating in run time variable.
console.log(addcaught);
updatelist();

inputbt.addEventListener("click",function inputvalue(){
    console.log(localStorage.getItem("Links"));
    inputval=document.getElementById("inputval");
    addcaught.push(inputval.value);
    inputval.value="";
    updatelist();  

})

inputtbbt.addEventListener("click", getlink());

function getlink(){
   chrome.tabs.query({active: true , currentWindow: true}, function (tabs){
    addcaught.push(tabs[0].url);
    });
    updatelist();
}

function updatelist(){
    localStorage.setItem("Links",JSON.stringify(addcaught));
    if(j==1)
    {
       for(i=0;i<addcaught.length;i++)
        { 
            j++;
            const li=document.createElement("li");//<li></li>--created
            const a=document.createElement('a');
            a.setAttribute("href",addcaught[i]);
            a.setAttribute("target","_blank");
            a.textContent=addcaught[i];//<li>last element of array <li>--added
            li.append(a);
            ulist.append(li);//
        }
    }
    else{
        const li=document.createElement("li");//<li></li>--created
            const a=document.createElement('a');
            a.setAttribute("href",addcaught[j++]);
            a.setAttribute("target","_blank");
            a.textContent=addcaught[i];//<li>last element of array <li>--added
            li.append(a);
            ulist.append(li);//
    }
}