import React, { useEffect, useState } from "react";
import ContactList from "../components/ContactList";
import Card from "../components/Card";
import styled from "@emotion/styled";
import { useQuery } from "@apollo/client";
import { CONTACTS_QUERY, CONTACTS_BY_ID_QUERY } from "../queries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import Modal from "../components/Modal";
import Edit from "../components/Edit";
import { db } from "../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import ContactListItem from "../components/ContactListItem";
import FavoriteListItem from "../components/FavoriteListItem";
import { FavContact } from "../types";

const BodyWrapper = styled.div`
  background-color: #17b486;
  min-height: 100vh;
  color: white;
  padding-top: 5%;
`;

const TitleWrapper = styled.div`
  padding: 1rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
`;

const SubTitleWrapper = styled.div`
  padding: 0.3rem 1rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
`;

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0 0 2rem;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

const ContactListPage: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState(1);
  const LIMIT = 10;

  const handlePagination = (value: number): void => {
    setSelectedPage(value);
  };

  const { loading, error, data } = useQuery(CONTACTS_QUERY, {
    variables: { limit: 10, offset: 0 }, // Provide your desired variables here
  });

  const [selectedData, setSelectedData] = useState({
    id: 0,
    first_name: "",
    last_name: "",
    phones: [
      {
        number: "",
        id: 0,
      },
    ],
  });
  const [modal, setModal] = useState(false);
  const handleToggleModal = () => {
    setModal(!modal);
  };

  const {
    loading: loadingById,
    error: errorById,
    data: dataById,
  } = useQuery(CONTACTS_BY_ID_QUERY, {
    variables: { id: selectedData?.id },
  });

  const addToFav = async (data: FavContact) => {
    try {
      await addDoc(collection(db, "favorites"), {
        first_name: data.first_name,
        last_name: data.last_name,
        phone: data.phone,
      });
      fetchFav();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const [favContact, setFavContact] = useState([]);

  const fetchFav = async () => {
    await getDocs(collection(db, "favorites")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setFavContact(newData as any);
    });
  };
  useEffect(() => {
    fetchFav();
  }, []);

  return (
    <>
      <BodyWrapper>
        <Card>
          <TitleWrapper>
            <h1>My Contact List</h1>
          </TitleWrapper>
          <div>
            <SubTitleWrapper>
              <h2>
                Favorites <FontAwesomeIcon icon={faStar} />
              </h2>
            </SubTitleWrapper>
            <ListWrapper>
              {favContact?.length &&
                favContact?.map((contact: FavContact) => {
                  return <FavoriteListItem contact={contact} />;
                })}
            </ListWrapper>
          </div>
          <div>
            <SubTitleWrapper>
              <h2>
                Contacts <FontAwesomeIcon icon={faPeopleGroup} />
              </h2>
            </SubTitleWrapper>
            {!loading && !error && (
              <ContactList
                toggleModal={handleToggleModal}
                contacts={data?.contact}
                onChangePagination={handlePagination}
                selectedPage={selectedPage}
                setSelectedData={setSelectedData}
                addToFav={addToFav}
              />
            )}
          </div>
        </Card>
      </BodyWrapper>
      <Modal modal={modal} toggleModal={handleToggleModal}>
        {loadingById || errorById ? (
          <>loading</>
        ) : (
          <Edit
            dataById={dataById?.contact_by_pk}
            handleToggleModal={handleToggleModal}
          />
        )}
      </Modal>
    </>
  );
};

export default ContactListPage;
