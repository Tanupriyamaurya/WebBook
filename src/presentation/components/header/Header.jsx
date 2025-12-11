import {AppBar,Toolbar,styled,Box} from '@mui/material';
import Search from './Search';
import logo  from '../../../assets/pustakLogo.svg'
import CustomButtons from './CustomButton';
const Header=()=>{
    return(
    
        <StyledHeader>
             <StyledToolbar>
        <LogoWrapper>
          <LogoImage src={logo} alt="logo" />
        </LogoWrapper>
        <Search/>
        <CustomButtons/>
      </StyledToolbar>
        </StyledHeader>  )
}
export default Header;
const StyledHeader = styled(AppBar)`
  background-color: #2D5FAD;
height:55px;
  justify-content: center;

`;

const StyledToolbar = styled(Toolbar)`
  min-height: 55px;
  display: flex;
  align-items: center;
`;


const LogoWrapper = styled(Box)`
  background-color: white;
  border-radius: 20px;
  padding: 4px 12px;
  display: inline-flex;
  align-items: center;
  width: fit-content;
  justify-content: center;

`;

export const LogoImage = styled("img")`
  height: 35px;
  width: auto;
`;