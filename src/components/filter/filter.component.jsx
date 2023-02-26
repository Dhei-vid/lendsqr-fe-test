import "./filter.styles.scss";

const Filter = () => {
  return (
    <div className="filter-container">
      <form className="filter-form">
        <label>
          Organization
          <select name="organization" id="organization" className="Organ">
            <option value="default" hidden>
              Select
            </option>
            <option value="org1">org1</option>
            <option value="org3">org3</option>
            <option value="org4">org4</option>
          </select>
        </label>

        <label>
          Username
          <input name="username" type="text" placeholder="User" />
        </label>

        <label>
          Email
          <input name="email" type="text" placeholder="Email" />
        </label>

        <label>
          Date
          <input name="date" placeholder="Date" type="date" />
        </label>

        <label>
          Phone Number
          <input name="phone" type="text" placeholder="Phone Number" />
        </label>

        <label>
          Status
          <select name="status" id="status">
            <option value="default" hidden>
              Select
            </option>
            <option value="pending">Pending</option>
            <option value="blacklisted">Blacklisted</option>
            <option value="active">Active</option>
          </select>
        </label>

        <div className="filter-button-container">
          <button className="btn reset-btn">Reset</button>
          <button className="btn filter-btn">Filter</button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
