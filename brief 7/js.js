let title= document.getElementById('title');
let author= document.getElementById('author');
let price= document.getElementById('price');
let date= document.getElementById('date');
let lang=document.getElementById('lang');
let table=document.getElementById('tablee');

let button= document.getElementById('button');

button.addEventListener('click',()=>{
    let radio= document.querySelector('input[name="b"]:checked');
    let err=[];
    function validation(elements){
    if(elements.value==''){
      elements.style.border='3px solid red';
      err.push('error');}
      else {elements.style.border='3px solid green';}
    }
        validation(title);
        validation(author);
        validation(price);
        validation(date);
    //  checked radio 
        if (radio==null){
        alert('Select A Type');
        err.push('error');}
        
    // error
     if(err.length !=0){ document.getElementById('res').innerText='Please fill in the boxes';} 
      
    //  creating table & icons
    let tr= document.createElement('tr');

    function icons (){
        let td = document.createElement('td');
        let editeIcon = document.createElement('i');
        let trashIcon = document.createElement('i');
        editeIcon.className+='fa fa-edit';
        editeIcon.setAttribute('onclick','edited(this);');
        trashIcon.className +='fa fa-trash';
        trashIcon.setAttribute('onclick','remove(this);');
        td.appendChild(editeIcon);
        td.appendChild(trashIcon);
        tr.appendChild(td);
        table.appendChild(tr);
        }   

    function creating (elements){
     let td=document.createElement('td');
     td.appendChild(document.createTextNode(elements.value));
     tr.appendChild(td);
     table.appendChild(tr);
    } 
            creating(title);
            creating(author);
            creating(price);
            creating(date);
            creating(lang);
            creating(radio);
            icons();
});
// edit icon
function edited(elem){
    elem.parentElement.parentElement.setAttribute('contenteditable','true');
    elem.removeAttribute('onclick');
    elem.setAttribute('onclick','checked(this)');    
}
function checked(elem){
     elem.parentElement.parentElement.setAttribute('contenteditable','false');
     elem.removeAttribute('onclick');
      elem.setAttribute('onclick','edited(this)');  
}

// delete icon
function remove(elem){
    elem.parentElement.parentElement.remove();
}