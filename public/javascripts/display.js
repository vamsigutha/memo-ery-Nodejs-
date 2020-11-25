var main = document.querySelector(".main");
var url = `${window.location}`+"/api";


var data = async function(){
  var response = await axios.get(url);
  if(response.data.length === 0){
    main.innerHTML = `<div class="no-results">
    <div class=" content no-results-p"><p>no results<br/> found !!!<p></div>
    <h2>Try Following:</h2>
    <ul>
     <li>Refersh page.</li>
     <li>Share link to your friends that has given to you.</li>
     <li>Give sometime to your frinds to provide answer.</li>
    </ul>
    </div>
    `;

  }else{
     main.innerHTML="";
    for(ele of response.data){
      var div = document.createElement("div");
      div.classList.add("results");
      div.innerHTML = `
         <h3>${ele.name}</h3>
         <p>${ele.answer}</p>
         <hr>
      `;
      main.appendChild(div);
    }
  }
}
data();
