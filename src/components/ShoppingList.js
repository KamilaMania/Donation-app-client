import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";
import { fetchItems } from "../store/items/actions";

class ShoppingList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchItems());
  }

  render() {
    const rows = this.props.rows.items;
    return (
      <TableContainer component={Paper}>
        <h1>Shopping List</h1>
        <Table aria-label="caption table">
          <caption></caption>
          <TableHead>
            <TableRow>
              <TableCell align="left">ITEM</TableCell>
              <TableCell align="left">PRICE IN EURO</TableCell>
              <TableCell align="left">AMOUNT</TableCell>
              <TableCell align="left">TOTAL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.Name}>
                <TableCell component="th" scope="row">
                  {row.Name}
                </TableCell>

                <TableCell align="left">{row.Price}</TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
function mapStateToProps(state) {
  return { rows: state.items };
}
export default connect(mapStateToProps)(ShoppingList);
