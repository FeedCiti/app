import React, { useEffect } from 'react';
import { Linking, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ProgressBar, Colors } from 'react-native-paper';

import styled from 'styled-components';

import Fonts from '../../../config/Fonts';
import { fetchHealth, fetchFeatured } from '../../store/actions/action.charity';
import { HEALTH, FEATURED } from './CharityTypes';

// LIST STYLES \\
const CharitiyList = styled.FlatList`
    height: 330px;
`;

const CharityContainer = styled.View`
    justify-content: center;
`;

const CharityImage = styled.Image`
    height: 155px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    background-color: ${(props) => props.theme.gray350};
`;

const CharityCard = styled.View`
    min-height: 330px;
    margin-left: 20px;
    width: 350px;
    border-radius: 8px;
    box-shadow: 0px 0px 5px ${(props) => props.theme.shadow};
    background-color: ${(props) => props.theme.white};
`;

// TEXT STYLES \\
const CharityInfo = styled.View`
    padding: 20px;
`;

const CharityTitle = styled.Text`
    font-family: ${Fonts.F700};
    font-size: 21px;
`;

const CharityGoal = styled.Text`
    font-size: 17px;
    font-family: ${Fonts.F700};
    margin-top: 12px;
`;

// ##### DO NOT DO THIS AT HOME #####
// THIS IS A QUICK BAND AID TO MAKE IT REUSABLEISH
/* eslint-disable */
const handleCharityTypeData = (charityType, dispatch) => {
    switch (charityType) {
        case HEALTH:
            const healthCharArr = useSelector(
                (state) => state.charityReducer.healthCharities
            );
            healthCharArr.length === 0 ? dispatch(fetchHealth()) : null;
            return healthCharArr;
        case FEATURED:
            const featuredCharArr = useSelector(
                (state) => state.charityReducer.featuredCharity
            );
            featuredCharArr.length === 0 ? dispatch(fetchFeatured()) : null;
            return featuredCharArr;
        default:
            break;
    }
};
/* eslint-enable */

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});

function Charities({ charityType }) {
    const dispatch = useDispatch();

    return (
        <CharityContainer>
            <CharitiyList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={handleCharityTypeData(charityType, dispatch)}
                keyExtractor={(charity) => charity.id}
                renderItem={({ item }) => (
                    <CharityContainer>
                        <TouchableOpacity
                            onPress={() => Linking.openURL(`${item.projectLink}`)}
                        >
                            <CharityCard>
                                <CharityImage
                                    source={{
                                        uri: `${item.image.imagelink[4].url}`
                                    }}
                                    size='original'
                                />
                                <CharityInfo>
                                    <CharityTitle>{item.title}</CharityTitle>
                                    <CharityGoal style={{ color: '#4C84FF' }}>
                                        Raised: {formatter.format(item.funding)}
                                    </CharityGoal>
                                    <CharityGoal>
                                        Goal: {formatter.format(item.goal)}
                                    </CharityGoal>
                                    <ProgressBar
                                        progress={item.funding / item.goal}
                                        color={Colors.green800}
                                        style={{
                                            marginTop: 12
                                        }}
                                    />
                                </CharityInfo>
                            </CharityCard>
                        </TouchableOpacity>
                    </CharityContainer>
                )}
            />
        </CharityContainer>
    );
}

export default Charities;
