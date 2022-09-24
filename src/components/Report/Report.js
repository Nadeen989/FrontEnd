import React from "react";
import Email from "../../assets/img/icons8-email-64.png";
import Card from "../Card/Card";
import URL from "../../assets/img/icons8-url-website-55.png";
import Phone from "../../assets/img/icons8-ringer-volume-48.png";
import { useNavigate } from "react-router-dom";

export const Report = () => {
  const navigate = useNavigate();
  return (
    <div
      id="Check"
      className="d-flex flex-column align-items-center px-5 mt-5 "
    >
      <div className="Check d-flex align-items-center">
        <Card
          title="Email"
          desc="Click here to check if the sender of email is spam before replying to it."
          image={Email}
          btn="Email Report"
          onClick={() => navigate("/reportEmail")}
        />
        <Card
          title="URL"
          desc="Click here to check if the URL is fraud before you click on it ."
          image={URL}
          btn="URL Report"
          // onClick={() => navigate('/reportURL')}
        />
        <Card
          title="PhoneNumber"
          desc="Click here to check if the PhoneNumber is fraud before answearing it. "
          image={Phone}
          btn="PhoneNumber Report "
          onClick={() => navigate("/phoneReport")}
        />
      </div>
    </div>
  );
};
export default Report;
