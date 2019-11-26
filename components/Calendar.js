import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Agenda, LocaleConfig } from "react-native-calendars";

// 월명, 요일명 config
LocaleConfig.locales["fr"] = {
    monthNames: [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월"
    ],
    monthNamesShort: [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월"
    ],
    dayNames: [
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일",
        "일요일"
    ],
    dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
    today: "오늘"
};
LocaleConfig.defaultLocale = "fr";

export default class AgendaScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: {}
        };
    }

    render() {
        return (
            <Agenda
                items={this.state.items}
                loadItemsForMonth={this.loadItems.bind(this)}
                selected={"2019-11-25"}
                renderItem={this.renderItem.bind(this)}
                renderEmptyDate={this.renderEmptyDate.bind(this)}
                rowHasChanged={this.rowHasChanged.bind(this)}
                removeClippedSubviews={true}
            />
        );
    }

    loadItems(day) {
        var newItems = {
            "2019-11-24": [],
            "2019-11-25": [
                {
                    intake: 1,
                    scheName: "당뇨약",
                    scheHour: "10",
                    scheMin: "30"
                },
                {
                    intake: 0,
                    scheName: "고혈압약",
                    scheHour: "12",
                    scheMin: "00"
                }
            ],
            "2019-11-26": [
                {
                    intake: 0,
                    scheName: "고혈압약",
                    scheHour: 12,
                    scheMin: "00"
                }
            ],
            "2019-11-27": [],
            "2019-11-28": []
        };
        this.setState({
            items: newItems
        });
    }

    //To Do : 오전 오후 구분하는 함수

    renderItem(item) {
        return (
            <View style={styles.item}>
                <View style={styles.circle}></View>
                <Text style={styles.itemText}>{item.scheName}</Text>
                <Text style={styles.itemText}>
                    오전 {item.scheHour} : {item.scheMin}
                </Text>
            </View>
        );
    }

    renderEmptyDate() {
        return (
            <View style={styles.emptyDate}>
                <Text>복용할 약이 없습니다.</Text>
            </View>
        );
    }

    rowHasChanged(r1, r2) {
        return r1.scheName !== r2.scheName;
    }

    timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split("T")[0];
    }
}

const styles = StyleSheet.create({
    item: {
        //backgroundColor: "white",
        flex: 1,
        //borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 30,
        height: 70,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    circle: {
        width: 15,
        height: 15,
        borderRadius: 100 / 2,
        backgroundColor: "green"
    },
    itemText: {
        fontSize: 20
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    }
});
