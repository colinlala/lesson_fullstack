import { useState, useEffect } from "react";
import "./App.css";
import HelloComponent from "./Hello";
import NameEditComponent from "./nameEdit";

function App() {
  const [name, setName] = useState("defaultUserName");
  const [editingName, setEditingName] = useState("defaultUserName");
  // const setUserNameState = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   setName(e.target.value)
  // }
  const setUserNameState = () => {
    setName(editingName);
  };

  const loadUserName = () => {
    setTimeout(() => {
      setName("name from async call");
      setEditingName("name from async call");
    }, 1500);
  };

  useEffect(() => {
    loadUserName();
  }, []);
  return (
    <div className="App">
      <HelloComponent userName={name} userAge={1} />
      <NameEditComponent
        initialUserName={name}
        editingName={editingName}
        onNameUpdated={setUserNameState}
        onEditingNameUpdated={setEditingName}
        disabled={editingName == "" || editingName === name}
      />
    </div>
  );
}

export default App;
