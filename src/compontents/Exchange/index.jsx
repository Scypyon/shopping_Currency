import React from 'react';

const Exchange = props => {
    const value =
      props.cash > 0
        ? ((props.cash / props.tab.ratio) * props.price).toFixed(2)
        : "";
    return (
      <p>
        {props.tab.title}
        {value}
      </p>
    );
  };

  export default Exchange;