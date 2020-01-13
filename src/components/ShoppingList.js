import React from "react";
import { fetchItems } from "../store/items/actions";

class ShoppingList extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    return <div>x</div>;
  }
}

export default ShoppingList;
