import './scss/App.scss';
import FFXISetBuilder from './GearsetBuilder/FFXISetBuilder';

function App() {
  return (
    <div className="app">
      <div className="site-main-body-wrapper">
        <div className="site-main-body">
          <FFXISetBuilder />
        </div>
      </div>

    </div>
  );
}

export default App;
