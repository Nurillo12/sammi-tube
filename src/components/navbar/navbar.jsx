import { Stack, Box } from '@mui/material'
import {Link} from 'react-router-dom'
import {logo} from '../../constants'
import {colors} from '../../constants/colors'
import {SearchBar} from '../'
const Navbar = () => {
  return (
<Stack 
direction={'row'} 
lignItems={'center'} 
justifyContent={'space-between'} 
padding={2} 
height={'10vh'}
sx={{position:'sticky', top: 0, zIndex: 999, background: colors.primary}} >

  <Link to={'/'}>
  <img src={logo} alt="logo" height={50} />
  </Link>

  <SearchBar/>
  <Box/>
</Stack>
  )
}

export default Navbar