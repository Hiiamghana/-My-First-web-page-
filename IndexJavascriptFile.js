 function search() {
    let filter = document.getElementById('input').value.toUpperCase();
    let item = document.querySelectorAll('.image1');
    let name = document.getElementsByTagName('h2');
    for (var i = 0; i < name.length; i++) {
        let a = item[i].getElementsByTagName('h2')[0];
        let value = a.innerHTML || a.innerText || a.textContent;
        if (value.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display = "";
        }
        else {

            item[i].style.display = "none";
            // let Alert = document.createElement("h2").innerText =" Oops Please search correct food blog ";
            // item[i].document.getElementsByClassName(".food").Alert;
         
        
        }
    }
}
function toggleLike() {
    var likeIcon = document.getElementById('like');
    if (likeIcon.style.color === "red") {
        likeIcon.style.color = "gray";
    } else {
        likeIcon.style.color = "red";
    }
}
