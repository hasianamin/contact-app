import React, { Dispatch } from "react";
import { Contact } from "./types"; // Define this type based on your data structure
import ContactListItem from "./ContactListItem";
import styled from "@emotion/styled";
import { FavContact } from "../types";

interface ContactListProps {
  contacts: Contact[];
  onChangePagination: (value: number) => void;
  selectedPage: number;
  toggleModal: () => void;
  setSelectedData: Dispatch<any>;
  addToFav: (data: FavContact) => Promise<void>;
}

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0 0 2rem;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

const PaginationWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 1rem;
`;

const PaginationBox = styled.div`
  padding: 10px;
  cursor: pointer;
`;

const Pagination = () => {
  let temp = [];
  for (let i = 1; i <= 10; i++) {
    temp.push(<PaginationBox>{i}</PaginationBox>);
  }
  return <PaginationWrapper>{temp}</PaginationWrapper>;
};

const ContactList: React.FC<ContactListProps> = ({
  contacts,
  onChangePagination,
  selectedPage,
  toggleModal,
  setSelectedData,
  addToFav,
}) => {
  return (
    <>
      <ListWrapper>
        {contacts?.map((contact) => (
          <ContactListItem
            id={contact?.id}
            toggleModal={toggleModal}
            key={contact?.id}
            contact={contact}
            setSelectedData={setSelectedData}
            addToFav={addToFav}
          />
        ))}
      </ListWrapper>
      <Pagination />
    </>
  );
};

export default ContactList;
