import React, {Component} from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { Persistor, Store } from './services/redux/Store';
import GithubListPage from './Pages/Github/GithubListPage';

class App extends Component {
  render(){
    return(
      <Provider store={Store}>
        <PersistGate loading={null} persistor={Persistor}>
          <GithubListPage />
        </PersistGate>
      </Provider>
    )
  }
}

export default App