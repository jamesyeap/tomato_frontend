import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

// components for testing
import Category from './components/Category/Category';
import DeletableCategory from './components/Category/DeletableCategory'
import Task from './components/Task/Task';
import Tasks from './sections/Tasks/Tasks';

// store
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <Container sx={{bgcolor: 'blue'}}>
        {/* <DeletableCategory />
        <Category /> */}

        {/* <Task name="Task 1" description="hello"/> */}
        <Tasks />
      </Container>
    </Provider>
  );
}

export default App;
