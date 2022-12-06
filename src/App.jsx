import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'



function YoutubeComponent(props) {
  return (
    <div className="app-container">
      <div className='content'>
        <img src={props.thumbnailImage} />
        <p>Title: {props.videoTitle}</p>
        <p>Content Creator: {props.videoUploader}</p>
        <p>Date: {props.videoUploaded}</p>
        <p>Views: {props.views}</p>
      </div>
    </div>
  )
}



function App() {
  // const listOfPokemon = [
  //   "Pikachu",
  //   "Dragonite",
  //   "Gyrados"
  // ];
  const youtubeData = [
    {
      thumbnailImage="https://via.placeholder.com/600x400" 
      videoTitle="Why a cheseburger?"
      videoUploader="Mark"
      videoUploaded="11/30/2022"
      views=100
    },
    {
      thumbnailImage="https://via.placeholder.com/600x400" 
      videoTitle="Luis big break"
      videoUploader="Luis"
      videoUploaded="11/28/2022"
      views=53
      />
    },
    {
      thumbnailImage="https://via.placeholder.com/600x400"
      videoTitle="How to make taco?"
      videoUploader="CookingFoods"
      videoUploaded="11/3/2022"
      views=27
    }
    ];

    return (
    <div className="app-container">
      {youtubeData.map((n) => (
        <YoutubeComponent 
        thumbnailImage={n.thumbnailImage}
        videoTitle={n.videoTitle}
        videoUploader={n.videoUploader}
        videoUploaded={n.videoUploaded}
        videoViews={n.videoViews}
        />
      ))}



      {/* <ul>
        <li>
          {listOfPokemon.find(pokemon => 
            pokemon === "Pikachu")}
        </li>
        {listOfPokemon.map(pokemon => (
          <li>{pokemon}</li>
        ))}
      </ul>
      <ConditionalComponent /> */}
    </div>
  )
}

export default App

