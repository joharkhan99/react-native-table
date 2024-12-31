import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const index = () => {
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
  );
};

export default index;
