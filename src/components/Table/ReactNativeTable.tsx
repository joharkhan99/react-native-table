import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../Header';
import Row from '../Row';
import Pagination from '../Pagination';

interface Props {
  columns: any;
  rows: any;
}

const ReactNativeTable = ({columns, rows}: Props) => {
  const [rowsData, setRowsData] = useState([]);
  const [columnsData, setColumnsData] = useState([]);

  useEffect(() => {
    setRowsData(rows);
    setColumnsData(columns);
  }, []);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View style={{padding: 10}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          <View style={{flex: 1, width: Dimensions.get('screen').width}}>
            <ScrollView
              horizontal
              contentContainerStyle={{flexDirection: 'column'}}
              // ref={scrollRef}
            >
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  rowGap: 2,
                }}>
                {/* header/column */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    columnGap: 10,
                  }}>
                  {columnsData.map((col: any, index: number) => {
                    return <Header col={col} key={index + 'col'} />;
                  })}
                </View>

                {/* Rows */}
                {rowsData.map((row: any, index: number) => (
                  <View
                    key={index + 'row'}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      columnGap: 10,
                    }}>
                    {columnsData.map((col: any) => {
                      return (
                        <View
                          style={{
                            width: col.width,
                          }}>
                          <Row col={col} row={row} key={Math.random()} />
                        </View>
                      );
                    })}
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>

        {/* pagination */}
        <Pagination />
      </View>
    </ScrollView>
  );
};

export default ReactNativeTable;
