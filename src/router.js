import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home.js';
import Bin from './components/Bin/Bin.js';
import BinList from './components/BinList/BinList.js';
import AddToBin from './components/AddToBin/AddToBin.js';

export default (
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/bin/:id'  component={Bin} />
        <Route path='/binlist/:id'  component={BinList} />
        <Route path='/addtobin/:id?name=?price='  component={AddToBin} />
    </Switch>
)
