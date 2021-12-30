function greatestoftwo()
{
   let num1= document.querySelector("#num1").value;
   let num2= document.querySelector("#num2").value;
   num1=parseFloat(num1);
   num2=parseFloat(num2)
   if(num1>num2)
   {
       document.getElementById("greatest").innerHTML="<h3 class=forms >greatest of "+num1+" and "+num2+" is "+num1+"</h3>"
   }
  else if(num1<num2)
   {
       document.getElementById("greatest").innerHTML="<h3 class=forms>greatest of "+num1+" and "+num2+" is "+num2+"</h3>"
   }
   else
   {
    document.getElementById("greatest").innerHTML="<h3 class=forms>Same number is Entered </h3>";

   }

}

function findgrade(){
    let grade="IIIrd Division";
    let perc=(parseFloat(document.getElementById("persentage").value));
    if(perc<33)
    {
      grade="Fail";
    }
    else if(perc>=33 && perc<45)
    {
      grade="IIIrd Divition";
    }
    else if(perc>=45 && perc<60)
    {
      grade="IInd Divition";
    }
    else if(perc>=60 && perc<80)
    {
      grade="Ist Divition";
    }
    else
    {
        grade="Merit"
    }
    document.getElementById("grade").innerHTML="<h3 class=forms>"+grade+" </h3>";
}

function findday()
{
    let fday="Monday";
    let day=parseInt(document.getElementById("day").value)
    switch(day)
    {
        case 1: fday="Monday";
                break;
        case 2: fday="Tuesday";
                break;
        case 3: fday="Wednesday";
                break;
        case 4: fday="Thrusday";
                break;
        case 5: fday="Friday";
                break;
        case 6: fday="Saturday";
                break;
        case 7: fday="Sunday";
                break;
        default:fday="Out of scope"        
                
    }
    document.getElementById("fday").innerHTML="<h3 class=forms>"+fday+" </h3>";
  
}


function findamt(){
    let pa=parseFloat(document.getElementById("pamount").value);
    let discount=0.0;
    if(pa<=5000)
    {
        discount=pa*0.02;
    }
    else if(pa<=10000 && pa>5000)
    {
        discount=pa*0.05;
    }
    else
    {
        discount=pa*0.08;

    }
    document.getElementById("netamt").
    innerHTML="<h3 class=forms>Discount : "+discount+"<br> Net amount :"+(pa-discount)+" </h3>";
}

function factorial(){
    let i=parseInt(document.getElementById("fact").value)
    let num=1;
    console.log(typeof(num));
    if(i>0)
    {
      for(i;i>0;i--)
        {    

             num = num * i;}

    }
    else
    {
        document.getElementById("factor").
        innerHTML="<h3 class=forms>Factorial can not be found for negative numbers"
        return;
    }
    document.getElementById("factor").
    innerHTML="<h3 class=forms>Factorial :"+num+" </h3>";
}


function eveno(){

    document.getElementById("evennum").
    innerHTML ="<h3 class=forms> Numbers are :\n</h3>";
    for(let i=2;i<1001;i+=2)
    {
        document.getElementById("evennum").
        innerHTML +=" "+i+" ";

    }
}

function sum1to20(){
let sum=4;
document.getElementById("sum1too20").
innerHTML +="<b>"+sum;
 for (let i=7;i<20;i+=3)
 {
     sum+=i
     document.getElementById("sum1too20").
     innerHTML +="<b class=forms> +"+i;
 }
 document.getElementById("sum1too20").
 append(" = "+sum);
}

function odd15(){
    document.getElementById("odd15to3").
    innerHTML ="<h3 class=forms> Numbers are :\n</h3>";
    for(let i=15;i>=3;i-=2)
    {
        document.getElementById("odd15to3").
        innerHTML +=" "+i+" ";
    }

}

function table1to10(){
  for(let i=1;i<11;i++)
  {  
    document.getElementById("table1too10").
    innerHTML +="<b><br>"+i+"s Table<b><br>";
      for(j=1;j<11;j++)
      {
          document.getElementById("table1too10").
          innerHTML +=i+" * "+j+" = " +(i*j)+"<br>" ;
          
        }
   
  }

}

function check100(){
 let num1=parseFloat(document.getElementById("number1").value);
 let num2=parseFloat(document.getElementById("number2").value);
 let sum=num1+num2;
    if(num2==100){
        document.getElementById("checked100").
        innerHTML ="Second Number is 100<br> TRUE ";
     } 
     else if(num1==100){
     document.getElementById("checked100").
     innerHTML ="First Number is 100<br> TRUE ";
     } 
     else if(sum==100)
     {
        document.getElementById("checked100").
        innerHTML ="Sum of Entered Number is "+sum+" <br> TRUE ";
     }
else{
    document.getElementById("checked100").
        innerHTML ="Sum of Entered Number is "+sum+" <br> False ";
}

}