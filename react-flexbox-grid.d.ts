// Type definitions for react-flexbox-grid v0.10.2
// Project: https://github.com/roylee0704/react-flexbox-grid
// Definitions by: Ruslan Ibragimov <https://github.com/IRus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {Component} from 'react';

declare namespace __ReactFlexboxGrid {
  type SizePropsModificatorType = 'xs' | 'sm' | 'md' | 'lg';
  type ColPropsModificatorType = number | boolean;

  export interface GridProps {
    readonly fluid?: boolean,
    readonly className?: string,
    readonly tagName?: string,
  }

  export interface RowProps {
    readonly reverse?: boolean,
    readonly start?: SizePropsModificatorType,
    readonly center?: SizePropsModificatorType,
    readonly end?: SizePropsModificatorType,
    readonly top?: SizePropsModificatorType,
    readonly middle?: SizePropsModificatorType,
    readonly bottom?: SizePropsModificatorType,
    readonly around?: SizePropsModificatorType,
    readonly between?: SizePropsModificatorType,
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
    readonly first?: SizePropsModificatorType,
    readonly last?: SizePropsModificatorType,
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
