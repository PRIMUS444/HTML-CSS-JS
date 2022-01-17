let welcomeMessage=document.getElementById("welcome");

let username="";
 
let addcaught= [];
localStorage.setItem("Links",JSON.stringify(addcaught));
addcaught=JSON.parse(localStorage.getItem("links"));
let inputval="";
let inputbt=document.getElementById("inputbt");
let ulist=document.getElementById("ulist");
let i=0;
let j=0;

inputbt.addEventListener("click",inputvalue)


function inputvalue(){
    inputval=document.getElementById("inputval")
    addcaught.push(inputval.value);
    inputval.value="";
    updatelist();
}
inputtbbt.addEventListener("click",function(){
    chrome.tabs.query({active: true , currentWindow:true },function (tabs){
           console.log(tabs[0]);
    });
});

function updatelist(){
    if(j=0 && addcaught!=[])
    {
        displaylist();
    }
    else{
        const li=document.createElement("li");//<li></li>--created
        const a=document.createElement('a');
        a.setAttribute("href",addcaught[i]);
        a.setAttribute("target","_blank");
        console.log(a);
        a.textContent=addcaught[i++];//<li>last element of array <li>--added
        li.append(a);
        ulist.append(li);//
    }
}

function displaylist(){
    for(i=0;i<addcaught.length;i++){

    const li=document.createElement("li");//<li></li>--created
    const a=document.createElement('a');
    a.setAttribute("href",addcaught[i]);
    a.setAttribute("target","_blank");
    console.log(a);
    a.textContent=addcaught[i++];//<li>last element of array <li>--added
    li.append(a);
    ulist.append(li);//
    }
}



