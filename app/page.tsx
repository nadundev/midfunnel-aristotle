import Header from "./components/header";
import Rightpanel from "./components/rightpanel";
import LeftPanel from "./components/leftPanel";
import MiddlePanel from "./components/middlePanel";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="grid grid-cols-[20%_1fr_25%] h-[calc(100vh_-_56px)] overflow-hidden mt-[56px]">
        <LeftPanel />
        <MiddlePanel />
        <Rightpanel />
      </div>
    </main>
  );
}
