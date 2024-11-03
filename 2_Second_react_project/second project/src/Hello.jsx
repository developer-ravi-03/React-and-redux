function Hello(){
  let myName='Ravi';
  let Fullname = () => {
    return 'Ravi kumar';
  }
  let roll=4784;
  

  return <div>
      <p>This is future speaking.My name is {myName}. and my full name is {Fullname()}</p>
      <p>My roll number is {roll}</p>
  </div>
}

export default Hello;
