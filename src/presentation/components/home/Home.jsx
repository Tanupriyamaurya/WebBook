
import CategoryRow from './CategoryRow'
import { secondaryNavData } from '../../../data/data'
import CarouselComponent from './CarouselComponent';
import {styled,Box} from '@mui/material';
const Home = () => {
  return (
    <>
         <CategoryRow items={secondaryNavData}/>
         <Component><CarouselComponent/>
        </Component>
    </>
  )
}

export default Home
const Component=styled(Box)`
padding:10px 10px;
background:#F2F2F2;`