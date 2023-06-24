import ChartApi from "react-apexcharts";
import formatedTime from "../../utils/formatTime";
import PropTypes from "prop-types";

function Chart({ data }) {
  const dataCurrency = data;

  const series = [
    {
      name: dataCurrency[0]?.name,
      data: [],
    },
  ];

  const options = {
    chart: {
      height: 150,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [],
      labels: {
        format: "dd/MM/yy",
      },
    },
  };

  Object.keys(dataCurrency).map((key) => {
    const currency = dataCurrency[key];
    series[0].data.push(Number(currency.high));
    options.xaxis.categories.push(formatedTime(currency.timestamp));
  });

  return (
    <>
      <ChartApi
        options={options}
        series={series}
        width="500"
        type="area"
        height={400}
      />
    </>
  );
}

export default Chart;

Chart.propTypes = {
  data: PropTypes.array,
  currencySelect: PropTypes.string,
};
