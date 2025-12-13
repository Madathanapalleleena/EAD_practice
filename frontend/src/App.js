import logo from './logo.svg';
import './App.css';
import PasswordInput from './PasswordInput';
import StudentList from './StudentList';
import RegisterForm from './RegisterForm';
import Calculator from './Calculator';
import Login from './Login';
import PasswordChecker from './PasswordChecker';
import Greet from './Greet';
import { useState } from "react";
import Modal from "./Modal";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <div>
            <h3>Modal Content</h3>
            <p>This is a plain modal</p>
          </div>
        </Modal>
      )}
    </div>
  );
}