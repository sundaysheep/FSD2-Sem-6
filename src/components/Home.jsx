import { TextFieldBasic, FormControlRole } from "./MaterialUIComponents";

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to the Home Page</h1>

      <div className="input-fields">
        <TextFieldBasic labelText={"Enter Name"} width="150px"/>
        <FormControlRole />
      </div>

      

    </div>
  );
}