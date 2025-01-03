import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {DOTS, usePagination} from '../../hooks/usePagination';

interface Props {
  rowsData: Object[];
  setRowsData: (newRows: []) => void;
  totalRows: number;
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}

// const index = ({rowsData, setRowsData, totalRows}: Props) => {
const index = ({
  onPageChange,
  totalCount,
  siblingCount = 0,
  currentPage,
  pageSize,
}: Props) => {
  // const [paginationState, setPaginationState] = useState({
  //   firstPage: 0,
  //   currentPage: 0,
  //   pageAfterFirst: 1,
  //   previousPage: null,
  //   lastPage: 6,
  //   pageFirstResultNumber: 1,
  //   pageLastResultNumber: 1,
  // });

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange?.length! < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange![paginationRange?.length! - 1];
  const firstPageIndex = (currentPage - 1) * pageSize;
  const lastPageIndex = firstPageIndex + pageSize;

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 10,
        alignItems: 'center',
        columnGap: 15,
      }}>
      <View>
        <Text>{`${
          firstPageIndex + 1
        } - ${lastPageIndex} of ${totalCount}`}</Text>
      </View>

      <TouchableOpacity
        disabled={currentPage === 1}
        onPress={onPrevious}
        style={{
          backgroundColor: '#ddd',
          padding: 4,
          paddingHorizontal: 6,
          borderRadius: 3,
        }}>
        <Text>Previous</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 5,
        }}>
        {paginationRange?.map((pageNumber: any, index: number) => {
          if (pageNumber === DOTS) {
            return (
              <View key={`dot-${index}-${Math.random()}`}>
                <Text>&#8230;</Text>
              </View>
            );
          }

          return (
            <TouchableOpacity
              style={{
                backgroundColor:
                  pageNumber === currentPage ? 'lightblue' : '#eee',
                padding: 2,
                borderRadius: 100,
                height: 25,
                width: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => onPageChange(pageNumber)}
              key={`page-${index}`}>
              <Text
                style={{
                  color: 'black',
                }}>
                {pageNumber}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity
        disabled={currentPage === lastPage}
        onPress={onNext}
        style={{
          backgroundColor: '#ddd',
          padding: 4,
          paddingHorizontal: 6,
          borderRadius: 3,
        }}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
