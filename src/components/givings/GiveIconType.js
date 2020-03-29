import React from 'react';
import FontAwesome from 'react-native-vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import styled from 'styled-components/native';
import {FOOD, CLOTHES, MONEY, MEDS} from './types.give';
import theme from '../../../config/theme';
import {createGlobalStyle} from 'styled-components';

const handleColorType = type => {
  switch (type) {
    case FOOD:
      return theme.giveOrange;
    case CLOTHES:
      return theme.giveBlue;
    case MONEY:
      return theme.giveGreen;
    case MEDS:
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
  background-color: ${({iconType}) => handleColorType(iconType)};
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

const genIconType = iconType => {
  switch (iconType) {
    case FOOD:
      return <MCI name="food" />;
    case CLOTHES:
      return <MCI name="tshirt-crew" />;
    case MONEY:
      return <MI name="attach-money" />;
    case MEDS:
      return <FOUNDATION name="first-aid" />;
    default:
      return <MI name="error" />;
  }
};

function GiveIconType({iconType}) {
  return <GiveTypeBG iconType={iconType}>{genIconType(iconType)}</GiveTypeBG>;
}

export default GiveIconType;
