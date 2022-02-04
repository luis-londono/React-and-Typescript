import { KeyboardEvent, useState } from "react";


const GuestList:React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName('');
    setGuests([...guests, name]);
  };

  const handle = () => {
    setName('');
    setGuests([...guests, name]);
  };

  const handleKeypress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter')
      handle();
  };

  return (
    <div>
      <h3>Guest List</h3>
      {
        <ul>
          {guests.map(guest => 
            <li key={guest}>
              {guest}
            </li>)}
        </ul>
        
      }
      <input value={name} 
      onChange={(e) => setName(e.target.value)}
      onKeyPress={(e) => handleKeypress(e)} />
      <button type="button" onClick={onClick} >Add Guest</button>
    </div>
  );
};

export default GuestList;