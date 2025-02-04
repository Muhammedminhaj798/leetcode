import axios from 'axios'

const promise = new Promise((resolve, reject) =>{
      let response = axios.get("https://jsonplaceholder.org/users");
      let datas = response.data
      if(datas){
        resolve("your data fetching succefully")
      }else{
        reject("your fetching is Failed")
      }
  })

  promise.then((data) => console.log(data)).catch((error) => console.log(error)).finally(()=> console.log("your task finally"));