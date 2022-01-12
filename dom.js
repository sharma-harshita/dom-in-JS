
//  One way of accessing any HTML element is by using its tag name

// const value = document.getElementsByTagName("h1");
// console.log("H1 Heading :", value);


//  Another way by using the class name
// const value2 = document.getElementsByClassName("heading");
// console.log(value2[0].innerText);


// first and second functions always returns you an array of the elements having that same tag or classname.

// third way to access elements by using id 

// function handleStyleChange(){
//     const value3 = document.getElementById("student");
//     value3.style.color="red"
// }


// const value = document.getElementById("content");

// console.log("INNER HTML",value.innerHTML===value.innerText);
// console.log("INNER TEXT",value.innerText);
// console.log("INNER TEXT",value.innerHTML);


function handleChangeHeading (){
    const value = document.getElementById("heading");
    value.innerText = "Document object Model";
    value.style.backgroundColor = "hotpink"
}

// let count = 0;
// function addItem(){
//     let text = ["First div", "second div", "third div", "fourth div"];

//     const spanTag = document.createElement("span");
//     spanTag.setAttribute("class","element");

//     spanTag.innerHTML = `<h1>${text[count]}</h1>`;

//     const parentDiv = document.getElementById("students");
//     parentDiv.appendChild(spanTag);
//     console.log(parentDiv);
//     count++;
// }


{/* <span class="element"></span> */}


function addItem (){
    const userGivenValue = document.getElementById("input").value;
    // console.log(userGivenValue);

    const spanTag = document.createElement("span");
    spanTag.setAttribute("class","element");

    spanTag.innerHTML = `<h1>${userGivenValue}</h1>`;

    const parentDiv = document.getElementById("students");
    parentDiv.appendChild(spanTag);
}