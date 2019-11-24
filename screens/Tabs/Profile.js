import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import Loader from "../../components/Loader";
import UserProfile from "../../components/UserProfile";

//To Do : data 불러오는 query 작성
const GET_USER = () => {
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

export default ({ navigation }) => {
    const { loading, data } = GET_USER();
    return (
        <ScrollView>
            {loading ? <Loader /> : <UserProfile data={data} />}
        </ScrollView>
    );
};
