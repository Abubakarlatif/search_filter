import './App.css';
import JSONDATA from "./MOCK_DATA.json"
import { useState } from "react"
function App() {
  const [search, setSearch] = useState("")
  return (
    <div className="container">
      <input type='text' 
      placeholder='Search...' 
      onChange={(event) => {
        setSearch(event.target.value); 
        }} />
      {JSONDATA.filter((val)=> {
        if (search == "") {
          return val
        } else if (val.first_name.toLowerCase().includes(search.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return (
          <div className='user-d' key={key}>
            <p>
              {val.first_name}
            </p>
          </div>)
      }
      )}
    </div>
  );
}

export default App;
