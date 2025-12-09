
import {InputBase,Box,styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const Search=()=>{
    return (
    <SearchContainer>
    <InputSearchBase placeholder='Search for books by title, author, Publication or ISBN'
    inputProps={{ 'aria-label': 'search books' }}/>
    <SearchIconWrapper>
      <SearchIcon data-testid="SearchIcon"/></SearchIconWrapper>
    </SearchContainer>
    )
}
export default Search;
 




const SearchContainer = styled(Box)`
  background: #fff;
  width: 40%;
  margin-left: 3rem;
  display: flex;
  align-items: center;
  height: 36px;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px #e0e0e0;
`;

const InputSearchBase = styled(InputBase)`
  flex: 1;
  font-size: 12px;

  & input {
    padding: 0 8px;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
  }
`;

const SearchIconWrapper = styled(Box)`
  background-color: #eb7311;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13%;
  height: 100%;
  border-radius: 0 4px 4px 0;
`;
