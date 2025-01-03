import React, {useEffect, useMemo, useState} from 'react';
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
  showPagination?: boolean;
  rowsPerPage?: number;
}

const ReactNativeTable = ({
  columns,
  rows,
  showPagination = false,
  rowsPerPage = 10,
}: Props) => {
  const [rowsData, setRowsData] = useState([]);
  const [columnsData, setColumnsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setRowsData(rows);
    setColumnsData(columns);
  }, []);

  // useEffect(() => {
  //   setRowsData(rows.slice(0, rowsPerPage));
  // }, [rowsPerPage]);

  const currenTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * rowsPerPage;
    const lastPageIndex = firstPageIndex + rowsPerPage;
    return rowsData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, rowsData]);

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
              contentContainerStyle={{flexDirection: 'column'}}>
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
                {currenTableData.map((row: any, index: number) => (
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
        {showPagination && (
          <Pagination
            rowsData={rowsData}
            setRowsData={setRowsData}
            totalRows={rows.length}
            currentPage={currentPage}
            totalCount={rowsData.length}
            pageSize={rowsPerPage}
            onPageChange={page => setCurrentPage(page)}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default ReactNativeTable;
