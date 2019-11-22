import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import Loader from "../../components/Loader";
import { useQuery } from "react-apollo-hooks";

const FEED_QUERY = gql`
    {
        seeFeed {
            id
            location
            caption
            user {
                id
                username
            }
            files {
                id
                url
            }
            likeCount
            isLiked
            comments {
                id
                text
                user {
                    id
                    username
                }
            }
            createdAt
        }
    }
`;

const View = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export default () => {
    const loading = false; //추후 수정 필요
    // const { loading, data } = useQuery(FEED_QUERY);
    // console.log(loading, data); //처음에 loading(true), data(null) -> 두번째부터 loading(false)), data(data)
    return <View>{loading ? <Loader /> : null}</View>;
};
