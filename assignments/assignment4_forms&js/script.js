
function displayq1()
{
    let q1name=document.getElementById("q1name").value;
    let q1address=document.getElementById("q1address").value;
    let q1tel=document.getElementById("q1phone").value;
    if(q1name=="")
    {
        q1name="\"Not Entered\"";
    }
    if(q1address=="")
    {
        q1address="\"Not Entered\"";
    }
    if(q1tel=="")
    {
        q1tel="\"Not Entered\"";
    }
    let nextrow = q1table.insertRow(1);
    let c1=nextrow.insertCell(0);
    let c2=nextrow.insertCell(1);
    let c3=nextrow.insertCell(2)
    c1.innerHTML = q1name;
    c2.innerHTML = q1address;
    c3.innerHTML = q1tel;

}

function displayq2()
{
    let q2name=document.getElementById("q2name").value;
    let q2age=document.getElementById("q2age").value;
    if(q2name=="")
    {
        q2name="\"Not Entered\"";
    }
    if(q2age==""){
        q2age="\"Not Entered\"";
    }
 
    document.getElementById("q2row").innerHTML +=
    "<p id='q2answer'>"+q2name+" is "+ q2age +" years old</p>";

}

function displayq3()
{
    let q3name=document.getElementById("q2name").value;
    let q3age=document.getElementById("q3age").value;
    let q3nation=document.querySelector("#q3nation");
    let elig="NO";
    console.log( q3name);

    console.log( q3nation);
}