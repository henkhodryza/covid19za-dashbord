import React from 'react';

import ConfirmedCaseChart from '../components/charts/overviewLine';
import OverviewStyle from '../styles/overview';
import Totals from '../components/totals';

export default function Overview() {
  return (
    <OverviewStyle>
      <Totals />
      <div className="line-chart">
        <ConfirmedCaseChart />
      </div>
    </OverviewStyle>
  );
}
