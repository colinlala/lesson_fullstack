import React, { useState } from "react";

interface Props {
  userName: string;
  onNameUpdated: (newName: string) => void;
}

const NameEditComponent: React.FC<Props> = (props) => {
  const [editingName, setEditingName] = useState(props.userName);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingName(e.target.value);
  };
  const onNameSubmit = () => {
    props.onNameUpdated(editingName);
  };
  return (
    <>
      <strong>vscode是用ts写出来的</strong>
      <br />
      {props.userName}
      <input value={editingName} onChange={onChange} />
      <button onClick={onNameSubmit}>change</button>
    </>
  );
};
export default NameEditComponent;
