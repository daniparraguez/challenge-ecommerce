import React from 'react';
import ReactDOM from 'react-dom';
import Shop from './../../../templates/Shop.js';
import Shopcall from './../../../templates/Shopcall.js';



const App = ({ message }) => <div>{ message }
<Shopcall/>
<Shop/>
</div>;

ReactDOM.render(<App />, document.getElementById('app'));
