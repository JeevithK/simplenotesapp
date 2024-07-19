
let addnewtask=document.querySelector(".addnewtasks");
let alltasks=document.querySelector(".alltasks");
let count=0;

let addnote=document.querySelector(".addnote");
let popup=document.querySelector(".popup");

let sumtask=document.querySelector(".sumtask");



let addtitle=document.getElementById("addtitle");
let textnote=document.getElementById("textnote");



function adddetfortask()
{
    addnote.style.display="block";
    popup.style.display="block";
}
    
sumtask.addEventListener("click",()=>
{
    addnote.style.display="none";
    popup.style.display="none";
});

let popupedit=document.querySelector(".popupedit");
let editnote=document.querySelector(".editnote");
function editthenote(e) {
    popupedit.style.display = "block";
    editnote.style.display = "block";
    let h2 = e.target;
    let parentContainerh2 = h2.parentElement.parentElement;
    let h2Element = parentContainerh2.querySelector('h2');
    if (h2Element) {
        console.log(h2Element.innerText);
    } else {
        console.log("No h2 element found within the parent container.");
    }
    let h5 = e.target;
    let parentContainerh5 = h5.parentElement.parentElement;
    let h5Element = parentContainerh5.querySelector('h5');
    if (h5Element) {
        console.log(h5Element.innerText);
    } else {
        console.log("No h2 element found within the parent container.");
    }

    let edittitle=document.getElementById("edittitle");
    let edittextarea=document.getElementById("edittextarea");

    edittitle.value=h2Element.innerText;
    edittextarea.value=h5Element.innerText;

    let saveedit=document.querySelector(".saveedit");

    saveedit.addEventListener("click",()=>
    {
        parentContainerh5.querySelector('h2').innerText=edittitle.value;
        parentContainerh2.querySelector('h5').innerText=edittextarea.value;

        popupedit.style.display = "none";
    editnote.style.display = "none";

    })

}




function cancelb()
{
    addnote.style.display="none";
    popup.style.display="none";
}
function canceln()
{
    popupedit.style.display="none";
    editnote.style.display="none";
}
function clicking()
{

    let addtitle=document.getElementById("addtitle");
let textnote=document.getElementById("textnote");



    let newele=document.createElement("div");
    newele.className="note";

    let newelelabel=document.createElement("label");
    newelelabel.for="title";
    newelelabel.style.fontSize="20px";
    newelelabel.style.fontWeight="bold";
    newelelabel.style.color="green";

    if(count%3===0)
    {
        newele.style.transform="rotate(1deg)";
    }
    else if(count%3==1)
    {
        newele.style.transform="rotate(-1deg)";
        newele.style.margin="10px";
    }
    else{
        newele.style.transform="rotate(1.2deg)";
        newele.style.margin="5px";
    }

    newele.append(newelelabel);

    newelelabel.innerHTML="Title of this Note 🎯";

    let inpele=document.createElement("h2");
    inpele.className="editinput";
    inpele.innerHTML=addtitle.value;

    newele.append(inpele);

    let textarealabel=document.createElement("label");
    textarealabel.for="note";
    textarealabel.style.fontSize="20px";
    textarealabel.style.fontWeight="bold";
    textarealabel.style.color="green";

    textarealabel.innerHTML="Description 📝";

    newele.append(textarealabel);

    let textareaele=document.createElement("h5");

    if(textnote.value==="")
    {
        textareaele.innerText="<-No Text->"
    }
    else
    {
        textareaele.innerText=textnote.value;
    }
    

    newele.append(textareaele);

    let divbutt=document.createElement("div");
    divbutt.className="deleditdiv";
    newele.append(divbutt);

    let deltaskbutt=document.createElement("button");
    deltaskbutt.className="deltask";
    // deltaskbutt.onclick="deletethetask(e)";
    deltaskbutt.innerText="Delete 🗑️";

    let editbutt=document.createElement("button")
    editbutt.className="edittask";
    editbutt.innerText="Edit ✒️";
    editbutt.addEventListener("click", editthenote);

    divbutt.append(deltaskbutt);
    divbutt.append(editbutt);

    

    alltasks.append(newele);


    count++;

    deltaskbutt.addEventListener("click",(e)=>
    {
        e.target.parentElement.parentElement.remove();
    })
    
    

textnote.value="";
addtitle.value="";

};

function deletethetask(e)
{
    console.log(123);
}
