
import { useState } from "react";
let c = 0;
console.log("inside pull .js")
let p=[];
function Pull(props) {
  

  console.log(props.mainurl);
  const [result, setResult] = useState(p);

  let fetchurl = "https://jsonplaceholder.typicode.com" + props.mainurl;
  console.log(fetchurl);
  
  fetch(fetchurl)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      console.log(c++);
      p=json;
      
      console.log("p",p);
      
    });
    const sendcommand=()=>{setResult(p)};
    let tab=result.map((e)=>{return(<>
    <tr>
      <td>{e.id}</td>
      <td>{e.userId}</td>
      <td>{e.title}</td>
    </tr>

    </>)})

  return (

    <>
    <button  onClick={sendcommand}>submit</button>
   <h1>sagar</h1>
   <table>
   <thead>
     <th>id</th>
     <th>userId</th>
     <th>title</th>
     </thead>
     <tbody>
       {tab}
     </tbody>
   </table>
  
    </>
  );
}

export default Pull;
