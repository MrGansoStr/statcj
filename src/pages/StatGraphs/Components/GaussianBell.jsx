import { useTheme } from "@mui/material";
import { Area, AreaChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis, ComposedChart, Line } from "recharts";

const LineZ = [
  {
    "name": "-5",
    "ValueXLine": -5,
    "ValueYLine": 0.001,
    "ValueXArea": -5,
    "ValueYArea": 0.001
  },
  {
    "name": "-4",
    "ValueXLine": -4,
    "ValueYLine": 0.001,
    "ValueXArea": -4,
    "ValueYArea": 0.001
  },
  {
    "name": "-3",
    "ValueXLine": -3,
    "ValueYLine": 0.01,
    "ValueXArea": -3,
    "ValueYArea": 0.01
  },/*
  {
    "name": "-1.96",
    "ValueXLine": -1.96,
    "ValueYLine": 0.0321,
    "ValueXArea": -1.96,
    "ValueYArea": 0.0321
  },*/
  {
    "name": "0",
    "ValueXLine": 0,
    "ValueYLine": 0.4,
    "ValueXArea": 0,
    "ValueYArea": 0.4
  },/*
  {
    "name": "1.96",
    "ValueXLine": 1.96,
    "ValueYLine": 0.0321,
    "ValueXArea": 0,
    "ValueYArea": 0.0321
  },*/
  {
    "name": "3",
    "ValueXLine": 3,
    "ValueYLine": 0.01,
    "ValueXArea": 0,
    "ValueYArea": 0.01
  },
  {
    "name": "4",
    "ValueXLine": 4,
    "ValueYLine": 0.001,
    "ValueXArea": 4,
    "ValueYArea": 0.001
  },
  {
    "name": "5",
    "ValueXLine": 5,
    "ValueYLine": 0.001,
    "ValueXArea": 5,
    "ValueYArea": 0.001
  }
];

const AreaZ = [
  {
    "name": "-5",
    "ValueXArea": -5,
    "ValueYArea": 0.001
  },
  {
    "name": "-4",
    "ValueXArea": -4,
    "ValueYArea": 0.001
  },
  {
    "name": "-3",
    "ValueXArea": -3,
    "ValueYArea": 0.01
  },/*
  {
    "name": "-1.96",
    "ValueXArea": -1.96,
    "ValueYArea": 0.0321
  },*/
  {
    "name": "0",
    "ValueXArea": 0,
    "ValueYArea": 0.4
  },
  /*
  {
    "name": "1.96",
    "ValueXArea": 0,
    "ValueYArea": 0.975
  },*/
  {
    "name": "3",
    "ValueXArea": 0,
    "ValueYArea": 0.01
  },
  {
    "name": "4",
    "ValueXArea": 4,
    "ValueYArea": 0.001
  },
  {
    "name": "5",
    "ValueXArea": 5,
    "ValueYArea": 0.001
  },
];

function GaussianBell() {
  const theme = useTheme();
  return (
    <ResponsiveContainer width='100%' height={250} className="">
      <ComposedChart
        margin={{ top: 10, right: 30, left: 20, bottom: 20 }}
        data={LineZ}
        title="Grafico Z">
        <XAxis dataKey="ValueXLine" />
        <YAxis />
        <Line type="monotone" dataKey="ValueYLine" dot={false} stroke={theme.palette.secondary.main} fill={theme.palette.secondary.main} />
        <Area type="monotone" dataKey="ValueYArea" stroke={theme.palette.secondary.main} fill={theme.palette.secondary.main} />
        <ReferenceLine x={0} stroke={theme.palette.primary.main} label="" />
        <Tooltip />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
export default GaussianBell;