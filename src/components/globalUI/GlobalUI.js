import React from 'react';
import styled from 'styled-components/native';
import Entypo from 'react-native-vector-icons/Entypo';
import Fonts from '../../../config/Fonts';

const MessageDate = styled.Text`
    font-size: ${(props) => props.dateSize}px;
    font-family: ${Fonts.F700};
    color: ${(props) => props.theme.gray350};
`;

export function MessageDateUI({ children, dateSize }) {
    return (
        <MessageDate dateSize={dateSize}>
            <Entypo name='calendar' style={{ fontSize: 17 }} />
            {'  '}
            {children}
        </MessageDate>
    );
}
