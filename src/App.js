import React, { Component, lazy, Suspense } from 'react';
import Temp from './Component/PureComponentExample';
// import LazyLoadedComponent from './Component/LazyLoadingComponentExample';

const LazyLoadedComponent = lazy(() => import('./Component/LazyLoadingComponentExample'))








class App extends Component {


  render() {
    console.log("rendered app");

    return (
      <div className="App">
        <Temp />
        <Suspense fallback={<div>Loading...</div>}>
          <LazyLoadedComponent />
        </Suspense>
      </div>
    );
  }
}

export default App;
