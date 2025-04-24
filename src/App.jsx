import { HashRouter as Router, Routes ,Route  } from "react-router-dom"
import { User } from "./pages/user/User"
import { Register } from "./pages/register/Register"
import { Template } from "./partials/template/Template";
import { Edit } from "./pages/edit/Edit";

function App() {


  return (
    <>
       <Router>
        <Routes>
          
          <Route path="/" element= {<Template><User/></Template>}/>
          <Route path="/register" element= {<Register/>}/>
          <Route path="/edit/:id" element= {<Edit/>}/>

        </Routes>
       </Router>
    </>
  )
}

export default App;
