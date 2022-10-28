import PieChart, {
  Font,
  Label,
  Legend,
  Margin,
  Series,
  Size,
} from 'devextreme-react/pie-chart';
import React from 'react';
import { CardAnalytics } from '../../../components/card-analytics/CardAnalytics';

export const RevenueSnapshotByStatesCard = ({ datasource }) => (
  <CardAnalytics
    title='Revenue Snaphot by States'
    contentClass='sales-by-state'
    isLoading={!datasource.length}
  >
    <PieChart
      id='pie'
      dataSource={datasource}
      type='doughnut'
      diameter={0.8}
      innerRadius={0.6}
    >
      <Series argumentField='stateName' valueField='total'>
        <Label
          backgroundColor='none'
          radialOffset={-20}
          visible='true'
          customizeText={({ percentText }) => percentText}
        >
          <Font color='#757575' size={15} />
        </Label>
      </Series>
      <Legend>
        <Margin top={70} />
      </Legend>
      <Size height={270} />
    </PieChart>
  </CardAnalytics>
);
