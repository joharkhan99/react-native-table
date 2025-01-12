import React, { useEffect, useMemo, useState } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import Header from '../Header';
import Row from '../Row';
import Pagination from '../Pagination';
import {
  PaginationOptions,
  ReactNativeTableColumn,
  ReactNativeTableRowData,
} from '../../utils/types';

interface TableProps {
  columns: ReactNativeTableColumn[];
  data: ReactNativeTableRowData[];
  pageSize?: number;
  paginationOptions?: PaginationOptions;
}

const ReactNativeTable = ({ columns, data, pageSize = 10, paginationOptions }: TableProps) => {
  const [rowsData, setRowsData] = useState<ReactNativeTableRowData[]>([]);
  const [columnsData, setColumnsData] = useState<ReactNativeTableColumn[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setRowsData(data);
    setColumnsData(columns);
  }, []);

  const currenTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return rowsData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, rowsData]);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      <View style={{ padding: 10 }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          <View style={{ flex: 1, width: Dimensions.get('screen').width }}>
            <ScrollView horizontal contentContainerStyle={{ flexDirection: 'column' }}>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  rowGap: 5,
                }}
              >
                {/* header/column */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    columnGap: 10,
                  }}
                >
                  {columnsData.map((col: ReactNativeTableColumn) => {
                    return <Header col={col} key={`rn-column-${col.key}`} />;
                  })}
                </View>

                {/* Rows */}
                {currenTableData.map((rowData: ReactNativeTableRowData, index: number) => (
                  <View
                    key={`rn-row-${rowData.key}-${index}`}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      columnGap: 10,
                    }}
                  >
                    {columnsData.map((col: ReactNativeTableColumn, index: number) => {
                      return (
                        <View
                          style={{
                            width: col.width,
                          }}
                          key={`rn-cell-${rowData.key}-${col.key}-${index}`}
                        >
                          <Row
                            col={col}
                            rowData={rowData}
                            key={`rn-cell-${rowData.key}-${col.key}`}
                          />
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
        <Pagination
          rowsData={rowsData}
          setRowsData={setRowsData}
          totalRows={data.length}
          currentPage={currentPage}
          totalCount={rowsData.length}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
          paginationOptions={paginationOptions}
        />
      </View>
    </ScrollView>
  );
};

export default ReactNativeTable;
