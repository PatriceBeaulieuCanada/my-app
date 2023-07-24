import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, ColumnSeries} from '@syncfusion/ej2-react-charts';

const Panel1 = (props:any) =>{

    const primaryxAxis = { valueType: 'Category', title: 'Semaine' };
    const primaryyAxis = { minimum: 0,title: 'Moyenne de %' };
    const templateStyle = { height: '100%', width: '100%' };


    return(
        <div className='template' style={templateStyle}>
                <ChartComponent primaryXAxis={primaryxAxis as any} primaryYAxis={primaryyAxis} title='Moyenne de % par semaine'
                height='95%' width='90%' style={{ "height": "100%", "width": "100%" }} >            
                <SeriesCollectionDirective>
                    <SeriesDirective dataSource={props.data} xName='semaine' yName='moyenne' name='moyenne' type='Column'>
                    </SeriesDirective>
                </SeriesCollectionDirective>
                <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}/>
                </ChartComponent>                
        </div> 
       
    )
}

export default Panel1