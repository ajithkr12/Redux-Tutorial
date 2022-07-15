import {useSelector} from 'react-redux'

function Footer() {
  const color=useSelector(state=>state.color.value)//receive state value
  const count=useSelector(state=>state.count.value)//receive state value

  return (
    <div className="footer">
      <h1 style={{color:color}}>A</h1>
      <p>My Redux project footer</p>
      <h1>{count}</h1>
    </div>
  );
}
export default Footer;
