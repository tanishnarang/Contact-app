import user from "../images/user.png";
import { Link } from "react-router-dom";

const ContactCard = ({ contact, clickHandler }) => {
  const { id, name, email } = contact;

  return (
    <div className="item flex items-center">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content flex-grow pl-2">
        <Link to={`/contact/${id}`} state={{ contact }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon ml-auto cursor-pointer"
        style={{ color: "red", float: "right" }}
        onClick={() => {
          clickHandler(id);
        }}
      ></i>
    </div>
  );
};

export default ContactCard;
