import { Container, Grid } from '@mui/material';
import { useState, createContext } from 'react';

// components for testing
import Category, { CategoryProps } from './components/Category/Category';
import UntaggableCategory from './components/Category/UntaggableCategory'
import Task from './components/Task/Task';
import Tasks from './sections/Tasks/Tasks';
import { Filter } from './sections/Tasks/Tasks';
import SelectedCategories from './sections/SelectedCategories/SelectedCategories';
import AvailableCategories from './sections/AvailableCategories/AvailableCategories';

import {
  QueryClient,
  QueryClientProvider
} from 'react-query';

const queryClient = new QueryClient();

interface AppContextInterface {
  selectedCategory: CategoryProps|null,
  handleSelectCategory: (category:CategoryProps) => void,
  handleDeselectCategory: () => void,
}

export const Context = createContext<AppContextInterface | null>(null);

function App() {
  const [currFilter, setCurrFilter] = useState(Filter.None);
  const [selectedCategory, setSelectedCategory] = useState<CategoryProps | null>(null);

  // functions for filtering tasks based on their category and/or completion status
  const handleSelectCategory = (category:CategoryProps) => {
    if (currFilter === Filter.CompletedOnly) {
      setCurrFilter(Filter.CategoryAndCompleted);
    } else {
      setCurrFilter(Filter.CategoryOnly);
    }

    setSelectedCategory(category);
    // queryClient.invalidateQueries('tasks'); // refetch new set of tasks based on updated filter
  }

  const handleDeselectCategory = () => {
    if (currFilter == Filter.CategoryAndCompleted) {
      setCurrFilter(Filter.CompletedOnly);
    } else {
      setCurrFilter(Filter.None);
    }

    setSelectedCategory(null);
    // queryClient.invalidateQueries('tasks');
  }

  return (
      <QueryClientProvider client={queryClient}>
        <Context.Provider value={{ selectedCategory, handleSelectCategory, handleDeselectCategory }}>
          <Grid 
            container 
            sx={{minWidth: '100vw', padding: 5}} 
            spacing={5}
            alignItems="center"
            justifyContent="center"
          >
            {/* <UntaggableCategory /> */}
            {/* <Category /> */}

            {/* <Task name="Task 1" description="hello"/> */}
            <Grid item>
              <SelectedCategories />
            </Grid>

            <Grid item>
              <Grid container direction="row" spacing={2} alignItems="baseline">
                <Grid item xs={3}>
                  <AvailableCategories />
                </Grid>

                <Grid item xs={9}>
                  <Tasks currFilter={currFilter} selectedCategory={selectedCategory} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Context.Provider>
      </QueryClientProvider>
  );
}

export default App;
