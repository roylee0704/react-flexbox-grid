// Type definitions for react-flexbox-grid v0.10.2
// Project: https://github.com/roylee0704/react-flexbox-grid
// Definitions by: Ruslan Ibragimov <https://github.com/IRus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {Component} from 'react';

declare namespace __ReactFlexboxGrid {
  type RowPropsModificatorType = 'xs' | 'sm' | 'md' | 'lg';
  type ColPropsModificatorType = number | boolean;

  export interface GridProps {
    readonly fluid?: boolean,
    readonly className?: string,
    readonly tagName?: string,
  }

  export interface RowProps {
    readonly reverse?: boolean,
    readonly start?: RowPropsModificatorType,
    readonly center?: RowPropsModificatorType,
    readonly end?: RowPropsModificatorType,
    readonly top?: RowPropsModificatorType,
    readonly middle?: RowPropsModificatorType,
    readonly bottom?: RowPropsModificatorType,
    readonly around?: RowPropsModificatorType,
    readonly between?: RowPropsModificatorType,
    readonly first?: RowPropsModificatorType,
    readonly last?: RowPropsModificatorType,
    readonly className?: string,
    readonly tagName?: string,
  }

  export interface ColProps {
    readonly xs?: ColPropsModificatorType,
    readonly sm?: ColPropsModificatorType,
    readonly md?: ColPropsModificatorType,
    readonly lg?: ColPropsModificatorType,
    readonly xsOffset?: number,
    readonly smOffset?: number,
    readonly mdOffset?: number,
    readonly lgOffset?: number,
    readonly reverse?: boolean,
    readonly className?: string,
    readonly tagName?: string,
  }

  export class Grid extends Component<GridProps, {}> {

  }

  export class Row extends Component<RowProps, {}> {

  }

  export class Col extends Component<ColProps, {}> {

  }
}

export = __ReactFlexboxGrid;
