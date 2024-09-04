import user from "../images/user.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ContactCard = ({ contact, clickHandler }) => {
  const { id, name, email } = contact;

  const handleDelete = () =>
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2185D0",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        clickHandler(id);
        Swal.fire({
          title: "Deleted!",
          text: "contact has been deleted.",
          icon: "success",
          ButtonColor: "#2185D0",
        });
      }
    });

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
        onClick={handleDelete}
      ></i>
    </div>
  );
};

export default ContactCard;
