import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

interface Props {
  rowsData: Object[];
  setRowsData: (newRows: []) => void;
  totalRows: number;
}

const index = ({rowsData, setRowsData, totalRows}: Props) => {
  const [paginationState, setPaginationState] = useState({
    firstPage: 0,
    currentPage: 0,
    pageAfterFirst: 1,
    previousPage: null,
    lastPage: 6,
    pageFirstResultNumber: 1,
    pageLastResultNumber: 1,
  });

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 10,
        alignItems: 'center',
        columnGap: 5,
      }}>
      <View>
        <Text>{`1 - 50 of ${totalRows}`}</Text>
      </View>

      <TouchableOpacity>
        <Text>Previous</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
          style={{
            color: 'lightblue',
          }}>
          1
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
          style={{
            color: '#ccc',
          }}>
          2
        </Text>
      </TouchableOpacity>

      <Text>..</Text>

      <TouchableOpacity>
        <Text
          style={{
            color: '#ccc',
          }}>
          10
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
