import ChartApi from "react-apexcharts";
import formatedTime from "../../utils/formatTime";
import PropTypes from "prop-types";

import { Container } from "./style";

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
      foreColor: "#e0d100",
      toolbar: {
        tools: {
          zoomin: false,
          zoomout: false,
        },
      },
      dropShadow: {
        color: "#f00",
        background: "#f00",
        // opacity: 0.5,
      },
    },
    dataLabels: {
      enabled: false,
      style: {
        color: "#fff",
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      type: "datetime",
      categories: [],
      labels: {
        format: "dd/MM/yy",
      },
    },
    title: {
      text: `Moeda: ${dataCurrency[0]?.code} / ${dataCurrency[0]?.codein}`,
      align: "center",
      style: {
        color: "#fff",
      },
    },
    grid: {
      borderColor: "#6fd1ff",
    },
    fill: {
      colors: "#5432f6",
      // type: "solid",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        // opacityTo: 1,
        // stops: [0, 50, 100],
        // colorStops: [],
      },
    },
  };

  Object.keys(dataCurrency).map((key) => {
    const currency = dataCurrency[key];
    series[0].data.push(parseFloat(currency.high));
    options.xaxis.categories.push(formatedTime(currency.timestamp));
  });

  return (
    <Container>
      <ChartApi
        className="chart"
        options={options}
        series={series}
        type="area"
        height={400}
      />
    </Container>
  );
}

export default Chart;

Chart.propTypes = {
  data: PropTypes.array,
  currencySelect: PropTypes.string,
};
