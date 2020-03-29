import React, { useState } from 'react';
import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel
} from 'react-native-simple-radio-button';
import styled from 'styled-components';

import Fonts from '../../config/Fonts';
import { MessageDateUI } from '../components/globalUI/GlobalUI';

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
    color: ${(props) => props.theme.gray800}
    font-family: ${Fonts.F700};
`;

function GivingScreen() {
    const [isEnabled, setIsEnabled] = useState(false);

    const [valueRadio, setRadioValue] = useState(0);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    console.log(valueRadio);

    const radio_props = [
        { label: 'Food', value: 1 },
        { label: 'Money', value: 2 },
        { label: 'Clothes', value: 3 },
        { label: 'Medicine', value: 4 }
    ];

    return (
        <GivingContainer>
            <GivingContent>
                <HeadingText>Thank you, Name.</HeadingText>
                <SubHeading>Lorem ipsum delorem </SubHeading>
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
                        setRadioValue(value);
                    }}
                />
                {/* <RadioForm formHorizontal animation initial={-1}> */}
                {/*     {radio_props.map((obj, i) => ( */}
                {/*         <RadioButton labelHorizontal key={obj.label}> */}
                {/*             <RadioButtonInput */}
                {/*                 obj={obj} */}
                {/*                 index={i} */}
                {/*                 isSelected={valueRadio === i} */}
                {/*                 onPress={(valueTwo) => { */}
                {/*                     setRadioValue(valueTwo); */}
                {/*                 }} */}
                {/*                 borderWidth={1.4} */}
                {/*                 buttonInnerColor={'#2ecc71'} */}
                {/*                 buttonOuterColor={ */}
                {/*                     valueRadio === i ? '#cecece' : '#cecece' */}
                {/*                 } */}
                {/*                 buttonSize={8} */}
                {/*                 buttonOuterSize={20} */}
                {/*                 buttonWrapStyle={{ marginLeft: 10 }} */}
                {/*             /> */}
                {/*             <RadioButtonLabel */}
                {/*                 obj={obj} */}
                {/*                 index={i} */}
                {/*                 labelHorizontal */}
                {/*                 onPress={(valueTwo) => { */}
                {/*                     setRadioValue(valueTwo); */}
                {/*                 }} */}
                {/*                 labelStyle={{ */}
                {/*                     fontSize: 15, */}
                {/*                     color: '#cecece', */}
                {/*                     fontFamily: Fonts.F700 */}
                {/*                 }} */}
                {/*                 labelWrapStyle={{}} */}
                {/*             /> */}
                {/*         </RadioButton> */}
                {/*     ))} */}
                {/* </RadioForm> */}
                <Divider />
                <QuestionContainer style={{ marginTop: 9 }}>
                    <GivingQuestion>Give anonymously?</GivingQuestion>
                    <GiveSwitch
                        trackColor={{ false: '#CACACA', true: '#4FE64A' }}
                        thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
                        ios_backgroundColor='#CACACA'
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </QuestionContainer>

                <GivingInputMsg
                    maxLength={57}
                    multiline
                    placeholder='Write a quick description...'
                />
            </GivingContent>
        </GivingContainer>
    );
}

export default GivingScreen;
