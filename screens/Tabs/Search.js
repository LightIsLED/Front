import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import Loader from "../../components/Loader";
import MedicineList from "../../components/MedicineList";

//To Do : data 불러오는 query 작성
const GET_MEDICINES = () => {
    const data = [
        {
            medicineID: 1,
            medicineName: "고혈압약"
        },
        {
            medicineID: 2,
            medicineName: "당뇨약"
        }
    ];
    const loading = false;
    return { loading, data };
};

export default ({ navigation }) => {
    const { loading, data } = GET_MEDICINES();
    return (
        <ScrollView>
            {loading ? <Loader /> : <MedicineList data={data} />}
        </ScrollView>
    );
};
