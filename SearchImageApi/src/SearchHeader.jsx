import { useState } from "react";

function SearchHeader({ search }) {
  const [valueInput, setValueInput] = useState("");

  const inputChange = (event) => {
    setValueInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueInput);
  };

  return (
    <div className="Search-div">
      <form onSubmit={handleFormSubmit}>
        <label>Search Project</label>
        <input
          type="text"
          value={valueInput}
          placeholder="Search here"
          onChange={inputChange}
        />
      </form>
    </div>
  );
}

export default SearchHeader;
