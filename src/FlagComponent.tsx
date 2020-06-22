import React from "react";

const FlagComponent = props => {
  return (
    <React.Fragment>
      <p>Language: English (US)</p>
      <div className="form-group">
        <label htmlFor="languageSelect">Change Language</label>
        <select className="form-control" id="languageSelect">
          <option>English</option>
          <option>French</option>
          <option>German</option>
          <option>Japanese</option>
        </select>
      </div>
      <img
        src="images/flag-france.png"
        className="card-img-top"
        style={{ height: "15rem" }}
        alt="..."
      />
    </React.Fragment>
  );
};

export default FlagComponent;
