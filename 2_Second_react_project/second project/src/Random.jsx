function Random(){
  let number = Math.random()*10;
  return <h1 style={{'background-color':'#776691'}}>
      Random number is {Math.floor(number)}
  </h1>
}
export default Random;