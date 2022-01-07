
import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Pull from './component/Pull';
console.log("inside app.js");

function App() {
  
  const [sendurl,setsendurl] = useState("/posts");
  return (
    
    <>
   
    <h1>hello there</h1>
    <form>
      <p>
        <label>Select one option</label>
       <select onChange={(e)=>setsendurl(e.target.value)}>
          <option value="/posts">Posts</option>
          <option value="/comments">Cooments</option>
          <option value="/albums">Albums</option>
          <option value="/photos">Photos</option>
          <option value="/todos">ToDos</option>
          <option value="/users">Users</option>
       </select>
      </p>
      
    </form>
    <Pull mainurl={sendurl} />
    </>
  );
}

export default App;
