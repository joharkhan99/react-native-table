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
      username: 'Jason Smith',
      availableMoney: '1.5M',
    },
    {
      rank: 3,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
      username: 'Sophia Taylor',
      availableMoney: '750K',
    },
    {
      rank: 4,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
      username: 'Oliver Brown',
      availableMoney: '1.2M',
    },
    {
      rank: 5,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
      username: 'Emma Wilson',
      availableMoney: '300K',
    },
    {
      rank: 6,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922522.png',
      username: 'Liam Johnson',
      availableMoney: '2M',
    },
    {
      rank: 7,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922505.png',
      username: 'Ava Davis',
      availableMoney: '1.8M',
    },
    {
      rank: 8,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922502.png',
      username: 'Noah Martinez',
      availableMoney: '500K',
    },
    {
      rank: 9,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922509.png',
      username: 'Isabella Garcia',
      availableMoney: '750K',
    },
    {
      rank: 10,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922521.png',
      username: 'Ethan Rodriguez',
      availableMoney: '1.1M',
    },
    {
      rank: 11,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922517.png',
      username: 'Mia Hernandez',
      availableMoney: '600K',
    },
    {
      rank: 12,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922519.png',
      username: 'James White',
      availableMoney: '950K',
    },
    {
      rank: 13,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922513.png',
      username: 'Charlotte Lee',
      availableMoney: '1.6M',
    },
    {
      rank: 14,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922523.png',
      username: 'Benjamin Walker',
      availableMoney: '800K',
    },
    {
      rank: 15,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922516.png',
      username: 'Amelia Hall',
      availableMoney: '1.3M',
    },
    {
      rank: 16,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922518.png',
      username: 'Lucas Young',
      availableMoney: '700K',
    },
    {
      rank: 17,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922507.png',
      username: 'Harper King',
      availableMoney: '1M',
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
      width: 150,
      minWidth: 150,
      flex: 1,
      sortable: true,
      sortType: 'number',
      sortProperty: 'availableMoney',
      cellRenderer: (params: any) => {
        let jsx = (
          <View>
            <Text>{params.availableMoney}</Text>
          </View>
        );

        return jsx;
      },
    },
  ];

  return (
    <ReactNativeTable
      rows={rows}
      columns={columns}
      showPagination={true}
      rowsPerPage={5}
    />
  );
};

export default Example;
