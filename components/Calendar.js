import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import moment from "moment";
import CalendarStrip from "react-native-calendar-strip";
import "moment";
import "moment/locale/fr";

//달력 월명, 요일명 초기화
moment.updateLocale("fr", {
    months: [
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
    monthsShort: [
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
    weekdays: [
        "일요일",
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일"
    ],
    weekdaysShort: ["일", "월", "화", "수", "목", "금", "토"]
});

// Calendar Component
class CalendarView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: moment()
        };
    }
    render() {
        return (
            <View>
                <CalendarStrip
                    calendarAnimation={{ type: "sequence", duration: 30 }}
                    style={{ height: 120, paddingTop: 20, paddingBottom: 20 }}
                    calendarHeaderStyle={{ color: "white" }}
                    calendarColor={"#009DFE"}
                    dateNumberStyle={{ color: "white" }}
                    dateNameStyle={{ color: "white" }}
                    highlightDateNameStyle={{ color: "black" }}
                    highlightDateNumberStyle={{
                        color: "black",
                        borderBottomColor: "black",
                        borderBottomWidth: 2
                    }}
                    iconLeft={require("../assets/left-arrow.png")}
                    iconRight={require("../assets/right-arrow.png")}
                    iconContainer={{ flex: 0.1 }}
                    selectedDate={this.state.selectedDate}
                    ref={ref => {
                        this.calendar = ref;
                    }}
                />
                <Button
                    title="Hit me and check out the console"
                    onPress={() => {
                        console.log(
                            this.calendar.getSelectedDate().format("YYYY-MM-DD")
                        );
                    }}
                ></Button>
            </View>
        );
    }
}

export default CalendarView;
