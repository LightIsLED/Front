import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import constants from "../constants";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ScheduleList = ({ data }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>복용 중인 약</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.schedule}>
                        <Text style={styles.item}>{item.scheName}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        margin: 20,
        fontSize: 22
    },
    schedule: {
        marginTop: 0,
        marginBottom: 20,
        marginLeft: 50,
        marginRight: 50,
        borderWidth: 0.5,
        borderRadius: 30,
        width: "75%"
    },
    item: {
        //borderWidth: 0.5,
        //borderRadius: 50,
        margin: 10,
        padding: 10,
        fontSize: 18,
        height: 50
    }
});

export default ScheduleList;
