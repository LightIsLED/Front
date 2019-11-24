import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import constants from "../constants";
import { Text, View, StyleSheet, FlatList } from "react-native";

const MedicineList = ({ data }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.medicine}>
                        <Text style={styles.item}>{item.medicineName}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    medicine: {
        marginTop: 30,
        marginBottom: 0,
        marginLeft: 50,
        marginRight: 50,
        borderWidth: 0.5,
        borderRadius: 50,
        width: "75%"
    },
    item: {
        margin: 10,
        padding: 10,
        fontSize: 18,
        height: 50
    }
});

export default MedicineList;
