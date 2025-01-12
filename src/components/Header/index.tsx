import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ReactNativeTableColumn} from '../Table/ReactNativeTable';

interface Props {
  col: ReactNativeTableColumn;
}

const index = ({col}: Props) => {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        flexDirection: 'row',
        width: col.width,
      }}>
      {!col.isHeaderNameHidden ? (
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            columnGap: 1,
          }}>
          <Text
            style={{
              fontWeight: 500,
            }}>
            {col.headerName}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default index;
