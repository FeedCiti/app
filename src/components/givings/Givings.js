import React from 'react';
import styled from 'styled-components/native';
import Entypo from 'react-native-vector-icons/Entypo';
import GiveIconType from './GiveIconType';
import Fonts from '../../../config/Fonts';
import { FOOD, CLOTHES, MONEY, MEDS } from './types.give';

// GIVINGS LIST STYLES \\
const GivingsList = styled.FlatList`
    height: 190px;
`;

const GivingsContainer = styled.View`
    justify-content: center;
`;

const GivingsCard = styled.View`
    min-height: 180px;
    width: 350px;
    margin-left: 20px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 5px ${(props) => props.theme.shadow};
    background-color: ${(props) => props.theme.white};
`;

// USER CONTENT STYLES \\
const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

const UserNameLoc = styled.View`
    flex: 1;
`;

const UserImg = styled.Image`
    height: 50px;
    width: 50px;
    margin-right: 8px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.gray350};
`;

const UserFirstName = styled.Text`
    font-size: 21px;
    font-family: ${Fonts.F700};
    color: ${(props) => props.theme.gray800};
`;

const UserLocation = styled.Text`
    font-size: 18px;
    font-family: ${Fonts.F600};
    color: ${(props) => props.theme.gray500};
`;

const UserMessage = styled.Text`
    font-size: 19px;
    margin: 12px 0px;
    font-family: ${Fonts.F600};
    color: ${(props) => props.theme.gray500};
`;

const MessageDate = styled.Text`
    font-size: 17px;
    font-family: ${Fonts.F700};
    color: ${(props) => props.theme.gray350};
`;

function Givings() {
    // Remove later, this is just filler info
    const friends = [
        { name: 'Friend #1', message: 'Lorem ipsun delorem Lorem ipsun delorem' },
        { name: 'Friend #2', message: 'Lorem ipsun delorem Lorem ipsun delorem' },
        { name: 'Friend #3', message: 'Lorem ipsun delorem Lorem ipsun delorem' },
        { name: 'Friend #4', message: 'Lorem ipsun delorem Lorem ipsun delorem' }
    ];

    return (
        <GivingsContainer>
            <GivingsList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={friends}
                keyExtractor={(friend) => friend.name}
                renderItem={({ item }) => (
                    <GivingsContainer>
                        <GivingsCard>
                            <UserInfo>
                                <UserImg />
                                <UserNameLoc>
                                    <UserFirstName>Default</UserFirstName>
                                    <UserLocation>City, State</UserLocation>
                                </UserNameLoc>
                                <GiveIconType iconType={FOOD} />
                            </UserInfo>
                            <UserMessage>{item.message}</UserMessage>
                            <MessageDate>
                                <Entypo name='calendar' style={{ fontSize: 17 }} />
                                {'  '}
                                1/1/2020 (0:00:00 PM)
                            </MessageDate>
                        </GivingsCard>
                    </GivingsContainer>
                )}
            />
        </GivingsContainer>
    );
}

export default Givings;
