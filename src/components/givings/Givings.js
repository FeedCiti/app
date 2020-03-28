import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import GiveIconType from './GiveIconType';
import { FOOD, CLOTHES, MONEY, MEDS } from './types.give';

// GIVINGS LIST STYLES \\
const GivingsList = styled.FlatList`
    height: 180px;
`;

const GivingsContainer = styled.View`
    justify-content: center;
`;

const GivingsCard = styled.View`
    height: 150px;
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

function Givings() {
    // Remove later, this is just filler info
    const friends = [
        { name: 'Friend #1' },
        { name: 'Friend #2' },
        { name: 'Friend #3' },
        { name: 'Friend #4' },
        { name: 'Friend #5' },
        { name: 'Friend #6' },
        { name: 'Friend #7' },
        { name: 'Friend #8' },
        { name: 'Friend #9' },
        { name: 'Friend #10' },
    ];

    return (
        <GivingsContainer>
            <GivingsList
                horizontal
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
                        </GivingsCard>
                    </GivingsContainer>
                )}
            />
        </GivingsContainer>
    );
}

export default Givings;
