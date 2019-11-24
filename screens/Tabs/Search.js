import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import Loader from "../../components/Loader";
import ScheduleList from "../../components/ScheduleList";

//To Do : data 불러오는 query 작성
const GET_MEDICINES = () => {
    const data = [
        {
            scheID: 1,
            scheName: "고혈압약"
        },
        {
            scheID: 2,
            scheName: "당뇨약"
        }
    ];
    const loading = false;
    return { loading, data };
};

export default ({ navigation }) => {
    const { loading, data } = GET_MEDICINES();
    return (
        <ScrollView>
            {loading ? <Loader /> : <ScheduleList data={data} />}
        </ScrollView>
    );
};
