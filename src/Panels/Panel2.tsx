import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, Inject
    ,LegendSettingsModel,AccumulationLegend } from '@syncfusion/ej2-react-charts';

const Panel2 = () =>{

    const legendSettings: LegendSettingsModel = { visible: true };

    const accData=[{x:"5434",y:54}
    ,{x:"5432",y:10}
    ,{x:"5433",y:20}
    ,{x:"5436",y:35}
    ,{x:"5438",y:5}
    ]

    return (
        <div className="template">            
                <AccumulationChartComponent legendSettings={legendSettings}  title='Moyenne de % par famille'
                style={{ "height": "100%", "width": "100%" }} enableSmartLabels={true} enableAnimation={true} center={{ x: '50%', y: '50%' }}>
                <Inject services={[PieSeries, AccumulationLegend]}/>
                <AccumulationSeriesCollectionDirective>
                    <AccumulationSeriesDirective dataSource={accData} xName='x' yName='y' type='Pie'>
                    </AccumulationSeriesDirective>
                </AccumulationSeriesCollectionDirective>
                </AccumulationChartComponent>; 
        </div>
    )
}

export default Panel2
