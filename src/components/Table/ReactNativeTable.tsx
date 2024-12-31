import React from 'react';
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

const ReactNativeTable = () => {
  const rows = [
    {
      rank: 1,
      profilePicture:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/VeKings.png/220px-VeKings.png',
      username: 'Mike Khan',
      availableMoney: 1000,
    },
    {
      rank: 2,
      profilePicture:
        'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jpg',
      username: 'jason smith',
      availableMoney: '1.5M',
    },
  ];

  const columns = [
    {
      field: 'rank',
      headerName: 'Ranking',
      translationObject: 'rankingTable',
      width: 100,
      sortable: true,
      sortType: 'number',
      sortProperty: 'rank',
      cellRenderer: (params: any) => {
        let jsx = (
          <View>
            <Text>{params.rank}</Text>
          </View>
        );
        return jsx;
      },
    },
    {
      field: 'profilePicture',
      headerName: 'Image',
      width: 70,
      filter: false,
      cellRenderer: (params: any) => {
        let jsx = (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <View>
              <Image
                src={params.profilePicture}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                }}
                resizeMode="cover"
              />
            </View>
          </TouchableOpacity>
        );
        return jsx;
      },
    },
    {
      field: 'username',
      headerName: 'Username',
      translationObject: 'rankingTable',
      width: 100,
      // flex: 1,
      filter: false,
      sortable: true,
      sortType: 'string',
      sortProperty: 'username',
      cellRenderer: (params: any) => {
        let jsx = (
          <View>
            <Text
              style={{
                fontWeight: 900,
              }}>
              {params.username}
            </Text>
          </View>
        );
        return jsx;
      },
    },
    {
      field: 'availableMoney',
      headerName: 'Available',
      translationObject: 'rankingTable',
      width: 120,
      minWidth: 120,
      flex: 1,
      sortable: true,
      sortType: 'number',
      sortProperty: 'availableMoney',
      cellRenderer: (params: any) => {
        let jsx = (
          <View>
            <Text>${params.availableMoney}</Text>
          </View>
        );

        return jsx;
      },
    },
  ];

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
                  {columns.map((col, index) => {
                    return <Header col={col} key={index} />;
                  })}
                </View>

                {/* Rows */}
                {rows.map((row, index) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      columnGap: 10,
                    }}>
                    {columns.map(col => {
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
