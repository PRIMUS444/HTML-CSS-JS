let stock={
    fruit:["apple","banana","orange"],
    coffee:["fine","granules","full seed"],
    holder:["cone","cup","sticks"],
    topping:["poptarts","choco wisks","cream"]
};



let order=(selected_fruit,selected_coffee,selected_holder,selected_topping)=>{
    setTimeout(()=>{
         console.log(`        fruit   :${stock.fruit[selected_fruit]}
        coffee  :${stock.coffee[selected_coffee]}
        holder  :${stock.holder[selected_holder]}
        toppings:${stock.topping[selected_topping]}`);
        production();
},2000);

 console.log("order recieved calling production");
 DocumentTimeline
}




let production=()=>{
    console.log("production request recieved starting production")
}

order(0,1,2,1);