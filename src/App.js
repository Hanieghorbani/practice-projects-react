import "./bts/bootstrap.min.css"
import './App.css'

import Counter from "./practice/counter";
import Temp from "./practice/temp";
import NotifCount from "./practice/notifCount";
import ListUser from "./practice/users/ListUser";
import Inputs from './practice/inputs'
import Form from './practice/Form/Form'

export default function App() {
  return (
    <div className="App">
     {/* practice */}
      {/* <Counter /> */}
      {/* <Temp /> */}
      {/* <NotifCount /> */}
      {/* <ListUser/> */}
      {/* <Inputs /> */}
      <Form />
    </div>
  );
}