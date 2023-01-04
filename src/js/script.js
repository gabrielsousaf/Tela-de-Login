let bnt = document.getElementById('visible');

bnt.addEventListener('click',()=>{
    let input = document.getElementById('input')

    if (input.type === "password"){
        input.type = "text"

        bnt.classList.remove("fa-eye-slash");
        bnt.classList.add("fa-eye");
    }
    else{
        input.type = "password"

        bnt.classList.remove("fa-eye");
        bnt.classList.add("fa-eye-slash");
    }

})