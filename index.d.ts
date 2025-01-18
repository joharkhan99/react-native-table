declare module '@joharkhan/react-native-table' {
  import { ReactNode } from 'react';

  // Table Column Definition
  export interface ReactNativeTableColumn {
    dataIndex: string;
    headerName: string;
    key: string | number;
    width?: number;
    cellRenderer?: (rowData: any) => ReactNode;
    isHeaderNameHidden?: boolean;
  }

  // Table Row Data
  export interface ReactNativeTableRowData {
    key: string | number;
    [key: string]: any;
  }

  // Pagination Options
  export interface PaginationOptions {
    position?:
      | 'center'
      | 'flex-start'
      | 'flex-end'
      | 'space-around'
      | 'space-between'
      | 'space-evenly';
    nextButtonIcon?: ReactNode | string;
    previousButtonIcon?: ReactNode | string;
    siblingCount?: number;
  }

  // Table Component Props
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

  // Table Component
  const ReactNativeTable: React.FC<TableProps>;

  export default ReactNativeTable;
}
