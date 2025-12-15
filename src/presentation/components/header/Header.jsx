// import {AppBar,Toolbar,styled,Box} from '@mui/material';
// import Search from './Search';
// import logo  from '../../../assets/pustakLogo.svg'
// import CustomButtons from './CustomButton';
// const Header=()=>{
//     return(
    
//         <StyledHeader>
//              <StyledToolbar>
//         <LogoWrapper>
//           <LogoImage src={logo} alt="logo" />
//         </LogoWrapper>
//         <Search/>
//         <CustomButtons/>
//       </StyledToolbar>
//         </StyledHeader>  )
// }
// export default Header;
// const StyledHeader = styled(AppBar)`
//   background-color: #2D5FAD;
// height:55px;
//   justify-content: center;

// `;

// const StyledToolbar = styled(Toolbar)`
//   min-height: 55px;
//   display: flex;
//   align-items: center;
// `;


// const LogoWrapper = styled(Box)`
//   background-color: white;
//   border-radius: 20px;
//   padding: 4px 12px;
//   display: inline-flex;
//   align-items: center;
//   width: fit-content;
//   justify-content: center;

// `;

// export const LogoImage = styled("img")`
//   height: 35px;
//   width: auto;
// `;




import { AppBar, Toolbar, Box, IconButton } from "@mui/material";
import { useState } from "react";
import Search from "./Search";
import logo from "../../../assets/pustakLogo.svg";
import CustomButtons from "./CustomButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "./Header.css";

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <AppBar className="header">
      <Toolbar className="header-toolbar">
        <Box className="logo-wrapper">
          <img src={logo} alt="logo" className="logo-img" />
        </Box>


        <Box className="search-desktop">
          <Search />
        </Box>

        <Box className="right-section">
          <CustomButtons />


          <IconButton
            className="mobile-search-icon"
            onClick={() => setOpenSearch(true)}
          >
            <SearchIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {openSearch && (
        <Box className="mobile-search-wrapper">
          <Search />
          <IconButton onClick={() => setOpenSearch(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
      )}
    </AppBar>
  );
};

export default Header;
