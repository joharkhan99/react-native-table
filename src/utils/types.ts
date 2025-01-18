export interface ReactNativeTableColumn {
  dataIndex: string;
  headerName: string;
  key: string | number;
  width?: number;
  cellRenderer?: (rowData: any) => React.ReactNode;
  isHeaderNameHidden?: boolean;
}

export interface TableProps {
  columns: ReactNativeTableColumn[];
  data: ReactNativeTableRowData[];
  pageSize?: number;
  paginationOptions?: PaginationOptions;
  tableBorder?: {
    width?: number;
    color?: string;
    borderRadius?: number;
    style?: 'solid' | 'dotted' | 'dashed';
  };
  rowVerticalPadding?: number;
}

export interface ReactNativeTableRowData {
  key: string | number;
  [key: string]: any;
}

export interface PaginationOptions {
  position?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  nextButtonIcon?: React.ReactNode | string;
  previousButtonIcon?: React.ReactNode | string;
  siblingCount?: number;
}
