import {PaperProvider} from 'react-native-paper';
import RootNavigator from './navigation/RootNavigator';

const App = () => {
  return (
    <PaperProvider>
      <RootNavigator />
    </PaperProvider>
  );
};

export default App;
