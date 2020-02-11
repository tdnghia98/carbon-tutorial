import React from 'react';
import {
  DataTable,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableExpandHeader,
  TableCell,
  TableExpandRow,
  TableHeader,
} from 'carbon-components-react';

const RepoTable = ({ rows, headers }) => {
  return (
    <DataTable
      rows={rows}
      headers={headers}
      render={({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getTableProps,
      }) => (
        <TableContainer
          title="Carbon Repositories"
          description="A collection of public Carbon repositories">
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                <TableExpandHeader />
                {headers.map(header => (
                  <TableHeader {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map(row => (
                <React.Fragment>
                  <TableExpandRow {...getRowProps({ row })}>
                    {row.cells.map(cell => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableExpandRow>
                  <TableExpandRow colSpan={headers.length + 1}>
                    <p>Row description</p>
                  </TableExpandRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  );
};

export default RepoTable;
