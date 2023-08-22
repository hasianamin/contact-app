import React from "react";
import ContactList from "../components/ContactList";
import Card from "../components/Card";
import styled from "@emotion/styled";
import { useQuery } from "@apollo/client";
import { CONTACTS_QUERY } from "../queries";

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

const ContactFormPage: React.FC = () => {
  const { loading, error, data } = useQuery(CONTACTS_QUERY, {
    variables: { limit: 10, offset: 0 }, // Provide your desired variables here
  });

  return (
    <BodyWrapper>
      <Card>
        <TitleWrapper>
          <h1>My Contact List</h1>
        </TitleWrapper>
        <div>
          <SubTitleWrapper>
            <h2>Favourites ★</h2>
          </SubTitleWrapper>
        </div>
      </Card>
    </BodyWrapper>
  );
};

export default ContactFormPage;
