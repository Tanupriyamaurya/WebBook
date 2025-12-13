import Header from './presentation/components/header/Header';
import { Box } from '@mui/material';
import './App.css';
import AppRoutes from "./routes/AppRoutes";


function App() {
  return (<>
    <Header/>
    <Box style={{marginTop:54}}> <AppRoutes />
</Box>
</>
  );
}

export default App;
