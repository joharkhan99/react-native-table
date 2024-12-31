import React from 'react';
import ReactNativeTable from './components/Table/ReactNativeTable';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const Example = () => {
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

  return <ReactNativeTable rows={rows} columns={columns} />;
};

export default Example;
