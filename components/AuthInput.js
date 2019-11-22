import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import constants from "../constants";

const Container = styled.View`
    margin-bottom: 10px;
`;

const FieldName = styled.Text`
    padding: 5px;
    color: ${props => props.theme.blueColor};
`;

const TextInput = styled.TextInput`
    width: ${constants.width / 1.6};
    padding: 10px;
    border: 0.8px solid ${props => props.theme.blueColor};
    border-radius: 4px;
`;

const AuthInput = ({
    field,
    placeholder,
    value,
    keyboardType = "default",
    autoCapitalize = "none",
    returnKeyType = "done",
    onChange,
    onSubmitEditing = () => null,
    autoCorrect = true
}) => (
    <Container>
        <FieldName>{field}</FieldName>
        <TextInput
            onChangeText={onChange}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            placeholder={placeholder}
            autoCapitalize={autoCapitalize}
            onSubmitEditing={onSubmitEditing}
            autoCorrect={autoCorrect}
            value={value}
        />
    </Container>
);

AuthInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    keyboardType: PropTypes.oneOf([
        "default",
        "number-pad",
        "decimal-pad",
        "numeric",
        "email-address",
        "phone-pad"
    ]),
    autoCapitalize: PropTypes.oneOf([
        "none",
        "sentences",
        "words",
        "characters"
    ]),
    onChange: PropTypes.func.isRequired,
    returnKeyType: PropTypes.oneOf(["done", "go", "next", "search", "send"]),
    onSubmitEditing: PropTypes.func,
    autoCorrect: PropTypes.bool
};

export default AuthInput;
