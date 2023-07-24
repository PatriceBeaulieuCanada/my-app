import { DashboardLayoutComponent,PanelsDirective,PanelDirective,ResizeArgs } from '@syncfusion/ej2-react-layouts';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { useState,useMemo,useRef} from 'react'
import Panel1 from '../Panels/Panel1';
import Panel2 from '../Panels/Panel2';

const MainView = () =>{
    const param = { action: ''}
    const [data1,setData] = useState([])

    let cellSpacing: number[] = [6, 6];
    let allowDragging = true;

    const dateValue:Date=new Date();
    
    const handleClick = async () =>{
        param.action = 'GetStatProjet'
       
    }

    const panetContent=()=>{

        return(<Panel1 data={data} />)

    } 

    const data = [
        {
            semaine : 19,
            moyenne : 2
        },
        {
            semaine : 20,
            moyenne : 0.4
        },
        {
            semaine : 21,
            moyenne : 0.8
        },
        {
            semaine : 22,
            moyenne : 0.3
        },
        {
            semaine : 23,
            moyenne : 0.45
        },
        {
            semaine : 24,
            moyenne : 0.25
        },

    ]
    
    return(
              
        <div className='mainContainer'>
                <div className='mainHeader'>
                        <div className='item'>                            
                                <label style={{fontSize:'20px',marginRight:'20px'}}>Date début : </label>
                                <DatePickerComponent  width={300} value={dateValue} format='yyyy-MM-dd' style={{fontSize:'20px'}}/>                            
                        </div>
                        <div className='item'>                            
                                <label style={{fontSize:'20px',marginRight:'20px'}}>Date fin</label>
                                <DatePickerComponent  width={300} value={dateValue} format='yyyy-MM-dd' style={{fontSize:'20px'}}/>                                                        
                        </div>
                        <div className='item'>
                                <ButtonComponent onClick={handleClick}>Validez</ButtonComponent>
                        </div>                    
                </div>
                <div className='mainDashboard'>
                    <DashboardLayoutComponent id="edit_dashboard" cellSpacing={cellSpacing} allowResizing={false}  
                        cellAspectRatio={100 / 100} columns={5} allowDragging={allowDragging} className='dashboard'>

                        <PanelsDirective>
                            <PanelDirective sizeX={1} sizeY={1} row={0} col={0} content={panetContent}></PanelDirective>
                            <PanelDirective sizeX={2} sizeY={1} row={0} col={1} content={panetContent}></PanelDirective>
                            <PanelDirective sizeX={2} sizeY={1} row={0} col={3} content={panetContent}></PanelDirective>
                            <PanelDirective sizeX={3} sizeY={1} row={1} col={0} content={Panel2}></PanelDirective>
                            <PanelDirective sizeX={2} sizeY={1} row={1} col={3} content={Panel2}></PanelDirective>   
                        </PanelsDirective>                
                    </DashboardLayoutComponent>
                </div>
        </div>
)}

export default MainView