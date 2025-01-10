import React from 'react';
import {Text, View} from 'react-native';
import {
  ReactNativeTableColumn,
  ReactNativeTableRowData,
} from '../Table/ReactNativeTable';

interface Props {
  col: ReactNativeTableColumn;
  rowData: ReactNativeTableRowData;
}

const index = ({col, rowData}: Props) => {
  if (
    !col.cellRenderer &&
    (typeof rowData[col.dataIndex] === 'function' ||
      typeof rowData[col.dataIndex] === 'object')
  ) {
    return null;
  }
  return !col.cellRenderer ? (
    <View>
      <Text>{rowData[col.dataIndex]}</Text>
    </View>
  ) : (
    col.cellRenderer({...rowData})
  );
};

export default index;
