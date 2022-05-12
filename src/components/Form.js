import "./Form.css";

export default function Form() {
  return (
    <div className="input-form">
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
