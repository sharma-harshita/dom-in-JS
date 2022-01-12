// console.log("hello");


//by tag name
// const heading = document.getElementsByTagName("h1");
// console.log(heading);


// //by class name
// const heading2 = document.getElementsByClassName("heading");
// console.log(heading2[0].innerText);


// //by id
// const heading3 = document.getElementById("heading");
// console.log(heading3.innerText);



function changeText () {
    const content = document.getElementById("content");
    // console.log(content.innerText);
    content.innerText = "Elevation Students";
    content.style.color = "rgb(224,176,255)"
}