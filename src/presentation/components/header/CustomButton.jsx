import { Box, Typography, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useNavigate } from "react-router-dom";

const CustomButtons = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>

      <Container onClick={() =>{console.log("login"); navigate("/login")}}>
        <StyledIcon as={AccountCircleOutlinedIcon} />
        <Text>Login</Text>
      </Container>

      <Container onClick={() => navigate("/track-order")}>
        <StyledIcon as={LocationOnOutlinedIcon} />
        <Text>Track Order</Text>
      </Container>

      <Container onClick={() => navigate("/cart")}>
        <StyledIcon as={ShoppingCartIcon} />
        <Text>Cart</Text>
      </Container>
    </Wrapper>
  );
};

export default CustomButtons;
const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 4rem;
`;

const Container = styled(Box)`
  display: flex;
  align-items: center;
  gap: 4px;      /* Small space between icon & text */
  cursor: pointer;
     font-family: 'Open Sans', sans-serif;

`;

const StyledIcon = styled('span')`
  font-size: 28px;
  display: flex;
  align-items: center;
`;

const Text = styled(Typography)`
  color: white;
  font-size: 0.85rem;
  line-height: 1;
`;
