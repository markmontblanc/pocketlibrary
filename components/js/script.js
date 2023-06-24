document.querySelector(".ham").addEventListener("click", function(){
    document.querySelector(".q").classList.toggle("a");
    document.querySelector(".w").classList.toggle("b");
    document.querySelector(".e").classList.toggle("c");
})

function burgerclick(){
document.querySelector(".menuContainer").classList.toggle("show");
}


document.getElementById("login-button").addEventListener("click", function() {

    window.location.href = "login.html";
  });
  
  document.getElementById("register-button").addEventListener("click", function() {

    window.location.href = "register.html";
  });



const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


