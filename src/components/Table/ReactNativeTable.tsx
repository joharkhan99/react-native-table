import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ReactNativeTable = () => {
  const rows = [
    {
      rank: 1,
      profilePicture: 'my Image',
      username: 'Johar Khan',
      availableMoney: 1000,
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
          <View>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/VeKings.png/220px-VeKings.png"
              style={{
                borderRadius: 999,
                width: 40,
                height: 40,
              }}
            />
          </View>
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
            <Text>{params.username}</Text>
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
                    return (
                      <View
                        key={index}
                        style={{
                          alignItems: 'flex-start',
                          flexDirection: 'row',
                          width: col.width,
                        }}>
                        <TouchableOpacity
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            columnGap: 1,
                          }}>
                          <Text>{col.headerName}</Text>
                          <Text
                            style={{
                              transform: 'rotate(-90deg)',
                            }}>
                            ➜
                          </Text>
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </View>

                {/* Rows */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    columnGap: 10,
                  }}>
                  {rows.map((row, index) =>
                    columns.map(col => {
                      return (
                        <View
                          style={{
                            width: col.width,
                          }}>
                          {col.cellRenderer({...row, width: col.width})}
                        </View>
                      );
                    }),
                  )}
                </View>
              </View>
            </ScrollView>
          </View>
        </View>

        {/* pagination */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginVertical: 10,
            alignItems: 'center',
            columnGap: 5,
          }}>
          <View>
            <Text>{`1 - 50 of 300`}</Text>
          </View>

          <TouchableOpacity>
            <Text>⇽</Text>
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
            <Text>⇾</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ReactNativeTable;
