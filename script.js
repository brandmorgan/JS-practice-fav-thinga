// Get DOM nodes

// Selects HTML form stores in variable
const favForm = document.getElementById("fav-form")

// Selects form submit button
const subBtn = document.getElementById("btn")

// Function to gather input and place inside array

function handleSubmit(event) {
    // STOPS PAGE REFRESH
    event.preventDefault();
    // GRAB VALUE FROM CHARACTER TEXT FIELD
    const charOne = document.getElementById("char1").value
    console.log(charOne)
    // GRAB VALUE FROM CHARACTER TEXT FIELD
    const charTwo = document.getElementById("char2").value
    console.log(charTwo)
    // GRAB VALUE FROM CHARACTER TEXT FIELD
    const charThree = document.getElementById("char3").value
    console.log(charThree)
    // GRAB VALUE FROM CHARACTER TEXT FIELD
    const charFour = document.getElementById("char4").value
    console.log(charFour)
    // GRAB VALUE FROM CHARACTER TEXT FIELD
    const charFive = document.getElementById("char5").value
    console.log(charFive)

    // INITIALIZE EMPTY ARRAY
    const myChar = []

    myChar.push(charOne)
    myChar.push(charTwo)
    myChar.push(charThree)
    myChar.push(charFour)
    myChar.push(charFive)

    const newArray = []

    newArray.push(myChar[0])
    newArray.push(myChar[1])
    newArray.push(myChar[2])

    console.log(newArray)

    const list = document.getElementById("list")

    newArray.forEach(function(item) {
        const li = document.createElement('li');
        li.innerText = item;
        list.appendChild(li);
        });

}

favForm.addEventListener("submit", handleSubmit)