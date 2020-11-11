import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterByValue } from "../../../store/posts/actions/constants.js";





export default () => {
    const dispatch = useDispatch();
    filterByInput = (e) => {
        let input = e.target.value;
        this.props.dispatch(filterByValue({value: input}))
     }

     console.warn(e);
     useEffect((e) => {
       if (e) {
         return;
       }
   
       console.warn("here")
       dispatch(getPosts());
     }, [dispatch]);

    return(
        <div className='control' style={{minWidth: "300px"}}>
           <input onChange={e=> {
             //call this method on every change in input
               this.filterByInput(e);
           }} style={{width: "100%"}} placeholder='Filter by' type='text'/>
        </div>
    )
}