const phrase = document.getElementById('phrase');
const filter = document.getElementById('filter');
const display = document.getElementById('display');
const button = document.getElementById('button');
let text;
button.addEventListener('click', () => {
    text = phrase.value.trim();
    display.innerHTML='';
    reverser(text);

})
let newArray=[];
function reverser(text) {
    const array = text.split(" ");
    for (let index = array.length-1; index >= 0; index--) {
        newArray.push(array[index])
    }
    print(newArray)
}

function print(newArray){
    newArray.map((ele, idx)=>{
        display.innerHTML+=`<p 
        style="
        color:red; 
        margin-right:5px;
        padding:5px;
        background: #ffd9d9;
        border: 1px dotted red
        ">${ele}</p>`;
        console.log(idx)
    })
}

filter.addEventListener('keyup',e=>{
test=filter.value.trim();
if(newArray.indexOf(test)!==-1){
    newArray.splice(newArray.indexOf(test), 1);
}
display.innerHTML='';
print(newArray)
e.preventDefault()
})