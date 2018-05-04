// Type definitions for react-flexbox-grid v0.10.2
// Project: https://github.com/roylee0704/react-flexbox-grid
// Definitions by: Ruslan Ibragimov <https://github.com/IRus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {Component} from 'react';

declare namespace __ReactFlexboxGrid {
  type ViewportSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  type ColumnSizeType = number | boolean;

  export interface GridProps {
    readonly fluid?: boolean,
    readonly className?: string,
    readonly tagName?: string,
  }

  export interface RowProps {
    readonly reverse?: boolean,
    readonly start?: ViewportSizeType,
    readonly center?: ViewportSizeType,
    readonly end?: ViewportSizeType,
    readonly top?: ViewportSizeType,
    readonly middle?: ViewportSizeType,
    readonly bottom?: ViewportSizeType,
    readonly around?: ViewportSizeType,
    readonly between?: ViewportSizeType,
    readonly className?: string,
    readonly tagName?: string,
  }

  export interface ColProps {
    readonly xs?: ColumnSizeType,
    readonly sm?: ColumnSizeType,
    readonly md?: ColumnSizeType,
    readonly lg?: ColumnSizeType,
    readonly xl?: ColumnSizeType,
    readonly xsOffset?: number,
    readonly smOffset?: number,
    readonly mdOffset?: number,
    readonly lgOffset?: number,
    readonly xlOffset?: number,
    readonly first?: ViewportSizeType,
    readonly last?: ViewportSizeType,
    readonly className?: string,
    readonly tagName?: string,
  }

  export class Grid extends Component<GridProps, {}> {

  }

  export class Row extends Component<RowProps, {}> {

  }

  export class Col extends Component<ColProps, {}> {

  }
    
  export const getRowProps: (props: any) => any;
  export const getColumnProps: (props: any) => any;
}

export = __ReactFlexboxGrid;
