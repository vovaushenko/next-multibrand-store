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
          header=""
          icon={null}
          stat=""
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
          header=""
          icon={null}
          stat=""
          stats={[['Sold', '23 pairs']]}
          imgSrc="/images/og-travis.png"
        />
        <DashboardCard
          variant="figure"
          title="Earnings"
          header=""
          icon={null}
          stat=""
          stats={[
            ['Revenue', '$24.4k'],
            ['Profit', '$4.4k'],
            ['Orders', '108'],
          ]}
          imgSrc="/images/charts/digram.svg"
        />
        <DashboardCard
          variant="figure"
          title="Users"
          header=""
          icon={null}
          stat=""
          stats={[
            ['Total', '12134'],
            ['Active', '428'],
            ['New', '26'],
          ]}
          imgSrc="/images/charts/stats.svg"
        />
      </Styled.BottomRow>
    </Styled.Container>
  );
};

export default Dashboard;
