interface Props {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SimpleDatePicker: React.FC<Props> = ({ handleInput }) => {

  function testHandle(e:any){
    // Usamos UTC para evitar ajustes
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
        onChange={testHandle}
        style={{
          padding: "8px",
          fontSize: "16px",
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