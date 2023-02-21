import { Box, Typography, useTheme } from "@mui/material";
import { Area, AreaChart, CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page B', uv: 450, pv: 2400, amt: 2400 }, { name: 'Page C', uv: 300, pv: 2400, amt: 2400 }, { name: 'Page D', uv: 650, pv: 2400, amt: 2400 }];

const data1 = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]

const data2 = [
  {
    "name": "-5",
    "valuex": -5,
    "valuey": 0.001
  },
  {
    "name": "-4",
    "valuex": -4,
    "valuey": 0.001
  },
  {
    "name": "-3",
    "valuex": -3,
    "valuey": 0.01
  },
  {
    "name": "0",
    "valuex": 0,
    "valuey": 0.4
  },
  {
    "name": "3",
    "valuex": 3,
    "valuey": 0.01
  },
  {
    "name": "4",
    "valuex": 4,
    "valuey": 0.001
  },
  {
    "name": "5",
    "valuex": 5,
    "valuey": 0.001
  }
]

function RechartsTest() {

  const theme = useTheme();

  return (
    <Box component="div" className="container-lg p-4">
      <ResponsiveContainer width='100%' height={500} className="">
        <LineChart
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          data={data}
          title="Gráfico de Prueba">
          <Line type="monotone" dataKey="uv" stroke={theme.palette.secondary.main} />
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
      <Box component="div" className="container">
        <ResponsiveContainer width='100%' height={500} className="">
          <AreaChart data={data1}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
            <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" />
            <Area type="monotone" dataKey="uv" stroke={theme.palette.secondary.main} fill={theme.palette.secondary.main} />
          </AreaChart>
        </ResponsiveContainer>
        <Typography variant="h5" className="d-flex align-items-center justify-content-center p-3">Campana de Gauss</Typography>
        <ResponsiveContainer width='100%' height={250} className="">
          <AreaChart
            margin={{ top: 10, right: 30, left: 20, bottom: 20 }}
            data={data2}
            title="Grafico Z">
            <XAxis dataKey="valuex" />
            <YAxis />
            <Area type="monotone" dataKey="valuey" stroke={theme.palette.secondary.main} fill={theme.palette.secondary.main} />
            <ReferenceLine x={0} stroke={theme.palette.primary.main} label="" />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  )
}
export default RechartsTest;