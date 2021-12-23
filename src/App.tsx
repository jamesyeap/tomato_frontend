import { Container } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import Category from './components/Category/Category';
import DeletableCategory from './components/Category/DeletableCategory'
import Task from './components/Task/Task';

function App() {
  return (
    <>
    <Container sx={{bgcolor: 'blue'}}>
      {/* <DeletableCategory />
      <Category /> */}

      <Task name="Task 1" description="hello"/>
    </Container>
    </>
  );
}

export default App;
