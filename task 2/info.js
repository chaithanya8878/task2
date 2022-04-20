const GET_USER="https://jsonplaceholder.typicode.com/users";
let users = []
const getuser =async()=>{
    try{
      const result = await fetch(GET_USER)
      const jsonresult = await result.json();

      users =  jsonresult;
      main()
    }
    catch(err){
      console.log("error",err);
    }
};
async function info(i){
   var queryString = "?" + users[i]["id"]  ; 
   window.location.href = "Postpage.html" + queryString; 
}
async function main(){
  const divbodyEl = document.querySelector("table");
  for (let i = 0; i < users.length; i++) {
      divbodyEl.innerHTML += `
              <tr >
                  <td><b>${users[i]["name"]}</b></td>
                  <td >${users[i]["email"]}</td>
                  <td >${users[i]["username"]}</td>
                  <td><button onclick="info(${i})">VIEW MORE</button></td>
              </tr>
            <br>
          `;
  }
}

var id = decodeURIComponent(window.location.search); 
console.log(id)
id = parseInt(id.substring(1)); 


const GET_POST = "https://jsonplaceholder.typicode.com/posts";
const getpost = async() => {
    try{
      const result= await fetch(GET_POST);
      const jsonresult=await result.json();

      return jsonresult;
    }
    catch(err){
      console.log("error",err);
      return [];
    }
};

async function posting() {
    const posts = await getpost();
    const userposts = posts.filter(d => d.userId === id);

    const divbodyEl = document.getElementById('userpost')
    for (let i = 0; i < userposts.length; i++) {
        divbodyEl.innerHTML +=`
                <div class="divbody" >
                    <div ><b>${userposts[i]["title"]}</b></div>
                    <hr>
                    <div class="mid">${userposts[i]["body"]}</div>
                    <div class="right">postid:${userposts[i]["id"]}</div>
                </div>
              <br>`;
    }

}

function getId() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('rows');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="block";                 
      }
  }
  }





