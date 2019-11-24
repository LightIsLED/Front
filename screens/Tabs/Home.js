import React from "react";
import styled from "styled-components";
import Loader from "../../components/Loader";

const GET_SCHEDULES = () => {
    const data = {
        userID: 1,
        userName: "양지원",
        birth: 19980207,
        sex: "여자",
        accompanierName: "엄마",
        accompanierPhone: "01012345678"
    };
    const loading = false;
    return { loading, data };
};

const View = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export default () => {
    const { loading, data } = GET_SCHEDULES();
    // const { loading, data } = useQuery(FEED_QUERY);
    // console.log(loading, data); //처음에 loading(true), data(null) -> 두번째부터 loading(false)), data(data)
    return <View>{loading ? <Loader /> : null}</View>;
};
