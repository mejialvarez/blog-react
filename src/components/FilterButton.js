import React, { Component } from 'react';

class FilterButton extends Component {
  render() {
    const classActived = this.props.actived ? 'btn-primary active' : '';
    return (
      <button className={ `btn btn-default ${ classActived }` } onClick={ this.props.onFilterClick }>
        { this.props.children }
      </button>
    );
  }
}

export default FilterButton