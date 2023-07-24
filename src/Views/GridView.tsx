import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';

const GridView = () =>{

    const data = [
        {
            Mois:'Janvier',
            temp1:'25',
            temp2:'30',
            temp3:'25',
        },
        {
            Mois:'Février',
            temp1:'25',
            temp2:'30',
            temp3:'25',
        },
        {
            Mois:'Mars',
            temp1:'25',
            temp2:'30',
            temp3:'25',
        },
        {
            Mois:'Avril',
            temp1:'25',
            temp2:'30',
            temp3:'25',
        },
        {
            Mois:'Mai',
            temp1:'25',
            temp2:'30',
            temp3:'25',
        },
        {
            Mois:'Juin',
            temp1:'25',
            temp2:'30',
            temp3:'25',
        },
        {
            Mois:'Juillet',
            temp1:'25',
            temp2:'30',
            temp3:'25',
        },
        {
            Mois:'Août',
            temp1:'25',
            temp2:'30',
            temp3:'25',
        },
        {
            Mois:'Septembre',
            temp1:'25',
            temp2:'30',
            temp3:'25',
        },
        {
            Mois:'Octobre',
            temp1:'25',
            temp2:'30',
            temp3:'25',
        },
        {
            Mois:'Novembre',
            temp1:'25',
            temp2:'30',
            temp3:'25',
        },
        {
            Mois:'Décembre',
            temp1:'25',
            temp2:'30',
            temp3:'25',
        },

    ]



    return (
        <div>
            <GridComponent dataSource={data}>
                <ColumnsDirective>
                <ColumnDirective field='Mois' headerText='Mois' width='100' textAlign="Center"/>
                <ColumnDirective field='temp1' headerText='Mois' width='100' textAlign="Center"/>
                <ColumnDirective field='temp2' headerText='Mois' width='100' textAlign="Center"/>
                <ColumnDirective field='temp3' headerText='Mois' width='100' format="C2" textAlign="Center"/>
                
        </ColumnsDirective>
    </GridComponent>
        </div>
    )
}

export default GridView