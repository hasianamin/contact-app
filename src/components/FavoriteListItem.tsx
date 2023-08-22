import React, { Dispatch, useState } from "react";
import { Contact } from "./types"; // Define this type based on your data structure
import styled from "@emotion/styled";
import Avatar from "./Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faEdit,
  faTrash,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FavContact } from "../types";

const ListItem = styled.li`
  padding: 20px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
`;

const ContactName = styled.span`
  font-weight: bold;
  text-wrap: wrap;
`;

const PhoneNumberWrapper = styled.span`
  color: smoke-white;
`;

const PhoneNumberBox = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
  }
`;

const ButtonWrapper = styled.div`
  cursor: pointer;
  background-color: gray;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FavoriteListItem: React.FC<any> = ({ contact }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <ListItem>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Avatar
            first_initial={contact.first_name[0] || ""}
            second_initial={contact.last_name[0] || ""}
          />
          <ContactName>
            {contact.first_name} {contact.last_name}
          </ContactName>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          {/* <ButtonWrapper
            onClick={() =>
              addToFav({
                first_name: contact.first_name,
                last_name: contact.last_name,
                phone: contact.phones[0].number,
              })
            }
          >
            <FontAwesomeIcon icon={faStar} />
          </ButtonWrapper> */}
          <ButtonWrapper onClick={() => setIsShow(!isShow)}>
            {isShow ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
          </ButtonWrapper>
        </div>
      </div>
      <div style={{ marginTop: "1rem", display: isShow ? "block" : "none" }}>
        <PhoneNumberBox>
          <span style={{ fontWeight: "bold" }}>Phone numbers:</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <PhoneNumberWrapper>{contact.phone}</PhoneNumberWrapper>
          </div>
        </PhoneNumberBox>
        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}
        >
          {/* <ButtonWrapper
            onClick={() => {
              setSelectedData(contact);
              toggleModal();
            }}
          >
            <FontAwesomeIcon icon={faEdit} />
          </ButtonWrapper>
          <ButtonWrapper>
            <FontAwesomeIcon icon={faTrash} />
          </ButtonWrapper> */}
        </div>
      </div>
    </ListItem>
  );
};

export default FavoriteListItem;
