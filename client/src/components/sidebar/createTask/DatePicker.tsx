import { useState } from "react";

interface Props {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SimpleDatePicker = ({ handleInput }:Props) => {
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);

  function testHandle(e: React.ChangeEvent<HTMLInputElement>) {
    setDate(e.target.value);
    handleInput(e);
  }

  function resetToToday() {
    setDate(today);
  }

  return (
    <div style={{ display: "block", height: "81px" }}>
      <label htmlFor="deadline" style={{ display: "flex" }}>
        Selecciona una fecha
      </label>
      <input
        type="date"
        id="deadline"
        name="deadline"
        value={date}
        onChange={testHandle}
        onFocus={resetToToday}
        min={today}
        style={{
          padding: "13px",
          fontSize: "16px",
          fontFamily: "Roboto",
          fontWeight: "500",
          minWidth: "100%",
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
