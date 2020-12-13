`usestrict`

{

document.querySelector("button").addEventListener("click", ()=> {

  const li = document.createElement("li");
  const text = document.querySelector("input");
  li.textContent = text.value;

  document.querySelector("ol").appendChild(li);

  text.value = "";
  text.focus();
})

document.querySelector("ol").addEventListener("click", e =>{
  if (e.target.nodeName === "LI") {
    e.target.classList.toggle("done");
  }
})



}