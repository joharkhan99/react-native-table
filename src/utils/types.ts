export interface ReactNativeTableColumn {
  dataIndex: string;
  headerName: string;
  key: string | number;
  width?: number;
  cellRenderer?: (rowData: any) => React.ReactNode;
}

export interface ReactNativeTableRowData {
  key: string | number;
  [key: string]: any;
}