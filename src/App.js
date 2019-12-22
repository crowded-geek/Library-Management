import React from 'react';
import './App.css';
import { Card, CardHeader } from '@patternfly/react-core'
import '@patternfly/react-core/dist/styles/base.css';
import HeadTable from './components/HeadTable'
import Books from './components/Books';
import MostIssued from './components/MostIssued'
import Footer from './components/Footer'
function App() {
  return (
      <div className="App">
        <Card isHoverable>
          <CardHeader style={{paddingLeft:6, paddingBottom:18, fontSize:40, background:"#AA00FF"}}><b style={{color:"#ffffff"}}>Library Management</b></CardHeader>
        </Card>
        <br/>
        <br/>
        <p style={{paddingLeft:6, fontSize:34,}}><b style={{color:"#AA00FF"}}>Status</b></p>
        <hr/>
        <HeadTable/>
        <hr/>
        <br/>
        <p style={{paddingLeft:6, fontSize:36}}><b style={{color:"#AA00FF"}}>Books</b></p>
        <br/>
        <Books/>
        <br/>
        <br/>
        <hr/>
        <br/>
        <p style={{paddingLeft:6, fontSize:36}}><b style={{color:"#AA00FF"}}>Most Issued Books</b></p>
        <br/>
        <MostIssued/>
        <br/>
        <br/>
        <Footer/>
      </div>
  );
}

export default App;
