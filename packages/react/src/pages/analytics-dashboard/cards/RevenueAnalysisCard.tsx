import React from 'react';
import Bullet, { Size, Tooltip } from 'devextreme-react/bullet';
import DataGrid, { Column } from 'devextreme-react/data-grid';
import { CardAnalytics } from '../../../components/card-analytics/CardAnalytics';

export const RevenueAnalysisCard = ({ datasource }) => (
  <CardAnalytics title='Revenue Analysis' contentClass='sales-by-state' isLoading={!datasource.length}>
    <DataGrid dataSource={datasource} height={270}>
      <Column caption='State' dataField='stateName' />
      <Column alignment='left' caption='Sales' dataField='total' dataType='number' format='currency' sortOrder='desc' hidingPriority={2} />
      <Column alignment='left' caption='% Sold' dataField='percentage' name='percentN' format='percent' hidingPriority={1} />
      <Column
        alignment='left'
        caption='Percentage'
        dataField='percentage'
        name='percentB'
        cellRender={(cellInfo) => (
          <Bullet showTarget={false} showZeroLevel={false} value={cellInfo.data.percentage * 100} startScaleValue={0} endScaleValue={100}>
            <Tooltip enabled={false} />
            <Size width={200} height={20} />
          </Bullet>
        )}
        width={200}
      />
    </DataGrid>
  </CardAnalytics>
);
