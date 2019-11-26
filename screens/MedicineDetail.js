import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import Loader from "../../components/Loader";
import ScheduleList from "../../components/Medicine";

//To Do : data 불러오는 query 작성
const GET_MEDICINE = () => {
    const data = [
        {
            scheID: 1,
            scheName: "고혈압약",
            startDate: 2019 - 11 - 20,
            endDate: 2019 - 12 - 20,
            mediList: [
                { mediName: "고혈압약1", dose: "1알" },
                { mediName: "고혈압약2", dose: "2알" }
            ],
            timeList: ["9:00", "12:00", "18:00"]
        },
        {
            scheID: 2,
            scheName: "당뇨병약",
            startDate: 2019 - 11 - 23,
            endDate: 2019 - 12 - 24,
            mediList: [
                { mediName: "당뇨병약1", dose: "1알" },
                { mediName: "당뇨병약2", dose: "30ml" }
            ],
            timeList: ["10:00", "13:00", "19:00"]
        }
    ];
    const loading = false;
    return { loading, data };
};

export default ({ navigation }) => {
    const { loading, data } = GET_MEDICINE();
    return (
        <ScrollView>
            {loading ? <Loader /> : <Medicine data={data} />}
        </ScrollView>
    );
};
