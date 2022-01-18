//1.
function findroot(){
    let num=parseFloat(document.getElementById("sqarinp").value);
    num=Math.sqrt(num);
    document.getElementById("sqans").innerHTML=("Square Root : "+num);

}
//2.
function areatri(){
    let len=parseFloat(document.getElementById("arlen").value);
    let hig=parseFloat(document.getElementById("arhig").value);
    let area=((len*hig)/2);
    document.getElementById("rtans").innerHTML=("Area : "+area);


}
//3. 
function checktri(){
    let si1=parseFloat(document.getElementById("s1").value);
    let si2=parseFloat(document.getElementById("s2").value);
    let si3=parseFloat(document.getElementById("s3").value);
    let height=Math.sqrt((si1*si1)-(si3/2*si3/2));
    let area=((si1*si2)/2);
    let perimeter=1.23;
    if(si1===si2 && si1===si3)
    {
        area=si1*si1*0.433;
        document.getElementById("trians").innerHTML=('<span style="color:red">Equilaterial Triangle</span> <br>Area : '+area);
    }
    else if(si1===si2 && si1!=si3){

            area=(si3*height)/2;
            document.getElementById("trians").innerHTML=('<span style="color:red">Isosceles Triangle</span> <br>Area : '+area);
        }
    else if(si1===si3 && si1!=si2)
        {
            height=Math.sqrt((si1*si1)-(si2/2*si2/2));   
            area=(si2*height)/2;
            document.getElementById("trians").innerHTML=('<span style="color:red">Isosceles Triangle</span> <br>Area : '+area);
        }
    else if(si2===si3 && si2!=si1)
        {
            height=Math.sqrt((si2*si2)-(si1/2*si1/2));   
            area=(si1*height)/2;
            document.getElementById("trians").innerHTML=('<span style="color:red">Isosceles Triangle</span> <br>Area : '+area);
        }
    else if(si1!==si2 && si1!==si3 && si2!==si3){
        perimeter=(si1+si2+si3)/2;
        area=Math.sqrt(perimeter*(perimeter-si1)*(perimeter-si2)*(perimeter-si2))
        document.getElementById("trians").innerHTML=('<span style="color:red">Scalene Triangle</span> <br>Area : '+area);
    }
}

//4.
function swapnum(){
    let n1=parseFloat(document.getElementById("n1").value);
    let n2=parseFloat(document.getElementById("n2").value);
    n1+=n2;
    n2=(n2-n1)*-1;
    n1-=n2;
    document.getElementById("numans").innerHTML=("Number 1 : "+n1+"<br>Number 2 : "+n2);
}

//5.
function rand(){
    let ran=Math.random()*9+1;
    document.getElementById("randans").innerHTML=(ran);

}

//6.
function printprime()
{ 
    let a;
    document.getElementById("primeans").innerHTML=("2");

    for(let i=3;i<100;i++)
    { 
        a=0;
        for(let j=1;j<=i/2;j++)
        {
            if(i%j==0)
            {
                a++;

            }
        }
        if(a==1)
        {
            document.getElementById("primeans").innerHTML+=(","+i);

        }

    }
}

//7.
function greatestofthree(){
    let g1=parseFloat(document.getElementById("gn1").value);
    let g2=parseFloat(document.getElementById("gn2").value);
    let g3=parseFloat(document.getElementById("gn3").value);
    if(g1>g2 && g1>g3)
    {
        document.getElementById("greatestofthreeans").innerHTML=("Greatest is 1st Number : "+g1);

    }
    else if(g2>g1 && g2>g3)
    {
        document.getElementById("greatestofthreeans").innerHTML=("Greatest is 2nd Number : "+g2);

    }
    else if (g1==g3 || g1==g2|| g2==g3 )
    {
        if(g1==g3){
            if(g1>g2){
                document.getElementById("greatestofthreeans").innerHTML=("1st a 3rd Number are equal and greater than 2nd number");
            }
        }
        if(g2==g3){
            if(g2>g1){
                document.getElementById("greatestofthreeans").innerHTML=("2nd a 3rd Number are equal and greater than 1st number");
            }
        }
        if(g1==g2){
            if(g1>g3){
                document.getElementById("greatestofthreeans").innerHTML=("1st a 2nd Number are equal and greater than 3rd number");
            }
        }
        if(g1==g2&&g1==g3){
        document.getElementById("greatestofthreeans").innerHTML=("Number are equal");
        }
    }
    else if(g3>g1 && g3>g2){
        document.getElementById("greatestofthreeans").innerHTML=("Greatest is 3rd Number : "+g3);

    }
}

//8.
function armnum()
{
    let num=document.getElementById("arnum").value;
    let i=num.length;
    num=parseInt(num);
    let temp=num;
    let a=0,sum=0,fac=1;
    for(let j=0;j<i;j++)
    {
       a=temp%10;
       fac=a;
       for(let k=0;k<i-1;k++){
           fac*=a;
       }
       sum+=fac;
       temp-=a;
       temp/=10;
    }
    if(sum==num)
    {
        document.getElementById("armnumans").textContent=("Yes \""+num+"\" is Armstrong's Number")
    }
    else{
        document.getElementById("armnumans").textContent=("No \""+num+"\" is Not an Armstrong's Number")

    }
}

