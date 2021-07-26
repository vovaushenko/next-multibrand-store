import React from 'react';
import DashboardCard from '../DashboardCard/DashboardCard';
import { midRow, topRow } from './dashboardData';
import * as Styled from './styles.Dashboard';
/**
 * Admin dashboard component with statistical information.
 *@function Dashboard
 *@returns {JSX.Element} - Rendered Dashboard component
 */

const Dashboard = (): JSX.Element => {
  // TODO: Connect Dashboard with backend and get dynamic data
  return (
    <Styled.Container>
      <Styled.Row>
        {topRow.map((stat) => (
          <DashboardCard
            key={stat.header}
            header={stat.header}
            icon={stat.icon}
            stat={stat.stat}
            variant="icon"
          />
        ))}
      </Styled.Row>
      <Styled.MidRow>
        {midRow.map((stat) => (
          <DashboardCard
            key={stat.header}
            header={stat.header}
            icon={stat.icon}
            stat={stat.stat}
            variant="icon"
          />
        ))}
        <DashboardCard
          variant="stats"
          stats={[
            ['Orders Today', '14'],
            ['Weekly Orders', '121'],
            ['Hot Section', 'Sneakers'],
          ]}
        />
      </Styled.MidRow>

      <Styled.BottomRow>
        <DashboardCard
          variant="figure"
          title="Trends"
          stats={[['Air Jordan OG Travis Scott', 'Sold : 23 pairs']]}
          imgParams={{ src: '/images/og-travis.png', height: 200, width: 300 }}
        />
        <DashboardCard
          variant="figure"
          title="Earnings"
          stats={[
            ['Revenue', '$24.4k'],
            ['Profit', '$4.4k'],
            ['Orders', '108'],
          ]}
          imgParams={{
            src: '/images/charts/digram.svg',
            height: 200,
            width: 500,
          }}
        />
        <DashboardCard
          variant="figure"
          title="Users"
          stats={[
            ['Total', '12134'],
            ['Active', '428'],
            ['New', '26'],
          ]}
          imgParams={{
            src: '/images/charts/stats.svg',
            height: 200,
            width: 300,
          }}
        />
      </Styled.BottomRow>
    </Styled.Container>
  );
};

export default Dashboard;
