import React, { useEffect, useState } from 'react'
import './Feed.css';
import Post from './Post';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption.js';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import { db } from '../firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';


function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState(''); //Handle the state of input for posting
  const [posts, setPosts] = useState([]); //Handle state of posts

  useEffect(() => {
    //Go to the "posts" collection, order by timestamp, and when snapshot received setPosts
    db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
      //Set posts' state with the all the snapshots that is retrieved from firebase
      setPosts(
        snapshot.docs.map((doc) => ({ //Map thru all the snapshot documents 1 by 1 to set each of the post
          id: doc.id,      //Assign the id of each document
          data: doc.data() //Assign the data of each document, data of post: {name, description, message, photoUrl, timestamp}
        }))
      );
    });
  }, []);

  const sendPost = (e) => {
    e.preventDefault(); //Prevent page to refresh

    //Add data to "posts" collection, if there is no "posts" collection then it will create itself
    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp() //Get the timestamp of the firebase server
    });

    setInput(''); //Clear the input after adding data to firebase
  };

  return (
    <div className='feed'>
        {/* input */}
        <div className='feed_inputContainer'>
          <div className='feed_input'>
            <CreateIcon />
            <form action='/'>
              <input 
                value={input} //Get the input the user typed in
                onChange={(e) => setInput(e.target.value)} //When user type, set the input as the target value above
                type='text' />
              <button onClick={sendPost} type='submit'>Send</button> {/*When user press enter trigger sendPost()*/}
            </form>
          </div>
          <div className="feed_inputOptions">
            <InputOption Icon={ImageIcon} title={"Photos"} color={"#71B5F8"}/>
            <InputOption Icon={SubscriptionsIcon} title={"Video"} color={"#7FC05F"}/>
            <InputOption Icon={EventNoteIcon} title={"Event"} color={"#E7A23F"}/>
            <InputOption Icon={CalendarViewDayIcon} title={"Article"} color={"#FD9294"}/>
          </div>
        </div>
        <FlipMove>
          {/* Flip move is a external package to animate posts */}
          {/* Map thru posts array, and set the id and data to Post component */}
          {posts.map(({id, data: {name, description, message, photoUrl}}) => (
            <Post 
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
            />

          ))}
        </FlipMove>
    </div>
  )
}

export default Feed