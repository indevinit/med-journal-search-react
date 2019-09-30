import React from 'react'
import { Link } from 'react-router-dom'

const resultStyle ={
  
  width: '100%',
  height: '50px',
  textAlign:'center',
  margin:'auto',
  backgroundColor:'greenlime'
  
}

const liStyle ={
  listStyle:'none'
}

const h2Style ={
  color: 'red'
}


export default function Result({result, errorVal}) {

  return (
      <div style={resultStyle}>   
        <br/>
        <br/>
        <br/>
        <br/>
        <h2 style={h2Style}>{errorVal}</h2>
        
      {/* looping the result of the search */}
      <ul>
      {result.map((result) => 
      
      <li style={liStyle} key={result.id}> 

      <h3>Title = <a target="_blank" href={"http://google.com/search?q=" + result.doi}>{result.title}</a></h3> 
      <p>Author = {result.authorString}</p> 
    
      <p>Source ={result.source}</p> 
      
      <p>Published year ={result.pubYear}</p> 
      </li>
      
      )}   
      </ul>
  </div> 
 
  )
}


