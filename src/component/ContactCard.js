import user from "../images/user.png";

const ContactCard = ({ contact, clickHandler }) => {
  const { id, name, email } = contact;

  return (
    <div className="item flex items-center">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content flex-grow pl-2">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon ml-auto"
        style={{ color: "red", float: "right" }}
        onClick={() => {
          clickHandler(id);
        }}
      ></i>
    </div>
  );
};

export default ContactCard;
