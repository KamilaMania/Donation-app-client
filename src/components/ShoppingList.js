import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { fetchItems } from "../store/items/actions";
//import Input from "@material-ui/core/Input";

class ShoppingList extends React.Component {
  state = {
    cart: []
  };

  componentDidMount() {
    this.props.dispatch(fetchItems());
  }

  increment = id => {
    console.log(this.state, "state");
    const { cart } = this.state;
    const { rows } = this.props;
    const itemToAdd = rows.items.find(item => item.id === id);
    const alreadyInCart = cart.find(item => item && item.id === id);
    if (!alreadyInCart) {
      this.setState({
        cart: [...cart, { ...itemToAdd, quantity: 1 }]
      });
    } else {
      const cartWithoutCurrentItem = cart.filter(item => item.id !== id);
      this.setState({
        cart: [
          ...cartWithoutCurrentItem,
          { ...alreadyInCart, quantity: alreadyInCart.quantity + 1 }
        ]
      });
    }
  };

  decrement = id => {
    const { cart } = this.state;
    const itemToDecrement = cart.find(item => item.id === id);
    const cartWithoutItem = cart.filter(item => item.id !== id);
    const shouldDeleteItem = itemToDecrement.quantity - 1 === 0;
    if (shouldDeleteItem) {
      this.setState({
        cart: [...cartWithoutItem]
      });
    } else {
      this.setState({
        cart: [
          ...cartWithoutItem,
          { ...itemToDecrement, quantity: itemToDecrement.quantity - 1 }
        ]
      });
    }
  };

  getQuantityForItem(id) {
    const cartItem = this.state.cart.find(item => item.id === id);
    return cartItem ? cartItem.quantity : 0;
  }

  rowCreator(rows) {
    return rows.map(row => {
      const itemQuantity = this.getQuantityForItem(row.id);
      return (
        <TableRow key={row.Name}>
          <TableCell component="th" scope="row">
            {row.Name}
          </TableCell>
          <TableCell align="left">{row.Price}</TableCell>
          <TableCell align="left">
            <Button onClick={() => this.increment(row.id)}> ADD ITEM </Button>
            <br />
            <p type="text" value="">
              {itemQuantity}
            </p>
            <br />
            {itemQuantity ? (
              <Button onClick={() => this.decrement(row.id)}>
                {" "}
                REMOVE ITEM{" "}
              </Button>
            ) : (
              <div />
            )}
          </TableCell>
          <TableCell align="left" type="text" value="">
            {itemQuantity * row.Price}
          </TableCell>
        </TableRow>
      );
    });
  }

  render() {
    const rows = this.props.rows.items;
    console.log(this.state.cart);
    return (
      <TableContainer component={Paper}>
        <h1>Shopping List</h1>
        <Table aria-label="caption table">
          <caption></caption>
          <TableHead>
            <TableRow>
              <TableCell align="left">ITEM</TableCell>
              <TableCell align="left">PRICE IN EURO</TableCell>
              <TableCell align="left">QUANTITY</TableCell>
              <TableCell align="left">TOTAL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{this.rowCreator(rows)}</TableBody>
        </Table>
      </TableContainer>
    );
  }
}
function mapStateToProps(state) {
  return { rows: state.items };
}
export default connect(mapStateToProps)(ShoppingList);