//9.
function samelastdigit(){
    let sn1=parseFloat(document.getElementById("sn1").value);
    let sn2=parseFloat(document.getElementById("sn2").value);
    let sn3=parseFloat(document.getElementById("sn3").value);
    sn1%=10;
    sn2%=10;
    sn3%=10;
    if (sn1==sn3 || sn1==sn2|| sn2==sn3 )
    {
        if(sn1==sn3){
            if(sn1!=sn2){
                document.getElementById("samelastdigitans").innerHTML=("Last digit of 1st a 3rd are same : "+sn1+"<br>But 2nd is not : "+sn2);
            }
        }
        if(sn2==sn3){
            if(sn2!=sn1){
                document.getElementById("samelastdigitans").innerHTML=("Last digit of 2nd a 3rd are same : "+sn3+"<br>But 1st is not : "+sn1);
            }
        }
        if(sn1==sn2){
            if(sn1!=sn3){
                document.getElementById("samelastdigitans").innerHTML=("Last digit of 1st a 2nd are same : "+sn1+"<br>But 3rd is not : "+sn3);
            }
        }
        if(sn1==sn2 && sn1==sn3){
        document.getElementById("samelastdigitans").innerHTML=("Last digit of 1st , 2nd and 3rd are equal : "+sn1);
        }
    }
    else{
        document.getElementById("samelastdigitans").innerHTML=("None are same");

    }
    
}

//10.
function palandromwith(){
    let sn1=document.getElementById("ps1").value;
    let chr=sn1.split("");
    chr=chr.reverse();
    chr=chr.join("");
    if(sn1==chr)
    {
        document.getElementById("palandromans1").innerHTML=("Palindrom");
    }
    else{
        document.getElementById("palandromans1").innerHTML=("Not a Palindrom");

    }

}

//11.
function palandromwithout(){

    let sn1=document.getElementById("ps1").value;
    let i=parseInt(sn1.length);
    i--;
    for(let j=0;j<=i;j++)
    {
        if(sn1[j]!=sn1[i-j]){
            document.getElementById("palandromans2").innerHTML=("Not a Palindrom");
          return;
        }
    }
    document.getElementById("palandromans2").innerHTML=("Palindrom");
}

//12.
function countchar()
{
    let str=document.getElementById("strtc").value;
    let ch=document.getElementById("chtc").value;
    let numr=0;
    for(let i=0;i<str.length;i++)
    {
        if(ch==str[i])
        {
            numr++;
        }
    }
    document.getElementById("countcharans").textContent=(numr);
}

//13.
function checkchar()
{
    let str=document.getElementById("strch").value;
    let ch=document.getElementById("chch").value; 
    console.log(ch[0]);
    if(str[0]===ch[0] && str[str.length-1]===ch[0])
    {
        document.getElementById("checkcharans").textContent=("Yes String Starts and ends with \""+ch+"\"");
    }
}

//14.
function checksubstr()
{
    let str=document.getElementById("strs").value;
    let substr=document.getElementById("substr").value; 
    let a=0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i]===substr[0])
        {
            for(let j=0;j<substr.length;j++)
            {
                if(str[i+j]===substr[j])
                {
                    a=0;
                }
                else
                {
                    a=1;
                    break;
                }
            }
            if(a==0){
            document.getElementById("checksubstrans").textContent=("Yes Sub-String Present");
            return;
            }
        }
    }
    document.getElementById("checksubstrans").textContent=("NO Sub-String NOT Present");


        
}

//15.
function capi()
{
   let str=document.getElementById("str15").value;
   let temp="";
   temp=str[0].toUpperCase();
   for(let i=1;i<str.length;i++)
   {
       temp+=str[i];
   }
   document.getElementById("capians").innerHTML=("Changed string : "+temp);
}

//16.
function printfibo()
{
   let lim=parseInt(document.getElementById("n16").value);
   let a=0,b=1,c=0;
   document.getElementById("printfiboans").textContent=("0 , 1");
    while(1){
     c=a+b;
     if(c>lim){
         return;
     }
     a=b;
     b=c;
     document.getElementById("printfiboans").textContent+=(", "+c);

   }
}

//17.
function replaceword()
{
   let str=document.getElementById("str17").value;
   let input=document.getElementById("str17w").value;
   let str2s=document.getElementById("str17w2").value;
   let ot=0;
   let temp="";
   let j=1;
   for(let i=0;i<str.length;i++)
   { 
       if(str[i]===str2s[0])
       { 
           ot=1;
           for(j=0;j<str2s.length;j++)
           {
               if(str[i+j] !== str2s[j]){
                ot=0;
               }
            }
            if(ot==1){
             j--;
               temp+=input;
              i=i+j;
           }
       }
       else{
           temp+=str[i];
       }
   }
   document.getElementById("replacewordans").innerHTML=("Changed string : "+temp);

}

//18.
function reverse()
{
   let str=document.getElementById("str18").value;
   let temp="";
   for(let i=str.length-1;i>=0;i--)
   {
       temp+=str[i]
   }
   document.getElementById("reverseans").innerHTML=("Changed string : "+temp);

}

//19.
function changechar()
{
   let str=document.getElementById("str19").value;
   let chtr=document.getElementById("ch191").value;
   let chtbr=document.getElementById("ch192").value;
   let temp="";
   for(let i=0;i<str.length;i++)
   {
       if(str[i]==chtbr[0])
       {
          temp+=chtr[0];
       }
       else{
           temp+=str[i];
       }
   }
   str=temp;
   document.getElementById("changecharans").innerHTML=("Changed string : "+str);
}

//20.
function addnew(){
    let str=document.getElementById("ads").value;
    let temp="New!";
    let a="";
    a +=str[0]+str[1]+str[2]+str[3];
    if (a===temp)
    {   
        document.getElementById("addnewans").textContent=("New String : "+str);
    }
    else{
        temp+=str;
        str=temp;
        document.getElementById("addnewans").textContent=("New String : "+str);

        
    }

}