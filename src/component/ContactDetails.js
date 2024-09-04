import { Link, useLocation } from "react-router-dom";
import user from "../images/user.jpg";
const ContactDetails = () => {
  const location = useLocation();
  const { contact } = location.state;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{contact.name}</div>
          <div className="description">{contact.email}</div>
        </div>
      </div>
      <Link to="/">
        <button
          className="ui button blue"
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "10px auto",
          }}
        >
          Back to Contact List
        </button>
      </Link>
    </div>
  );
};

export default ContactDetails;
