import { gql } from "apollo-boost";

export const CREATE_ACCOUNT = gql`
    mutation createAccount($userName: String, $birth: String, $sex: String) {
        createAccount(userName: $userName, birth: $birth, sex: $sex)
    }
`;
