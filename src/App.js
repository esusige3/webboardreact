import React from 'react';
import {BrowserRouter,Route, Link} from 'react-router-dom';
import {Provider} from "mobx-react";
import Home from './Home';
import Page from './Page';
import Page2 from './Page2';
import Page3 from './Page3';
import Board from './Board';
import './App.scss'

import Stores from './Stores'

const App =()=>(
    //<link rel="stylesheet" href="BSTable.css">
    <Provider stores={Stores}>
        <BrowserRouter>

            <header className='app-header'>
                <ul className='menubar'>
                    <li><Link className = 'menuitem'to="/">Home</Link></li>
                    <li><Link className = 'menuitem'to="/Page">Page1</Link></li>
                    <li><Link className = 'menuitem'to="/Page2">Page2</Link></li>
                    <li><Link className = 'menuitem'to="/Page3">Page3</Link></li>
                </ul>
            </header>

            <section className='app-body'>
                <Route path='/' exact component={Home}/>
                <Route path='/board/:command?/:postid?' component={Board}/>
                <Route path='/Page' component={Page}/>
                <Route path='/Page2' component={Page2}/>
                <Route path='/Page3' component={Page3}/>

            </section>

        </BrowserRouter>
    </Provider>
  );

/*class  App extends React.Component{
  state = {
    localtion: 0
  };
  render() {
    return (
        <div>
          {location === 0 && <Home/>}
          {location === 1 && <Page/>}
          {location === 2 && <Page2/>}
          {location === 3 && <Page3/>}
        </div>
    );
  }

}*/


export default App;
