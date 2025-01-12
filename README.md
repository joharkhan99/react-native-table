# React Native Table

A highly customizable table component for React Native with support for custom cell rendering, filtering, sorting, pagination, and more.

## Features

- **Custom Cell Rendering**: Render any type of data or component inside the table cells.
- **Filtering**: Filter rows based on column values. (under development)
- **Sorting**: Sort the table data by columns. (under development)
- **Pagination**: Paginate data to handle large datasets efficiently.
- **Customizable Styles**: Easily customize the table's appearance.
- **Responsive Design**: Adapt the table layout for different screen sizes.

## Installation

To install the package, run the following command:

```bash
npm install @joharkhan/react-native-table
```

or if you're using Yarn:

```bash
yarn add @joharkhan/react-native-table
```

## Usage

After installing the package, you can import and use the table component in your project like this:

```javascript
import React from 'react';
import ReactNativeTable from '@joharkhan/react-native-table';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const Example = () => {
  const columns = [
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
            }}
          >
            <Image
              source={{ uri: rowData.flagIcon }}
              style={{ width: 30, height: 20, borderRadius: 2 }}
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
      cellRenderer: (rowData: any) => <Text style={{ fontWeight: 600 }}>{rowData.gameName}</Text>,
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
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: 'green',
                padding: 2,
                borderRadius: 5,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  color: 'white',
                }}
              >
                Yes
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                padding: 2,
                borderRadius: 5,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  color: 'white',
                }}
              >
                No
              </Text>
            </TouchableOpacity>
          </View>
        );
      },
    },
  ];

  const data = [
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
    // ...more rows
  ];

  return <ReactNativeTable data={data} columns={columns} pageSize={7} />;
};
```

### Example File

You can find an example file in the `examples` folder. This example demonstrates how to use the table component in a React Native application with sample data, column definitions, and styles.

## Contributing

We welcome contributions to improve this project! If you'd like to contribute, please follow these steps:

1. **Fork the repository** to your own GitHub account.
2. **Clone your forked repository** to your local machine.
3. **Create a new branch** for your feature or bug fix.
   ```bash
   git checkout -b feature/my-feature
   ```
4. **Make your changes** in the new branch.
5. **Push your changes** to your forked repository.
   ```bash
   git push origin -u feature/my-feature
   ```
6. **Open a pull request** on GitHub with a description of what you've done. If you worked on a specific issue, please mention the issue number in the description.

For more detailed contributing guidelines, please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
