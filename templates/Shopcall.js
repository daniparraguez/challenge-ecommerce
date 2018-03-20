import React from 'react';
import './../data/mock.json';


class Shopcall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
products: []
    }
  }


  render() {
    return(
      <section>
        <div >
          {this.state.products.map((id,imageURL,name,type,price,currency) => {
            return (
  <div className="newMovies">
<div className="new">{products.id}</div>
</div>
            )
          })}
        </div>
      </section>
    );
  };
};

export default Shopcall;