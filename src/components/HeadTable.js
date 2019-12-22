import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
} from '@patternfly/react-table';

class HeadTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        'Books Available',
        'Books Issued',
        'Top Trending Book',
        'Fines Due'
      ],
      rows: [
        {
          cells: [
                '9', '4', 'David Copperfield', '$ 2'
            ]
        },
      ]
    };
  }
  render() {
    const { columns, rows } = this.state;

    return (
      <Table aria-label="Head Table" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
export default HeadTable;