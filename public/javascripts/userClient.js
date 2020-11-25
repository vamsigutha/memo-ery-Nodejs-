var input  = document.querySelector("input");

input.value = `${window.location}`+input.value;

var copyButton  = document.querySelector("#copy-button");
copyButton.addEventListener("click",()=>{
  input.select();
  input.setSelectionRange(0,99999);
  document.execCommand("copy");
  copyButton.innerHTML="copied";
});

var text = "Click the link below to answer the question "+ input.value;

var link = document.querySelector("a");

link.href = `whatsapp://send?text=${text}`;
