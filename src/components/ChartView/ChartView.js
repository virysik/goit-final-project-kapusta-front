import ChartReport from 'components/ChartReport';
import ChartReportMobile from 'components/ChartReport/ChartReportMobile';
import useWindowDimensions from 'hooks/useWindowDimensions';

export default function ChartView({ data, type }) {
  const viewPort = useWindowDimensions();

  return (
    <>
      {viewPort.width < 768 && <ChartReportMobile type={type} data={data} />}
      {viewPort.width >= 768 && <ChartReport type={type} data={data} />}
    </>
  );
}
