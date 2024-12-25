import React from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ReactNativeTable = () => {
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
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    columnGap: 10,
                  }}>
                  {/* header/column */}
                  <View
                    // key={`subColumn-${index}`}
                    style={{
                      alignItems: 'flex-start',
                      flexDirection: 'row',
                      width: 100,
                    }}>
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        columnGap: 1,
                      }}>
                      <Text>headerName</Text>
                      <Text
                        style={{
                          transform: 'rotate(-90deg)',
                        }}>
                        ➜
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View
                    // key={`subColumn-${index}`}
                    style={{
                      alignItems: 'flex-start',
                      flexDirection: 'row',
                      columnGap: 10,
                      width: 100,
                    }}>
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        columnGap: 1,
                      }}>
                      <Text>headerName</Text>
                      <Text
                        style={{
                          transform: 'rotate(-90deg)',
                        }}>
                        ➜
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Rows */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    columnGap: 10,
                  }}>
                  <View
                    style={{
                      width: 100,
                    }}>
                    <Text>Data 123</Text>
                  </View>

                  <View
                    style={{
                      width: 100,
                    }}>
                    <Text>Data 2</Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    columnGap: 10,
                  }}>
                  <View
                    style={{
                      width: 100,
                    }}>
                    <Text>Data 123</Text>
                  </View>

                  <View
                    style={{
                      width: 100,
                    }}>
                    <Text>Data 2</Text>
                  </View>
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
