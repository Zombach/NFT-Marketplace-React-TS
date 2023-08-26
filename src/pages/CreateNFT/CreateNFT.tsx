import './CreateNFT.scss';
import { ReactComponent as Circle } from './assets/circle.svg';
import { ReactComponent as DownloadIcon } from './assets/download.svg';
import { defaultFieldsetStyles } from '@src/helpers';
import Checkbox from '@mui/material/Checkbox/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';
import React, { type FC, useState } from 'react';
import TextField from '@mui/material/TextField';

export const CreateNFT: FC = () => {
  const [name, setName] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [dragIsOver, setDragIsOver] = useState(false);
  const [file, setFile] = useState<File>();
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg'];

  const sendData = (event: React.MouseEvent) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(name, desc, isChecked);

    // eslint-disable-next-line no-console
    console.log({ file });
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragIsOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragIsOver(false); //TODo: To darken or change the background picture
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragIsOver(false);
    let file = Array.from(event.dataTransfer.files)[0];
    if (!allowedFileTypes.includes(file.type)) {
      // ToDo: Add validation
      // eslint-disable-next-line no-console
      console.log(file.type);
    }

    setFile(file);
  };

  return (
    <>
      <div className="create-nft-page">
        <h2>Create an NFT</h2>
        <form className="create-nft-form">
          <p>Import image</p>
          <span className="types-allowed">File types supported: JPG, PNG, GIF, SVG. Max size: 50 MB</span>
          <div className="drop-area" onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
            <DownloadIcon></DownloadIcon>
            <Circle className="circle"></Circle>
          </div>
          <TextField
            className="name-text-field"
            id="outlined"
            label="Name"
            placeholder="Enter a name here..."
            required
            InputProps={{
              sx: defaultFieldsetStyles,
            }}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            className="desc-text-field"
            id="outlined"
            label="Description"
            placeholder="Enter a description here..."
            required
            InputProps={{
              sx: defaultFieldsetStyles,
            }}
            multiline
            rows={5}
            onChange={(event) => setDesc(event.target.value)}
          />

          <div>
            <FormControlLabel
              className="checkbox"
              control={<Checkbox defaultChecked onChange={(e) => setIsChecked(e.target.checked)} />}
              label={<span className="checkbox-label">I understand and agree to BNB NFT’s Minting Rules and terms</span>}
            />
          </div>
          <input className="submit primary-2-btn" type="submit" value="Create" onClick={sendData} />
        </form>
      </div>
    </>
  );
};

export default CreateNFT;
