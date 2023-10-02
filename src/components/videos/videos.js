import {  Stack } from '@mui/material'
import {VideoCard, ChannelCard, Loader} from '../'

const Videos = ({videos}) => {
  // console.log(videos);
  if(!videos.length) return <Loader/>
  return (
  <Stack 
  width={'100%'} 
  direction={'row'} 
  flexWrap={'wrap'} 
  justifyContent={'start'} 
  alignItems={'center'} 
  gap={2}
  >
    {videos.map(item => (
      <Stack key={item.id.videoId}> 
      {item.id.videoId && <VideoCard video={item} /> } 
      {item.id.channelId && <ChannelCard video={item} /> } 

      </Stack>
    ))}
  </Stack>
   )
 
}

export default Videos