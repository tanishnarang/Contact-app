const ContactCard = ({ contact }) => {
  const { id, name, email } = contact;

  return (
    <div className="item">
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
        <div>
          <i
            className="trash alternate outline icon"
            style={{ color: "red", marginTop: "7px", float: "right" }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
