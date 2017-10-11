const axios = require("axios")

const api = axios.create({
  baseURL: "https://api.github.com"
})

api.get("/search/issues?q=S03E02T02 in:title+repo:/seita-ifce/hello-js-v3/+state:open&sort=created&order=asc").then(ret => console.log(ret.data))