
//  One way of accessing any HTML element is by using its tag name

// const value = document.getElementsByTagName("h1");
// console.log("H1 Heading :", value);


//  Another way by using the class name
// const value2 = document.getElementsByClassName("heading");
// console.log(value2[0].innerText);


// first and second functions always returns you an array of the elements having that same tag or classname.

// third way to access elements by using id 

function handleStyleChange(){
    const value3 = document.getElementById("student");
    value3.style.color="red"
}


