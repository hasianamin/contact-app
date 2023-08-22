import { gql } from "@apollo/client";

export const CONTACTS_QUERY = gql`
  query Contact($limit: Int, $offset: Int) {
    contact(limit: $limit, offset: $offset) {
      first_name
      last_name
      id
      phones {
        number
        id
      }
    }
  }
`;

export const CONTACTS_BY_ID_QUERY = gql`
  query Query_root($id: Int!) {
    contact_by_pk(id: $id) {
      first_name
      id
      last_name
      phones {
        number
        id
      }
    }
  }
`;

export const UPDATE_CONTACT_BY_ID_QUERY = gql`
  mutation Insert_contact_one(
    $where: contact_bool_exp!
    $set: contact_set_input
  ) {
    update_contact(where: $where, _set: $set) {
      affected_rows
    }
  }
`;
