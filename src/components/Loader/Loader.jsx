import { RotatingLines } from 'react-loader-spinner'

export const Loader =()=>{
   return(
    <div style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: "translate(-50% ,-50%)"}
  }>
    <RotatingLines
  strokeColor="black"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/></div>) 
}
