import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, ColumnSeries} from '@syncfusion/ej2-react-charts';

const GraphView = () =>{

    const primaryxAxis = { valueType: 'Category', title: 'Semaine' };
    const primaryyAxis = { minimum: 0,title: 'Moyenne de %' };
    const templateStyle = { height: '100%', width: '100%' };

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
    

    return (
        <div>
            <ChartComponent primaryXAxis={primaryxAxis as any} primaryYAxis={primaryyAxis} title='Moyenne de % par semaine'
                height='95%' width='90%' style={{ "height": "100%", "width": "100%" }} >            
                <SeriesCollectionDirective>
                    <SeriesDirective dataSource={data} xName='semaine' yName='moyenne' name='moyenne' type='Column'>
                    </SeriesDirective>
                </SeriesCollectionDirective>
                <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}/>
                </ChartComponent>        
        </div>
    )
}

export default GraphView