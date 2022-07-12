import React from "react";

import { FaTimes, FaUserMinus, FaUserPlus } from "react-icons/fa";

const Member = ({ member, onDelete, onToggle, onPlus }) => {

  let tokenaddress = member.netad ? member.netad : "Missing token address";
  let emailaddress = member.email ? member.email : "Missing email provided";
  let membertitle = member.title ? member.title : "Missing title";

  return (
    <div
      className={`member ${member.active && "active"}`}
      onDoubleClick={() => onToggle(member.id)}
    >
      <h3>
        {member.name}{" "}
        {<FaUserMinus style={{ color: "red", cursor: "pointer" }} />}
        {
          <FaUserPlus
            style={{ color: "green", curson: "pointer" }}
            onClick={() => onPlus(member.netad)}
          />
        }
        {
          <FaTimes
            style={{ color: "green", cursor: "pointer" }}
            onClick={() => onDelete(member.id)}
          />
        }
      </h3>
      <p>{membertitle}</p>
      <p>{tokenaddress}</p>
      <p>{emailaddress}</p>
    </div>
  );
};

export default Member;
