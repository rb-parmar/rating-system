import './style/App.css';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';
import { useState } from 'react';

function App() {

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <div className="App">
      <StarRating />
      <button className='dialog-open' onClick={handleDialogOpen}>Open Dialog</button>
      {dialogOpen && <Dialog handleClose={handleDialogClose} />}
    </div>
  );
}

export default App;
