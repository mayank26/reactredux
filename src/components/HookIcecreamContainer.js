import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyIcecream } from '../redux'

function HookIcecreamContainer() {
    const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams)
    const dispatch = useDispatch()
    return (
        <div>
           <h2>Num of icecreams {numOfIcecreams}</h2> 
           <button onClick={() => dispatch(buyIcecream())}>Buy Icecream</button>
        </div>
    )
}

export default HookIcecreamContainer
