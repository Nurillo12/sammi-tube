import { useEffect, useState } from 'react'
import {  } from 'react-router-dom'
import { Box, Container} from '@mui/material'
import { useParams } from 'react-router-dom'
import {ApiService} from '../../service/api.service'
import {ChannelCard, Videos} from '../'


const Channel = () => {
  const [channelDetail, setChannelDetail] = useState()
  const [videos, setVideos] = useState([])
  const {id} = useParams()

useEffect(() => {
  const getData = async() => {
try {
  const dataChannelDetail = await ApiService.fetching(`channels?part=snippet&id=${id}`)
  // console.log(dataChannelDetail)
  setChannelDetail(dataChannelDetail.items[0])
  const dataVideo = await ApiService.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`)  /* '%2Cid&order=date'  bu meni tushunimcha yaqinda qoyilgan contentlarni chiqarib beradi. Chunki buni ishlatishimdan oldin 11 yil oldingi kontentlarni chiqarib beryatgandi. */  
  console.log(dataVideo)
  setVideos(dataVideo?.items)
} catch (error) {
  console.log(error)
}
   
}

getData()
 }, [id])

  return (
  <Box minHeight={'95vh'} mt={'1vh'} >
<Box>
  <Box
  width={'100%'}
  height={'200px'}
  zIndex={10}
  sx={{ backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
backgroundPosition: 'center',
backgroundSize: 'cover',
objectFit: 'cover',
backgroundRepeat: 'no-repeat',
}}
  />
<ChannelCard  video={channelDetail} marginTop={'-100px'} />
</Box>
<Container maxWidth={'90%'}>
<Videos videos={videos} />
</Container>
  </Box>
  )
}

// "useParams" hooki yordamida routerdagi id larni olib olishimiz mumkin.

export default Channel