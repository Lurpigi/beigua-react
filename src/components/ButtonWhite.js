import { createTheme } from '@mui/material/styles';
import { Button }from '@mui/material';
import { styled } from '@mui/material/styles';
import { fontStyle } from '@mui/system';

const ButtonWhite = styled(Button)(({theme})=>({
    backgroundColor: theme.palette.otherColor.main,
    "&:hover":{ backgroundColor: theme.palette.secondary.dark},
    margin: 10
  }));

  export default ButtonWhite;

