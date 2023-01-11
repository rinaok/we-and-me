import React, {useEffect, useState} from 'react';
import {Tabs} from './application/components/Tabs/Tabs';
import {WithSplashScreen} from './application/components/HOC/WithSplashScreen/WithSplashScreen';
// app
const App = () => {
  const [isAppReady, setIsAppReady] = useState(false);
  useEffect(() => {
    setIsAppReady(true);
  }, []);

  return (
    <WithSplashScreen isAppReady={isAppReady}>
      <React.Fragment>
        <Tabs />
      </React.Fragment>
    </WithSplashScreen>
  );
};

export default App;
