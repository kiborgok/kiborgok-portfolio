import React, {useState, useEffect} from 'react';
import Pages from './pages/Pages';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/kiborgok')
      .then(res => res.json())
      .then(user => {
        setUser(user);
      });
  }, [])
  
  if (user === null) return <div>Loading...</div>;
  if (user !== null && user.length === 0) return <div> A problem occured </div>;
  return <Pages user={user} />;
}

export default App;
