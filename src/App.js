import logo from './logo.svg';
import './App.css';
import OtpInput from './component/otpInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          OTP INPUT BOX
        </p>
        <OtpInput numberOfelements = {7} />
      </header>
    </div>
  );
}

export default App;
