import "./App.css";
import AreaChart from "./components/StreamedAreaChart";
import BarChart from "./components/SprintBarChart";
import TableList from "./components/TableList";
import CardUi from "./components/CardUi";
import SpacingComponent from "./components/SpacingComponent";

function App() {
  return (
    <>
      <SpacingComponent />
      <AreaChart />
      <SpacingComponent />
      <BarChart />
      <SpacingComponent />
      <TableList />
      <SpacingComponent />
      <CardUi />
    </>
  );
}

export default App;
