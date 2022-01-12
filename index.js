// console.log("Window", window.document);
// console.log("Window", document);


// window.setTimeout(()=>{
//     console.log("student");
// }, 2000)

//accessing elements
//by classname

// const contentValue = document.getElementsByClassName("content");
// console.log(contentValue[0].innerText);


//by tag
// const value = document.getElementsByTagName("h2");
// console.log(value[0].innerText);


//by id 
// const value2 = document.getElementById("course");
// console.log(value2.innerText);


// function changeText (){
//     const value = document.getElementById("content");
//     console.log(value.innerText);
//     value.innerText = "Elevation Students";
//     console.log(value.innerText);
//     value.style.color = "hotpink";
// }

function changeDir(){
    const value = document.getElementById("parent");
    value.style.flexDirection="column";
}

// Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.