import React from 'react';
import ReactNativeTable, {
  ReactNativeTableColumn,
  ReactNativeTableRowData,
} from '../src/components/Table/ReactNativeTable';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const Example = () => {
  const columns: ReactNativeTableColumn[] = [
    {
      key: 1,
      dataIndex: 'rank',
      headerName: 'Ranking',
      width: 100,
    },
    {
      key: 2,
      dataIndex: 'name',
      headerName: 'Name',
      width: 100,
    },
    {
      key: 3,
      dataIndex: 'country',
      headerName: 'Country',
      width: 150,
      cellRenderer: (rowData: any) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: 2,
            }}>
            <Image
              source={{uri: rowData.flagIcon}}
              style={{width: 30, height: 20, borderRadius: 2}}
              resizeMode="contain"
            />
            <Text>{rowData.country}</Text>
          </View>
        );
      },
    },
    {
      key: 4,
      dataIndex: 'language',
      headerName: 'Language',
      width: 100,
    },
    {
      key: 5,
      dataIndex: 'gameName',
      headerName: 'Game Name',
      width: 150,
      cellRenderer: (rowData: any) => (
        <Text style={{fontWeight: 600}}>{rowData.gameName}</Text>
      ),
    },
    {
      key: 6,
      dataIndex: 'actionButtons',
      headerName: 'Actions',
      isHeaderNameHidden: true,
      width: 150,
      cellRenderer: (rowData: any) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              columnGap: 3,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'green',
                padding: 2,
                borderRadius: 5,
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                }}>
                Yes
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                padding: 2,
                borderRadius: 5,
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                }}>
                No
              </Text>
            </TouchableOpacity>
          </View>
        );
      },
    },
  ];

  const data: ReactNativeTableRowData[] = [
    {
      key: 1,
      name: 'Alice',
      language: 'English',
      country: 'United States',
      flagIcon: 'https://flagcdn.com/w320/us.png',
      gameName: 'Chess',
      rank: 5,
    },
    {
      key: 2,
      name: 'Bob',
      language: 'Spanish',
      country: 'Spain',
      flagIcon: 'https://flagcdn.com/w320/es.png',
      gameName: 'Football',
      rank: 2,
    },
    {
      key: 3,
      name: 'Charlie',
      language: 'French',
      country: 'France',
      flagIcon: 'https://flagcdn.com/w320/fr.png',
      gameName: 'Tennis',
      rank: 8,
    },
    {
      key: 4,
      name: 'David',
      language: 'German',
      country: 'Germany',
      flagIcon: 'https://flagcdn.com/w320/de.png',
      gameName: 'Basketball',
      rank: 4,
    },
    {
      key: 5,
      name: 'Eve',
      language: 'Italian',
      country: 'Italy',
      flagIcon: 'https://flagcdn.com/w320/it.png',
      gameName: 'Volleyball',
      rank: 7,
    },
    {
      key: 6,
      name: 'Frank',
      language: 'Japanese',
      country: 'Japan',
      flagIcon: 'https://flagcdn.com/w320/jp.png',
      gameName: 'Karate',
      rank: 1,
    },
    {
      key: 7,
      name: 'Grace',
      language: 'Mandarin',
      country: 'China',
      flagIcon: 'https://flagcdn.com/w320/cn.png',
      gameName: 'Table Tennis',
      rank: 3,
    },
    {
      key: 8,
      name: 'Hank',
      language: 'Korean',
      country: 'South Korea',
      flagIcon: 'https://flagcdn.com/w320/kr.png',
      gameName: 'Taekwondo',
      rank: 9,
    },
    {
      key: 9,
      name: 'Ivy',
      language: 'Russian',
      country: 'Russia',
      flagIcon: 'https://flagcdn.com/w320/ru.png',
      gameName: 'Ice Hockey',
      rank: 6,
    },
    {
      key: 10,
      name: 'Jack',
      language: 'Portuguese',
      country: 'Brazil',
      flagIcon: 'https://flagcdn.com/w320/br.png',
      gameName: 'Football',
      rank: 10,
    },
    {
      key: 11,
      name: 'Kathy',
      language: 'Arabic',
      country: 'Saudi Arabia',
      flagIcon: 'https://flagcdn.com/w320/sa.png',
      gameName: 'Horse Racing',
      rank: 12,
    },
    {
      key: 12,
      name: 'Leo',
      language: 'Hindi',
      country: 'India',
      flagIcon: 'https://flagcdn.com/w320/in.png',
      gameName: 'Cricket',
      rank: 11,
    },
    {
      key: 13,
      name: 'Mona',
      language: 'Dutch',
      country: 'Netherlands',
      flagIcon: 'https://flagcdn.com/w320/nl.png',
      gameName: 'Cycling',
      rank: 14,
    },
    {
      key: 14,
      name: 'Nina',
      language: 'Turkish',
      country: 'Turkey',
      flagIcon: 'https://flagcdn.com/w320/tr.png',
      gameName: 'Wrestling',
      rank: 15,
    },
    {
      key: 15,
      name: 'Oscar',
      language: 'Greek',
      country: 'Greece',
      flagIcon: 'https://flagcdn.com/w320/gr.png',
      gameName: 'Marathon',
      rank: 13,
    },
    {
      key: 16,
      name: 'Paul',
      language: 'Thai',
      country: 'Thailand',
      flagIcon: 'https://flagcdn.com/w320/th.png',
      gameName: 'Muay Thai',
      rank: 16,
    },
    {
      key: 17,
      name: 'Quinn',
      language: 'Hebrew',
      country: 'Israel',
      flagIcon: 'https://flagcdn.com/w320/il.png',
      gameName: 'Surfing',
      rank: 18,
    },
    {
      key: 18,
      name: 'Rita',
      language: 'Swedish',
      country: 'Sweden',
      flagIcon: 'https://flagcdn.com/w320/se.png',
      gameName: 'Ice Skating',
      rank: 17,
    },
    {
      key: 19,
      name: 'Steve',
      language: 'Vietnamese',
      country: 'Vietnam',
      flagIcon: 'https://flagcdn.com/w320/vn.png',
      gameName: 'Dragon Boat Racing',
      rank: 19,
    },
    {
      key: 20,
      name: 'Johar Khan',
      language: 'Pashto',
      country: 'Pakistan',
      flagIcon: 'https://flagcdn.com/w320/pk.png',
      gameName: 'Skiing',
      rank: 99,
    },
  ];

  return <ReactNativeTable data={data} columns={columns} pageSize={7} />;
};

export default Example;
