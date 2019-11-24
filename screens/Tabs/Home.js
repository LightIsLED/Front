import React from "react";
import { ScrollView } from "react-native";
import Loader from "../../components/Loader";
import CalendarView from "../../components/Calendar";

const GET_SCHEDULES = () => {
    const data = {
        scheName: "당뇨약",
        scheHour: 8,
        scheMin: 30
    };
    const loading = false;
    return { loading, data };
};

export default () => {
    const { loading, data } = GET_SCHEDULES();
    // console.log(loading, data); //처음에 loading(true), data(null) -> 두번째부터 loading(false)), data(data)
    return (
        <ScrollView>
            {loading ? <Loader /> : <CalendarView data={data} />}
        </ScrollView>
    );
};
