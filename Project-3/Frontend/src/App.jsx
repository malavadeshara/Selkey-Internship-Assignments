import React from 'react';
import ContactForm from './components/ContactForm';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Toaster position="bottom-right" reverseOrder={false} />
      <ContactForm />
    </div>
  );
}

export default App;