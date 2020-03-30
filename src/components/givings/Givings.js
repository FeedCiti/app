import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import _ from 'lodash';

import feedciti from '../../apis/feedciti';
import GiveIconType from './GiveIconType';
import Fonts from '../../../config/Fonts';
import { MessageDateUI } from '../globalUI/GlobalUI';

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

function Givings() {
    const dtfDay = new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    });
    const dtfTime = new Intl.DateTimeFormat('en', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
    const [globalGivings, setGivings] = useState([]);
    useEffect(() => {
        feedciti
            .get('/api/givings')
            .then((res) => {
                console.log(res.data);
                setGivings(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <GivingsContainer>
            {_.isEmpty(globalGivings) ? (
                <UserLocation>You shouldn't see this</UserLocation>
            ) : (
                <GivingsList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={globalGivings.data}
                    keyExtractor={(user) => user.user_email}
                    renderItem={({ item }) => (
                        <GivingsContainer>
                            <GivingsCard>
                                <UserInfo>
                                    <UserImg
                                        source={{
                                            uri: `${item.user_image}`
                                        }}
                                    />
                                    <UserNameLoc>
                                        <UserFirstName>{item.first_name}</UserFirstName>
                                        {/* <UserLocation>City, State</UserLocation> */}
                                    </UserNameLoc>
                                    <GiveIconType giveType={item.give_type} />
                                </UserInfo>
                                <UserMessage>{item.message}</UserMessage>
                                <MessageDateUI dateSize={17}>
                                    {dtfDay.format(new Date('2020-03-29T19:19:48.000Z'))}{' '}
                                    {dtfTime.format(new Date('2020-03-29T19:19:48.000Z'))}
                                    {/* 1/1/2020 (0:00:00 PM) */}
                                </MessageDateUI>
                            </GivingsCard>
                        </GivingsContainer>
                    )}
                />
            )}
        </GivingsContainer>
    );
}

export default Givings;
