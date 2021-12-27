import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

// components for testing
import Category from './components/Category/Category';
import Untaggableategory from './components/Category/UntaggableCategory'
import Task from './components/Task/Task';
import Tasks from './sections/Tasks/Tasks';

import {
  QueryClient,
  QueryClientProvider
} from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <Container>
          {/* <UntaggableCategory /> */}
          {/* <Category /> */}

          {/* <Task name="Task 1" description="hello"/> */}
          <Tasks />
        </Container>
      </QueryClientProvider>
  );
}

export default App;
