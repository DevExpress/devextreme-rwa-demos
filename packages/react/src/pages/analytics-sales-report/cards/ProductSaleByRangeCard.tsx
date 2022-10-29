import React from 'react';
import PieChart, { Font, Label, Legend, Margin, Series, Size } from 'devextreme-react/pie-chart';
import Chart, { CommonAxisSettings, Tick, Legend as ChartLegend, CommonSeriesSettings, SeriesTemplate, ValueAxis, Label as ChartLabel, Format } from 'devextreme-react/chart';
import { CardAnalytics } from '../../../components/card-analytics/CardAnalytics';

type ProductSaleByRangeCardProps = { datasource: Array<{ [key: string]: unknown }> };

export const ProductSaleByRangeCard = React.memo<ProductSaleByRangeCardProps>(({ datasource }) => (
  <CardAnalytics title='Product Sale by Range' contentClass='sales-by-category' isLoading={!datasource.length}>
    <PieChart id='pie' className='sales-pie' dataSource={datasource} type='doughnut' diameter={0.8} innerRadius={0.6}>
      <Series argumentField='name' valueField='value'>
        <Label backgroundColor='none' radialOffset={-20} visible customizeText={({ percentText }) => percentText}>
          <Font color='#757575' size={15} />
        </Label>
      </Series>
      <Legend visible={false}>
        <Margin top={70} />
      </Legend>
      <Size height={270} />
    </PieChart>
    <Chart id='bar' dataSource={datasource} className='sales-bars' rotated>
      <CommonAxisSettings visible={false}>
        <Tick visible={false} />
      </CommonAxisSettings>
      <ChartLegend visible={false} />
      <CommonSeriesSettings argumentField='name' valueField='value' type='bar' ignoreEmptyPoints />
      <SeriesTemplate nameField='name' />
      <ValueAxis>
        <ChartLabel>
          <Format type='largeNumber' />
        </ChartLabel>
      </ValueAxis>
    </Chart>
  </CardAnalytics>
));
