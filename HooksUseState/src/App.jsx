import { useState } from 'react'
import './App.css'

const Post = () => {
  const [state, setState] = useState({
    likes: 0,
    vistas: 0
  });
  
  return (
    <div>
{/* Accedemos al los likes y vistas por su key */}
    <h1>{state.likes}</h1>
    <h1>{state.vistas}</h1>
  
{/*   Con prev accedemos al valor “previo al cambio” del estado */}
   <button onClick={ ()=> setState(prev => ({...prev, likes: state.likes+1}))}>

      ♥
    </button>
    </div>
  )}

export default Post

