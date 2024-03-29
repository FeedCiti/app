import React, { useState } from 'react';
import { Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RadioForm from 'react-native-simple-radio-button';
import { useSelector } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import styled from 'styled-components';
import { Formik } from 'formik';
import feedciti from '../apis/feedciti';

import Fonts from '../../config/Fonts';

const GivingContainer = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.white};
`;

const GivingContent = styled.View`
    flex-direction: column;
    margin: 25px 20px;
`;

const HeadingText = styled.Text`
    font-family: ${Fonts.F700};
    font-size: 27px;
`;

const SubHeading = styled.Text`
    margin-top: 9px;
    font-size: 18px;
    margin-bottom: 16px;
    font-family: ${Fonts.F600};
    color: ${(props) => props.theme.gray500};
`;

const QuestionContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

const GivingQuestion = styled.Text`
    font-size: 16px;
    font-family: ${Fonts.F800};
    color: ${(props) => props.theme.gray350};
`;

const GiveSwitch = styled.Switch`
    transform: scale(0.65, 0.65);
`;

const Divider = styled.View`
    height: 1.5px;
    margin-top: 8px;
    background-color: ${(props) => props.theme.divider};
`;

const GivingInputMsg = styled.TextInput`
    height: 150px;
    margin-top: 9px;
    font-size: 20px;
    color: ${(props) => props.theme.gray800};
    font-family: ${Fonts.F700};
`;

const SubmitBtn = styled.TouchableOpacity`
    border-radius: 10px;
    margin: auto;
    width: 150px;
    background-color: ${(props) => props.theme.giveBlue};
`;

const SubmitTxt = styled.Text`
    margin: auto;
    padding: 10px;
    justify-content: center;
    color: ${(props) => props.theme.white};
    font-family: ${Fonts.F700};
    font-size: 19px;
`;

function GivingScreen() {
    const navigation = useNavigation();

    const GIVEN_NAME = useSelector((state) => state.authReducer.user.given_name);

    const { TOKEN } = useSelector((state) => ({
        TOKEN: state.authReducer.token
    }));

    const [isEnabled, setIsEnabled] = useState(false);

    const [valueRadio, setRadioValue] = useState(0);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    const radio_props = [
        { label: 'Food', value: 1 },
        { label: 'Money', value: 2 },
        { label: 'Clothes', value: 3 },
        { label: 'Medicine', value: 4 }
    ];

    const handleSubmit = (values) => {
        Geolocation.getCurrentPosition((pos) => {
            const data = {
                lat: pos.coords.latitude,
                lon: pos.coords.longitude,
                give_type: values.type,
                anonymous: values.anonymous,
                message: values.description
            };
            feedciti
                .post('/api/give', data, {
                    headers: {
                        Authorization: `Bearer ${TOKEN}`
                    }
                })
                .then((res) => {
                    navigation.navigate('HomeScreen');
                    Alert.alert('Submission Successful', 'Thank you for giving back');
                });
        });
    };

    // TODO: Disable viewing this until a user is authenticated
    return (
        <Formik
            initialValues={{ type: 0, anonymous: false, description: '' }}
            onSubmit={handleSubmit}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <GivingContainer>
                    <GivingContent>
                        {GIVEN_NAME ? (
                            <HeadingText>Thank you, {GIVEN_NAME}.</HeadingText>
                        ) : (
                            <HeadingText>Thank you, Name.</HeadingText>
                        )}
                        <SubHeading>Lets continue to change lives.</SubHeading>
                        <GivingQuestion style={{ marginBottom: 8, marginTop: 12 }}>
                            What did you give?
                        </GivingQuestion>
                        <RadioForm
                            radio_props={radio_props}
                            initial={-1}
                            formHorizontal
                            labelHorizontal
                            selectedButtonColor={'#2ecc71'}
                            buttonColor={'#cecece'}
                            animation
                            buttonSize={6}
                            borderWidth={0.4}
                            buttonOuterSize={18}
                            buttonWrapStyle={{ marginRight: 5 }}
                            labelStyle={{
                                alignItems: 'center',
                                marginRight: 5,
                                fontSize: 15,
                                color: '#cecece',
                                fontFamily: Fonts.F800
                            }}
                            onPress={(value) => {
                                handleChange('type');
                                values.type = value;
                            }}
                        />
                        <Divider />
                        <QuestionContainer style={{ marginTop: 9 }}>
                            <GivingQuestion>Give anonymously?</GivingQuestion>
                            <GiveSwitch
                                trackColor={{ false: '#CACACA', true: '#4FE64A' }}
                                thumbColor={values.anonymous ? '#fff' : '#f4f3f4'}
                                ios_backgroundColor='#CACACA'
                                onValueChange={() => {
                                    toggleSwitch();
                                    handleChange('anonymous');
                                    values.anonymous = !values.anonymous;
                                }}
                                value={values.anonymous}
                            />
                        </QuestionContainer>
                        <GivingInputMsg
                            maxLength={57}
                            multiline
                            placeholder='Write a quick description...'
                            onChangeText={handleChange('description')}
                            onBlur={handleBlur('description')}
                            value={values.description}
                        />
                        <SubmitBtn onPress={handleSubmit}>
                            <SubmitTxt>Submit</SubmitTxt>
                        </SubmitBtn>
                    </GivingContent>
                </GivingContainer>
            )}
        </Formik>
    );
}

export default GivingScreen;
