import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { next, pause, play, previous } from '../assets';
import { list1 } from '../constants';

const Display = (props) => {
  const sourceLinks = props.sourceLinks
  // const [duration, setDuration] = useState(null)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [playing, setPlaying] = useState(false)

  // playlist
  const playlist = list1
  const [playlistToggle, setPlaylistToggle] = useState(false)
  const [PlaylistCurrentVideoIndex, setPlaylistCurrentVideoIndex] = useState(0)

  const handleEnded = () => {
    if (currentVideoIndex < sourceLinks.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1)
    }
  }

  const previousHandler = () => {
    if (currentVideoIndex !== 0) {
      setCurrentVideoIndex(currentVideoIndex - 1)
    }
  }

  const nextHandler = () => {
    if (currentVideoIndex === sourceLinks.length - 1) {
      setCurrentVideoIndex(0)
    } else {
      setCurrentVideoIndex(currentVideoIndex + 1)
    }
  }

  const playPauseHandler = () => {
    if (sourceLinks.length >= 1) {
      setPlaying(!playing)
    }
  }

  // playlist
  const randomHandler = () => {
    setPlaylistToggle(!playlistToggle)
  }

  const handlePlaylistEnded = () => {
    if (PlaylistCurrentVideoIndex < playlist.length - 1) {
      setPlaylistCurrentVideoIndex(PlaylistCurrentVideoIndex + 1)
    }
  }

  const previousPlaylistHandler = () => {
    if (PlaylistCurrentVideoIndex !== 0) {
      setPlaylistCurrentVideoIndex(PlaylistCurrentVideoIndex - 1)
    }
  }

  const nextPlaylistHandler = () => {
    if (PlaylistCurrentVideoIndex === playlist.length - 1) {
      setPlaylistCurrentVideoIndex(0)
    } else {
      setPlaylistCurrentVideoIndex(PlaylistCurrentVideoIndex + 1)
    }
  }

  const playPausePlaylistHandler = () => {
    if (playlist.length >= 1) {
      setPlaying(!playing)
    }
  }

  return (
    <div>
      <div className='text-white min-w-full flex justify-center'>
        {
          currentVideoIndex < sourceLinks.length && (
            <ReactPlayer
              url={sourceLinks[currentVideoIndex]}
              playing={playing}
              controls={true}
              // onDuration={(e) => setDuration(e)}
              onEnded={handleEnded}
            />
          )
        }
      </div>
      <div className='flex items-center justify-center gap-9 h-8 m-4'>
        <img src={previous} alt='<' className='w-6 hover:bg-[#93B1A6] hover:p-1 hover:rounded-lg duration-100' onClick={() => previousHandler()} />
        <img src={playing ? pause : play} alt='<' className='w-6 hover:bg-[#93B1A6] hover:p-1 hover:rounded-lg duration-100' onClick={() => playPauseHandler()} />
        <img src={next} alt='>' className='w-6 hover:bg-[#93B1A6] hover:p-1 hover:rounded-lg duration-100' onClick={() => nextHandler()} />
      </div>

      {/* playlist */}
      <div className='flex items-center justify-center h-8 m-4'>
        <button onClick={() => randomHandler()} className='text-black bg-[#93B1A6] py-1 px-4 rounded-md'>Random</button>
      </div>
      {
        playlistToggle &&
        <div className='text-white min-w-full flex justify-center cursor-pointer'>
          {
            PlaylistCurrentVideoIndex < playlist.length && (
              <ReactPlayer
                url={playlist[PlaylistCurrentVideoIndex].link}
                playing={playing}
                controls={true}
                onEnded={handlePlaylistEnded}
              />
            )
          }
        </div>
      }
      <div className='flex items-center justify-center gap-9 h-8 m-4'>
        <img src={previous} alt='<' className='w-6 hover:bg-[#93B1A6] hover:p-1 hover:rounded-lg duration-100' onClick={() => previousPlaylistHandler()} />
        <img src={playing ? pause : play} alt='<' className='w-6 hover:bg-[#93B1A6] hover:p-1 hover:rounded-lg duration-100' onClick={() => playPausePlaylistHandler()} />
        <img src={next} alt='>' className='w-6 hover:bg-[#93B1A6] hover:p-1 hover:rounded-lg duration-100' onClick={() => nextPlaylistHandler()} />
      </div>

    </div>
  )
}

export default Display