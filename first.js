function getnew() {
    const listitem = document.createElement("li")
    const unlist = document.getElementById("unlist")
    console.log(listitem)
    unlist.appendChild(listitem)
    listitem.textContent = document.getElementById("input-text").value
    document.getElementById("input-text").value = ""
    getdelete(listitem)
}
function getdelete(listitem) {
    const deleted = document.createElement("button")
    deleted.textContent = "delete"
    listitem.appendChild(deleted)
    deleted.onclick=()=>{
        listitem.remove()
    }
}