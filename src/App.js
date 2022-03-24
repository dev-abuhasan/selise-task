import toast from "react-hot-toast";
import { ToastNotify } from "./components/Reuseable/ToastNotify/ToastNotify";
// import Loading from "./components/Reuseable/Loading/Loading";

const App = () => {
  toast.error('Test');
  toast.success('Test');
  return (
    <div className="App" >
      {/* <Loading /> */}
      <h1>Test</h1>
      <p>a</p>
      <ToastNotify />
    </div >
  );
}

export default App;
