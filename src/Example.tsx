import React from 'react';
import ReactNativeTable, {
  ReactNativeTableColumn,
  ReactNativeTableRowData,
} from './components/Table/ReactNativeTable';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const Example = () => {
  const data: ReactNativeTableRowData[] = [
    {
      key: 1,
      rank: 1,
      profilePicture:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/VeKings.png/220px-VeKings.png',
      username: 'Mike Khan',
      availableMoney: {
        test: 1,
      },
    },
    {
      key: 2,
      rank: 2,
      profilePicture:
        'https://d2gwgwt9a7yxle.cloudfront.net/what_is_user_id_in_net_banking_mobile_871b681e52.jpg',
      username: 'Jason Smith',
      availableMoney: '1.5M',
    },
    {
      key: 3,
      rank: 3,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
      username: 'Sophia Taylor',
      availableMoney: '750K',
    },
    {
      key: 4,
      rank: 4,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
      username: 'Oliver Brown',
      availableMoney: '1.2M',
    },
    {
      key: 5,
      rank: 5,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922510.png',
      username: 'Emma Wilson',
      availableMoney: '300K',
    },
    {
      key: 6,
      rank: 6,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922522.png',
      username: 'Liam Johnson',
      availableMoney: '2M',
    },
    {
      key: 7,
      rank: 7,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922505.png',
      username: 'Ava Davis',
      availableMoney: '1.8M',
    },
    {
      rank: 8,
      key: 8,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922502.png',
      username: 'Noah Martinez',
      availableMoney: '500K',
    },
    {
      key: 9,
      rank: 9,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922509.png',
      username: 'Isabella Garcia',
      availableMoney: '750K',
    },
    {
      key: 10,
      rank: 10,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922521.png',
      username: 'Ethan Rodriguez',
      availableMoney: '1.1M',
    },
    {
      key: 11,
      rank: 11,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922517.png',
      username: 'Mia Hernandez',
      availableMoney: '600K',
    },
    {
      key: 12,
      rank: 12,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922519.png',
      username: 'James White',
      availableMoney: '950K',
    },
    {
      key: 13,
      rank: 13,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922513.png',
      username: 'Charlotte Lee',
      availableMoney: '1.6M',
    },
    {
      key: 14,
      rank: 14,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922523.png',
      username: 'Benjamin Walker',
      availableMoney: '800K',
    },
    {
      key: 15,
      rank: 15,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922516.png',
      username: 'Amelia Hall',
      availableMoney: '1.3M',
    },
    {
      key: 16,
      rank: 16,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922518.png',
      username: 'Lucas Young',
      availableMoney: '700K',
    },
    {
      key: 17,
      rank: 17,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922507.png',
      username: 'Harper King',
      availableMoney: '1M',
    },
    {
      key: 18,
      rank: 14,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922523.png',
      username: 'Benjamin Walker',
      availableMoney: '800K',
    },
    {
      key: 19,
      rank: 15,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922516.png',
      username: 'Amelia Hall',
      availableMoney: '1.3M',
    },
    {
      key: 20,
      rank: 16,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922518.png',
      username: 'Lucas Young',
      availableMoney: '700K',
    },
    {
      key: 21,
      rank: 17,
      profilePicture: 'https://cdn-icons-png.flaticon.com/512/2922/2922507.png',
      username: 'Harper King',
      availableMoney: '1M',
    },
  ];

  const columns: ReactNativeTableColumn[] = [
    {
      key: 1,
      dataIndex: 'rank',
      headerName: 'Ranking',
      width: 100,
    },
    {
      key: 2,
      dataIndex: 'profilePicture',
      headerName: 'Image',
      width: 70,
      cellRenderer: (rowData: any) => {
        let jsx = (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <View>
              <Image
                src={rowData.profilePicture}
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
      key: 3,
      dataIndex: 'username',
      headerName: 'Username',
      width: 100,
      cellRenderer: (rowData: any) => {
        let jsx = (
          <View>
            <Text
              style={{
                fontWeight: 900,
              }}>
              {rowData.username}
            </Text>
          </View>
        );
        return jsx;
      },
    },
    {
      key: 4,
      dataIndex: 'availableMoney',
      headerName: 'Available',
      width: 150,
    },
  ];

  return <ReactNativeTable data={data} columns={columns} pageSize={4} />;
};

export default Example;
