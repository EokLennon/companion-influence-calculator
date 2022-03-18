import React, { useState } from 'react';
import { UnmountClosed as Collapse } from 'react-collapse';
import _ from 'lodash';

import ArrowUpNarrowIcon from '@heroicons/react/outline/ArrowNarrowUpIcon';
import ArrowDownNarrowIcon from '@heroicons/react/outline/ArrowNarrowDownIcon';
import ChevronUpIcon from '@heroicons/react/outline/ChevronUpIcon';
import ChevronDownIcon from '@heroicons/react/outline/ChevronDownIcon';

export enum SortDirection {
    ASC = "asc",
    DESC = "desc"
}

export interface HeaderOptions {
  label: string | number
  accesor: string
  headerClassName?: string
  cellClassName?: string
  sortable?: boolean
  identifier?: string
  renderer?: (value: any, row?: IRow) => any
}

export interface IRow {
  [key: string]: any
}

interface HeaderProps {
  header: HeaderOptions
  sortBy?: string
  sortDirection?: SortDirection
  sortLabelClassName?: string
  onSort?: (identifier: string, e?: any) => void
}

interface RowProps {
  row: IRow
  headers: HeaderOptions[]
  className?: string
  onRowClick?: (r: IRow, e?: any) => void
  renderMore?: (r: IRow) => any
  renderMoreClassName?: string
  rowSize: number
}

interface DynamicTableProps {
  headers: HeaderOptions[]
  rows: IRow[]
  className?: string
  isLoading?: boolean
  loadingElement?: React.ReactNode
  loadingClassName?: string
  renderMore?: (r: IRow) => React.ReactNode
  renderMoreClassName?: string
  renderMoreHeaderClassName?: string
  noResultElement?: React.ReactNode
  noResultClassName?: string
  sortBy?: string
  sortDirection?: SortDirection
  sortLabelClassName?: string
  onSort?: (identifier: string, e?: any) => void
  onRowClick?: (r: IRow, e?: any) => void
  getRowClassName?: (r: IRow) => string
}

const Header = ({ header: c, sortBy, sortDirection, onSort, sortLabelClassName }: HeaderProps): JSX.Element => {
  const activeOrder = (sortBy === c.identifier) ? sortDirection : undefined;
  const order = (activeOrder === SortDirection.ASC) ? SortDirection.ASC : SortDirection.DESC;

  const classes = `table-header ${c.sortable ? 'sortable' : ''} ${c.headerClassName || ""}`.trim()

  return (
    <th className={classes}>
      {c.sortable 
        ? <div className={`sort-label ${sortLabelClassName || ''}`} onClick={() => onSort && onSort(c.identifier || "")}>
            {c.label}
            {order === SortDirection.ASC ? <ArrowUpNarrowIcon /> : <ArrowDownNarrowIcon />}
          </div> 
        : c.label
      }
    </th>
  )
}

const Row = ({ row: r, headers, className, onRowClick, renderMore, renderMoreClassName, rowSize }: RowProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  const renderNoData = (v: any) => _.isNil(v) ? "-" : v;

  return (<>
    <tr className={`table-row ${className || ''}`} onClick={(e) => onRowClick && onRowClick(r, e)}>
      {renderMore &&
        <td className="table-cell">
          <div className={renderMoreClassName} onClick={() => setOpen((ps) => !ps)}>
            {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </div>
        </td>
      }
      {_.map(headers, (c, i) => (
        <td key={i} className={`table-cell ${c.cellClassName || ""}`.trim()}>
          {c.renderer 
            ? renderNoData(c.renderer(r[c.accesor], r))
            : renderNoData(r[c.accesor])
          }
        </td>
      ))}
    </tr>
    {!!renderMore &&
      <tr>
        <td style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={rowSize}>
          <Collapse isOpened={open}>
            {renderMore(r)}
          </Collapse>
        </td>
      </tr>
    }
  </>)
}

const DynamicTable = (props: DynamicTableProps): JSX.Element => {
  const { 
    headers, rows,
    className,
    isLoading, loadingElement, loadingClassName,
    noResultElement, noResultClassName,
    renderMore, renderMoreHeaderClassName, renderMoreClassName,
    sortBy, sortDirection, onSort, sortLabelClassName,
    onRowClick, getRowClassName
  } = props;

  let rowSize = headers.length;
  !!renderMore && rowSize++;

  const renderHeaders = (c: HeaderOptions, i: number): JSX.Element => (
    <Header
      key={i}
      header={c}
      sortBy={sortBy}
      sortDirection={sortDirection}
      onSort={onSort}
      sortLabelClassName={sortLabelClassName}
    />
  )

  const renderRows = (r: IRow, i: number): JSX.Element => {
    if (r.spacer) return <tr key={i} className={r.className} />
    return (
      <Row
        key={i}
        row={r}
        className={getRowClassName && getRowClassName(r)}
        headers={headers}
        onRowClick={onRowClick}
        renderMore={renderMore}
        renderMoreClassName={renderMoreClassName}
        rowSize={rowSize}
      />
    )
  }

  const renderNoResults = () => (
    <tr>
      <td colSpan={rowSize} className={`table-cell cell-no-results ${noResultClassName || ''}`.trim()}>
        {Boolean(noResultElement)
          ? noResultElement
          : <h3>{'Sin resultados'}</h3>
        }
      </td>
    </tr>
  )

  const renderLoading = () => (
    <tr>
      <td colSpan={rowSize} className={`table-cell cell-loading ${loadingClassName || ''}`.trim()}>
        {Boolean(loadingElement)
          ? loadingElement
          : <h3>{'Cargando...'}</h3>
        }
      </td>
    </tr>
  )

  return (
    <div className={`component-dynamic-table ${className || ''}`.trim()}>
      <table>
        <thead>
          <tr>
            {!!renderMore && <td className={`table-header more ${renderMoreHeaderClassName}`} />}
            {_.map(headers, renderHeaders)}
          </tr>
        </thead>
        <tbody>
          {(rows.length > 0 && !isLoading) && _.map(rows, renderRows)}
          {(rows.length === 0 && !isLoading) && renderNoResults()}
          {(isLoading) && renderLoading()}
        </tbody>
      </table>
    </div>
  )
}

export default DynamicTable;
