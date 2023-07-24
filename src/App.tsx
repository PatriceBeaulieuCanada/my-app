import {SidebarComponent,SidebarType} from '@syncfusion/ej2-react-navigations';
import MainView from './Views/MainView';
import GraphView from './Views/GraphView';
import CenterView from './Views/CenterView';
import GridView from './Views/GridView';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {useRef} from 'react';
import './App.css';

function App() {

  let sidebarObj: SidebarComponent;
  const dockBar:any=useRef() ;
  let type: SidebarType = "Auto";
  function onCreate(): void  {
    sidebarObj.element.style.visibility='';
}

  const toggleClickMenu=(event:any)=>{
    //console.log(event)
    dockBar.current.toggle()         
   }

  const toggleClickPrincipale=()=>{
    window.location.pathname = "/"
  }

  const toggleClickGrid=()=>{
    window.location.pathname = "/grid"
  }

  const toggleClickGraph=()=>{
    window.location.pathname = "/graph"
  }

  const toggleClickCenter=()=>{
    window.location.pathname = "/center"
  }

return (
    <div className="app">
      
      <SidebarComponent id="dockSidebar" ref={dockBar} enableDock={true} dockSize="60px" width="220px" position='Left' type={type}>
                         <div className="dock">
                            <ul>
                                <li className="sidebar-item" id="toggle" onClick={toggleClickMenu}>
                                    <span className="e-icons expand"/>
                                    <span className="e-text" title="menu">Menu</span>
                                </li>
                                <li className="sidebar-item" onClick={toggleClickPrincipale}>
                                    <span className="e-icons product"/>
                                    <span className="e-text" title="principale">Principale</span>
                                </li>  
                                <li className="sidebar-item" onClick={toggleClickGrid}>
                                    <span className="e-icons grid"/>
                                    <span className="e-text" title="principale">Tableau</span>
                                </li>  
                                <li className="sidebar-item" onClick={toggleClickGraph}>
                                    <span className="e-icons graph"/>
                                    <span className="e-text" title="principale">Graphique</span>
                                </li>  
                                <li className="sidebar-item" onClick={toggleClickCenter}>
                                    <span className="e-icons center"/>
                                    <span className="e-text" title="principale">Centrer</span>
                                </li>                                
                            </ul>
                        </div>
        </SidebarComponent>
        
        <Router>
          <Routes>
            <Route path="/" element={<MainView/>}/>
            <Route path="/grid" element={<GridView/>}/>
            <Route path="/graph" element={<GraphView/>}/>
            <Route path="/center" element={<CenterView/>}/>
          </Routes>      
        </Router>
        
    </div>
  );
}

export default App;
