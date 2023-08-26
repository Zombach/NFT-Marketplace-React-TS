import './CreateNFT.scss';
import React, { type FC, useState } from 'react';
import TextField from '@mui/material/TextField';

export const CreateNFT: FC = () => {
  const [name, setName] = useState<string>('');
  const [desc, setDesc] = useState<string>('');

  const sendData = (event: any) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(name, desc);
  };

  return (
    <>
      <div className="create-nft-page">
        <h2>Create an NFT</h2>
        <form className="create-nft-form">
          <TextField
            className="tmp"
            id="outlined"
            label="Name"
            placeholder="Enter a name here..."
            required
            InputProps={{
              sx: {
                '& fieldset': {
                  border: '2px solid black',
                  borderRadius: '10px',
                },
              },
            }}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            className="tmp"
            id="outlined"
            label="Description"
            placeholder="Enter a description here..."
            required
            InputProps={{
              sx: {
                '& fieldset': {
                  border: '2px solid black',
                  borderRadius: '10px',
                },
              },
            }}
            multiline
            rows={5}
            onChange={(event) => setDesc(event.target.value)}
          />

          <input type="submit" value="Отправить" onClick={sendData} />
        </form>
      </div>
    </>
  );
};

export default CreateNFT;
