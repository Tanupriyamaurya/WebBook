import Header from './presentation/components/header/Header';
import Home from './presentation/components/home/Home';
import { Box } from '@mui/material';
import './App.css';

function App() {
  return (<>
    <Header/>
    <Box style={{marginTop:54}}><Home/></Box>
</>
  );
}

export default App;
