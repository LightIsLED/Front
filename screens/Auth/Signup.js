import React, { useState } from "react";
import styled from "styled-components";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";
import { Alert } from "react-native";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN, CREATE_ACCOUNT } from "./AuthQueries";
import constants from "../../constants";

const Image = styled.Image`
    width: ${constants.width / 2.5};
`;

const View = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const SignupButtonContainer = styled.View`
    margin-top: 20px;
`;

export default ({ navigation }) => {
    //useInput 형태 정의
    const userNameInput = useInput("");
    const birthInput = useInput("");
    const sexInput = useInput("");
    const [loading, setLoading] = useState(false);
    //mutation
    const createAccountMutation = useMutation(CREATE_ACCOUNT, {
        variables: {
            userName: userNameInput.value,
            birth: birthInput.value,
            sex: sexInput.value
        }
    });
    const handleSingup = async () => {
        const { value: userName } = userNameInput;
        const { value: birth } = birthInput;
        const { value: sex } = sexInput;
        if (userName === "") {
            return Alert.alert("이름을 입력해주세요.");
        }
        if (birth === "") {
            return Alert.alert("생년월일을 선택해주세요.");
        }
        if (sex === "") {
            return Alert.alert("성별을 선택해주세요.");
        }
        try {
            setLoading(true);
            const {
                data: { createAccount }
            } = await createAccountMutation();
            if (createAccount) {
                Alert.alert("환영합니다!");
                navigation.navigate("Home"); //"login"
            }
        } catch (e) {
            console.log(e);
            Alert.alert("회원가입할 수 없습니다.", "다시 입력해주세요.");
        } finally {
            setLoading(false);
        }
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
                <Image
                    resizeMode={"contain"}
                    source={require("../../assets/logo.png")}
                />
                <AuthInput
                    {...userNameInput}
                    field="이름"
                    placeholder="홍길동"
                    autoCapitalize="words"
                />
                <AuthInput
                    {...birthInput}
                    field="생년월일"
                    placeholder="19990101"
                    autoCapitalize="words"
                />
                <AuthInput
                    {...sexInput}
                    field="성별"
                    placeholder="여자"
                    autoCapitalize="words"
                    // keyboardType="email-address"
                    // returnKeyType="send"
                    // autoCorrect={false}
                />
                <SignupButtonContainer>
                    <AuthButton
                        loading={loading}
                        onPress={handleSingup}
                        text="회원 가입"
                    />
                </SignupButtonContainer>
            </View>
        </TouchableWithoutFeedback>
    );
};
