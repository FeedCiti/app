import React from 'react';
import FontAwesome from 'react-native-vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import styled from 'styled-components/native';
import theme from '../../../config/theme';

const handleColorType = (type) => {
    switch (type) {
        case 1:
            return theme.giveOrange;
        case 2:
            return theme.giveBlue;
        case 3:
            return theme.giveGreen;
        case 4:
            return theme.giveRed;
        default:
            return theme.error;
    }
};

const GiveTypeBG = styled.View`
    height: 40px;
    width: 40px;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background-color: ${({ iconType }) => handleColorType(iconType)};
`;

const iconStyles = `
    font-size: 28px;
    color: #fff;
`;

const MCI = styled(MaterialCommunityIcons)`
    ${iconStyles}
`;

const MI = styled(MaterialIcons)`
    ${iconStyles}
`;

const FOUNDATION = styled(Foundation)`
    ${iconStyles}
`;

const genIconType = (giveType) => {
    switch (giveType) {
        case 1:
            return <MCI name='food' />;
        case 2:
            return <MCI name='tshirt-crew' />;
        case 3:
            return <MI name='attach-money' />;
        case 4:
            return <FOUNDATION name='first-aid' />;
        default:
            return <MI name='error' />;
    }
};

function GiveIconType({ giveType }) {
    return <GiveTypeBG iconType={giveType}>{genIconType(giveType)}</GiveTypeBG>;
}

export default GiveIconType;
