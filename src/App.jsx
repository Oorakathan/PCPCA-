import Array from './components/Array';
import Counter from './components/Counter';
import Text from './components/Text';

function App() {
    let list = ["Learn React", "Build App", "Practice"];

   

  return (
    <>
      {/* <TaskItem task={tasks.map((t)=>{return t})}></TaskItem>  in this i am just passing every value at once.  */}
      <h1><u>Printing the elements from the parent in child</u></h1>
      {list.map((t,index)=>{return <Array key = {index} print={t}></Array>})}
      <h1><u>Counter component</u></h1>
      <Counter></Counter>
      <h1><u>Text input and display component</u></h1>
      <Text></Text>
      
    </>
  );

}

export default App;
