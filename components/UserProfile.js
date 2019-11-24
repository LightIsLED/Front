import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import constants from "../constants";
import { View, StyleSheet } from "react-native";

const Text = styled.Text`
    text-align: left;
    font-weight: 400;
    font-size: 18;
    padding: 5px 20px 5px 17px;
`;

class UserElement extends Component {
    render() {
        return (
            <View style={styles.fieldContainer}>
                <Text style={styles.fieldName}>{this.props.field}</Text>
                <Text style={styles.fieldContent}>{this.props.element}</Text>
            </View>
        );
    }
}

const UserProfile = ({ data }) => {
    let accompanierInfo = "정보없음";
    if (data.hasOwnProperty("accompanierName")) {
        accompanierInfo = data.accompanierName + "\n\n" + data.accompanierPhone;
    }
    return (
        <View>
            <UserElement field={"이름"} element={data.userName}></UserElement>
            <UserElement field={"생년월일"} element={data.birth}></UserElement>
            <UserElement field={"성별"} element={data.sex}></UserElement>
            <UserElement
                field={"보호자"}
                element={accompanierInfo}
            ></UserElement>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    fieldContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        padding: 10,
        marginTop: 30,
        marginBottom: 0,
        marginLeft: 50,
        marginRight: 50,
        borderRadius: 10,
        width: "75%"
    },
    fieldName: {
        color: "#262626"
    },
    fieldContent: {
        color: "#009DFE",
        width: "70%"
    }
});

export default UserProfile;
