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

const index = ({
  onPageChange,
  totalCount,
  siblingCount = 0,
  currentPage,
  pageSize,
}: Props) => {
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
        columnGap: 2,
        flexWrap: 'wrap',
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
          borderRadius: 5,
          height: 25,
          width: 25,
        }}>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: currentPage === 1 ? '#ccc' : 'black',
          }}>
          {'<'}
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 2,
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
                borderColor: pageNumber === currentPage ? '#1677ff' : '#eee',
                borderWidth: pageNumber === currentPage ? 1 : 0,
                padding: 2,
                height: 25,
                width: 25,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => onPageChange(pageNumber)}
              key={`page-${index}`}>
              <Text
                style={{
                  color: pageNumber === currentPage ? '#1677ff' : 'black',
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
          borderRadius: 5,
          height: 25,
          width: 25,
        }}>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: currentPage === lastPage ? '#ccc' : 'black',
          }}>
          {'>'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
