import { useState } from "react";

interface Props {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SimpleDatePicker: React.FC<Props> = ({ handleInput }) => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0])

  function testHandle(e:any){
    setDate(e.target.value)
    handleInput(e)
  }

  return (
    <div>
      <label htmlFor="deadline" style={{ display: "block", marginBottom: "8px" }}>
        Selecciona una fecha
      </label>
      <input
        type="date"
        id="deadline"
        name="deadline"
        value={date}
        onChange={testHandle}
        style={{
          padding: "10px",
          fontSize: "16px",
          fontFamily:"Roboto",
          fontWeight:'500',
          minWidth:'100%',
          border: "1px solid #ccc",
          borderRadius: "4px",
          width: "100%",
          maxWidth: "300px",
        }}
      />
    </div>
  );
};

export default SimpleDatePicker;