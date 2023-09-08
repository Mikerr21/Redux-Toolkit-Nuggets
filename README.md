# Redux-Toolkit-Nuggets
Prerequisites:ES6 Syntax, Knowledge of react terminology such as State, JSX, Function Components,Props and Hooks, Basic understanding of Redux terms&concepts.


### How to connect redux to react?:- 
1.Export the file in which the store was created.  
2.Import the store into the root index.js file.
3.Import Provider from react-redux      
4.Wrap The App Component with the Provider, pass the store to the provider.  
### After connecting our redux to react, how can we access the state and change it many times???  
1.Add reducer to one of slices. exp: songsSlice (Reducer), addSong(state,action){ state.push(action.payload)}.    
2.Export the action creator that the slice automatically creates -W export const {addSong} = songsSlice.actions   
3.Find component that you want to dispatch from     
4.Import the action creator and the 'useDispatch' from react-redux -W import { addSong } from "../store"   
5.Call the useDispatch hook  inside the component to get access to the dispatch function-W const dispatch = useDispatch();     
6.When user does something, call the action creator to get an action, then dispatch it.-W dispatch(addSong(item)); and the (item) is already as a parameter inside an event handler function.      

### Access the state e.g inside of a component:     
1.Find component that needs to access the state     
2.Import the useSelector hook from react-redux    
3.Call the hook pass it selector function ( arrow function ) -W const songPlaylist=useSelector((state)=→{return state.songs})     
4.Use the state, anytime the state updates, the component will automatically rerender.    

### HARD-RESET THE STATE:   
we simply create an action creator inside a reducer e.g   
reset(state, action){     
return [];   
}     
then we export that part and use it inside a dispatch function of an event handler.   
But what if we want to update multiple state in just one single action creator?:    
Don't make a reset function in a single slice to update also the other slice !! NOPE !!   
Don't make same function twice in both reducers !! NOPE !!   



