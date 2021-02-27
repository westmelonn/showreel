
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/app.scss';

import React from 'react';
import Index from './pages/index';

class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {}
   }

   render() {
      return (
         <Index />
      );
   }
}

export default App;