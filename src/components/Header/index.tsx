import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

interface Props {
  col: any;
}

const index = ({col}: Props) => {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        flexDirection: 'row',
        width: col.width,
      }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          columnGap: 1,
        }}>
        <Text>{col.headerName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
