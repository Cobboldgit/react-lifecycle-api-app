import UsersClass from './component/UsersClass'
import UsersFunction from './component/UsersFunction';

function App() {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Class Component</h1>
      <UsersClass/>
      <hr/>
      <hr/>
      <br/>
      <hr/>
      <h1 style={{marginTop: '50px'}}>Function Component</h1>
      <UsersFunction/>
    </div>
  );
}

export default App;
