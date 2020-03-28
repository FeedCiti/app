import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';
import GiveIconType from './GiveIconType';
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
    margin: 0px 10px 0px 10px;
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
    font-size: 23px;
    font-family: '600';
    color: ${(props) => props.theme.gray800};
`;

const UserLocation = styled.Text`
    font-size: 18px;
    font-family: '500';
    color: ${(props) => props.theme.gray500};
`;

const UserMessage = styled.Text`
    font-family: '500';
    font-size: 19px;
    margin: 12px 0px;
    color: ${(props) => props.theme.gray500};
`;

const MessageDate = styled.Text`
    font-family: '600';
    font-size: 17px;
    color: ${(props) => props.theme.gray350};
`;

function Givings() {
    // Remove later, this is just filler info
    const friends = [
        { name: 'Friend #1', message: 'Lorem ipsun delorem Lorem ipsun delorem' },
        { name: 'Friend #2', message: 'Lorem ipsun delorem Lorem ipsun delorem' },
        { name: 'Friend #3', message: 'Lorem ipsun delorem Lorem ipsun delorem' },
        { name: 'Friend #4', message: 'Lorem ipsun delorem Lorem ipsun delorem' },
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
                                1/1/2020(0:00:00 PM)
                            </MessageDate>
                        </GivingsCard>
                    </GivingsContainer>
                )}
            />
        </GivingsContainer>
    );
}

export default Givings;
