const phrase = document.getElementById('phrase');
const filter = document.getElementById('filter');
const display = document.getElementById('display');
const button = document.getElementById('button');
let text;
let newArray = [];
button.addEventListener('click', () => {
    newArray.length = 0;
    text = phrase.value.trim();
    const array = text.split(" ");
    for (let index = array.length - 1; index >= 0; index--) {
        newArray.push(array[index])
    }
    print(newArray)
})

function print(newArray) {
    display.innerHTML="";
    newArray.map(ele => {
        display.innerHTML += `<p 
        style="
        color:red; 
        margin-right:5px;
        padding:5px;
        background: #ffd9d9;
        border: 1px dotted red
        ">${ele}</p>`;
    })

}

filter.addEventListener('keyup', e => {
    test = filter.value.trim();
    if (newArray.indexOf(test) !== -1) {
        newArray.splice(newArray.indexOf(test), 1);
    }
    display.innerHTML = '';
    print(newArray)
    e.preventDefault()
})