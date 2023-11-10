import { useState } from 'react';
import { Typography } from '@mui/material';

function App() {
  const [count, setcount] = useState(0)
  return (
    <>
    <button onClick={()=>{ setcount(count + 1) }}>
      {count}
    </button>
    <Typography variant='H1'>
      dame
    </Typography>
    </>
  );
}

export default App;
