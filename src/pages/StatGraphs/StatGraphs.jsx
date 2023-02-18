
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  registerables
} from 'chart.js';
ChartJS.register(CategoryScale);
ChartJS.register(...registerables);

import { Bar } from 'react-chartjs-2';
import { Box, Typography, useTheme } from '@mui/material';

import RechartsTest from './Components/RechartsTest';

function StatGraphs(props) {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        backgroundColor: theme.palette.secondary.main,
        barPercentage: 0.5,
        barThickness: 12,
        borderRadius: 4,
        categoryPercentage: 0.5,
        data: [18, 5, 19, 27, 29, 19, 20],
        label: 'This year',
        maxBarThickness: 10
      }
    ],
    labels: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug', '7 aug']
  };

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    xAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary,
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: theme.palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: theme.palette.divider
        }
      }
    ],
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  return (
    <Box component="div" className="container-lg">
      <Typography variant="h5" className="d-flex align-items-center justify-content-center p-4">Gráficos Estadísticos</Typography>
      <Box
        sx={{
          height: 400,
          position: 'relative'
        }}
        className="p-3"
      >
        <Bar options={options} data={data} />
      </Box>
      <RechartsTest/>
    </Box>
  );
};

export default StatGraphs;