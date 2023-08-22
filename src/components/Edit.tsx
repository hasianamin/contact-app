import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import { useMutation } from "@apollo/client";
import { UPDATE_CONTACT_BY_ID_QUERY, CONTACTS_QUERY } from "../queries";

interface EditProps {
  dataById: {
    first_name: string;
    last_name: string;
    id: number;
  };
  handleToggleModal: () => void;
}

const FormContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  width: 100%;
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Error = styled.div`
  color: red;
`;

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
});

const Edit: React.FC<EditProps> = ({ dataById, handleToggleModal }) => {
  const initialValues = {
    first_name: dataById?.first_name || "",
    last_name: dataById?.last_name || "",
  };

  const [updateContact] = useMutation(UPDATE_CONTACT_BY_ID_QUERY, {
    refetchQueries: [{ query: CONTACTS_QUERY }],
  });

  const handleSubmit = async (values: any) => {
    await updateContact({
      variables: {
        where: {
          id: {
            _eq: dataById?.id,
          },
        },
        set: {
          first_name: values?.first_name,
          last_name: values?.last_name,
        },
      },
    });
    handleToggleModal();
  };

  return (
    <FormContainer>
      <h3>Edit Form</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormField>
            <Label htmlFor="first_name">First Name</Label>
            <Field type="text" id="first_name" name="first_name" as={Input} />
            <ErrorMessage name="first_name" component={Error} />
          </FormField>

          <FormField>
            <Label htmlFor="last_name">Last Name</Label>
            <Field type="text" id="last_name" name="last_name" as={Input} />
            <ErrorMessage name="last_name" component={Error} />
          </FormField>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default Edit;
