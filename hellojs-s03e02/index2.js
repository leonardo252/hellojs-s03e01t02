const axios = require("axios")

const api = axios.create({
  baseURL: "https://api.github.com"
})

api.get("/search/issues?q=S03E02T02 in:title+state:open&sort=created&order=asc").then(ret => { 
  const url = ret.data.items[0].comments_url;
    api.get(url).then(ret =>{
      const obj = ret.data;
      let tam = obj.length;
      for(let i =0; i<tam; i++){
        let comment = obj[i].body;
        let comper = comment.search("hellojs-s03e02");
        if (comper !== -1){
          let date = obj[i].created_at.slice(0,10);
          if(date <= "2017-10-13"){
            console.log("Nome: ", obj[i].user.login, "\nComentario : \n"+obj[i].body+"\n");

          }
        }
      }
    });
})


//
