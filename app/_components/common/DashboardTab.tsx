'use client';

import { useDashboardTabStore } from '@/app/_store/useDashboardTab';
import { Button } from '@/components/ui/button';

const DashboardTab = () => {
  const { tab, setTab } = useDashboardTabStore();

  const onClickStatistics = () => {
    setTab('statistics');
  };

  const onClickSolved = () => {
    setTab('solved');
  };

  const onClickCumulative = () => {
    setTab('cumulative');
  };

  return (
    <>
      <Button
        onClick={onClickStatistics}
        className={`w-24 rounded-r-none bg-tertiary py-5 text-bolder hover:bg-accent-foreground hover:text-primary-foreground ${tab === 'statistics' && 'bg-accent-foreground text-primary-foreground'}`}
      >
        일별 통계
      </Button>
      <Button
        onClick={onClickSolved}
        className={`w-24 rounded-none bg-tertiary py-5 text-bolder hover:bg-accent-foreground hover:text-primary-foreground ${tab === 'solved' && 'bg-accent-foreground text-primary-foreground'}`}
      >
        월별 푼문제
      </Button>
      <Button
        onClick={onClickCumulative}
        className={`w-24 rounded-l-none bg-tertiary py-5 text-bolder hover:bg-accent-foreground hover:text-primary-foreground ${tab === 'cumulative' && 'bg-accent-foreground text-primary-foreground'}`}
      >
        총 누적
      </Button>
    </>
  );
};

export default DashboardTab;
