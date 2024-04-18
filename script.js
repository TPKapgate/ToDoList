const data = [{id:1,Text:"Work-A",checked:true}, {id:2,Text:"Work-B",checked:false}];

const addBtn = document.getElementById("add")
const inputBox = document.getElementById("input")
const Tasks = document.getElementById("Tasks")
const count = document.getElementById('left')
let idvalue=2;
const cmplt = document.getElementById("complete")
const uncmplt = document.getElementById("uncomplete")
const all = document.getElementById("all")





// Add Button
addBtn.addEventListener('click',()=>{
    const val = inputBox.value;
    const temp= {id:idvalue, Text: val,checked:false};
    idvalue += 1;
    data.push(temp)
    show();
})

// Show Tasks
function show()
{
    Tasks.innerHTML = "";
    data.forEach(element => {
        const newlabel = document.createElement("label");
        const newinput = document.createElement("input");
        const deleteBtn = document.createElement("button");
        newinput.type= "checkbox";
        newinput.checked = element.checked;
        newlabel.innerHTML = element.Text;
        deleteBtn.innerHTML = 'Delete'
        newlabel.appendChild(newinput);
        newlabel.appendChild(deleteBtn);
        Tasks.appendChild(newlabel);
        deleteBtn.addEventListener('click',()=>{
            let i=0;
            data.forEach(ele => {
                if (ele.id === element.id)
                {
                    data.splice(i, 1);
                    show()
                }
                i+=1
            })
        })
        newinput.addEventListener('click',()=>
        {
            data.forEach(ele => {
                if (ele.id == element.id)
                {
                    ele.checked = newinput.checked; 
                    console.log(data)
                }
            })
        })
    
    });
    count.innerHTML = data.length;
}

function showComplete()
{
    Tasks.innerHTML = "";
    let totalRecords = 0
    data.forEach(element => {
        if (element.checked == true){
        totalRecords +=1
        const newlabel = document.createElement("label");
        const newinput = document.createElement("input");
        const deleteBtn = document.createElement("button");
        newinput.type= "checkbox";
        newinput.checked = element.checked;
        newlabel.innerHTML = element.Text;
        deleteBtn.innerHTML = 'Delete'
        newlabel.appendChild(newinput);
        newlabel.appendChild(deleteBtn);
        Tasks.appendChild(newlabel);
        deleteBtn.addEventListener('click',()=>{
            let i=0;
            data.forEach(ele => {
                if (ele.id === element.id)
                {
                    data.splice(i, 1);
                    show()
                }
                i+=1
            })
        })
        newinput.addEventListener('click',()=>
        {
            // alert("changed")

            data.forEach(ele => {
                if (ele.id == element.id)
                {
                    ele.checked = newinput.checked; 
                    console.log(data)
                }
            })
        })
        }
    });
    
    count.innerHTML = totalRecords;
}

function showUnComplete()
{
    Tasks.innerHTML = "";
    let totalRecords = 0;
    data.forEach(element => {
        if (element.checked == false){
        totalRecords +=1;
        const newlabel = document.createElement("label");
        const newinput = document.createElement("input");
        const deleteBtn = document.createElement("button");
        newinput.type= "checkbox";
        newinput.checked = element.checked;
        newlabel.innerHTML = element.Text;
        deleteBtn.innerHTML = 'Delete'
        newlabel.appendChild(newinput);
        newlabel.appendChild(deleteBtn);
        Tasks.appendChild(newlabel);
        deleteBtn.addEventListener('click',()=>{
            let i=0;
            data.forEach(ele => {
                if (ele.id === element.id)
                {
                    data.splice(i, 1);
                    show()
                }
                i+=1
            })
        })
        newinput.addEventListener('click',()=>
        {
            // alert("changed")

            data.forEach(ele => {
                if (ele.id == element.id)
                {
                    ele.checked = newinput.checked; 
                    console.log(data)
                }
            })
        })
        }
    });
    count.innerHTML = totalRecords;
}

// Event listner for All, complete and uncomplete
all.addEventListener('click',show);
cmplt.addEventListener('click',showComplete);
uncmplt.addEventListener('click',showUnComplete)
show()
