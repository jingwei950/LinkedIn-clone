import { Avatar } from '@mui/material'
import React, {forwardRef} from 'react'
import './Post.css'
import InputOption from './InputOption'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post = forwardRef(({name, description, message, photoUrl}, ref) => {
  return (
    <div ref={ref} className='post'>
      <div className="post_header">
        <Avatar src={photoUrl}>
          {name[0]}
        </Avatar>
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post_body">
        <p>{message}</p>
      </div>

      <div className="post_buttons">
        <InputOption Icon={ThumbUpOffAltIcon} title={'Like'}/>
        <InputOption Icon={MessageIcon} title={'Message'}/>
        <InputOption Icon={ShareIcon} title={'Share'}/>
        <InputOption Icon={SendIcon} title={'Send'}/>
      </div>
    </div>
  )
})

export default Post