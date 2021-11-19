import ChartReport from 'components/ChartReport';
import ChartReportMobile from 'components/ChartReport/ChartReportMobile';
import useWindowDimensions from 'hooks/useWindowDimensions';

export default function ChartView({ filteredExp }) {
  const viewPort = useWindowDimensions();

  return (
    <>
      {viewPort.width < 768 && <ChartReportMobile />}
      {viewPort.width >= 768 && <ChartReport />}
    </>
  );
}
