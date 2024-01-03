import Clock from "./components/Clock";
import Boxes from "./components/Boxes";

function App() {
  return (
    <>
      <div className="page full-screen">
        <div className="clock-wrap">
          <h2 class="clock-title">Lorem Ipsum is simply dummy<br></br> text of the printing</h2>
          <Clock />
        </div>
        <div className="main background">
            <div class="shadow"></div>
            
            <div class="result">
                <h2 class="title">Lorem Ipsum is simply</h2>
                <div class="space-50"></div>
                <Boxes />
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
