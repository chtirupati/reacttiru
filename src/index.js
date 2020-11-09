//Implement React Features
import React from 'react';
//Implement-dom package
import ReactDOM from 'react-dom';

//ReactDOM.render(<h1>"Hello React..."</h1>, document.getElementById('root'));

//ReactDOM.render(<div><h1>Thiru</h1><p>Chilagani</p></div>, document.getElementById('root'));

//jsx Declaration
const result = <div>
  <h1>Chilagani</h1>
  <h1>Thirupathi</h1>
  <h1>Swathi</h1>
</div>
ReactDOM.render(result, document.getElementById('root'));