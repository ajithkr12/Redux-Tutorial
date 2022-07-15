import {useSelector} from 'react-redux'


function Header() {
  const color=useSelector(state=>state.color.value)//receive state value
  const count=useSelector(state=>state.count.value)
  return (
    <div className="header">
      {/* <h1 style={{color:color}}>REDUX Project</h1> */}
      <h1 style={{color:color}}> Counter: {count}</h1>
    </div>
  );
}

export default Header;
