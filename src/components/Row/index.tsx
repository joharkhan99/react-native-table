import React from 'react';
import {View} from 'react-native';

interface Props {
  col: any;
  row: any;
}

const index = ({col, row}: Props) => {
  return col.cellRenderer({...row, width: col.width});
};

export default index;
