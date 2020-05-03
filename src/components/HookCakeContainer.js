import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { buyCake, addCake } from '../redux'


function HookCakeContainer() {
    const cakeCount = useSelector((state) => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
          <h2>Number of cakes {cakeCount}</h2>
          <button onClick={() => dispatch(addCake())}>Add Cake</button>  
        </div>
    )
}

export default HookCakeContainer
