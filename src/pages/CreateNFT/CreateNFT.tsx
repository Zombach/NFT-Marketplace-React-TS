import './CreateNFT.scss';
import { ReactComponent as Circle } from './assets/circle.svg';
import { ReactComponent as DownloadIcon } from './assets/download.svg';
import Checkbox from '@components/Checkbox/Checkbox';
import InputText from '@components/InputText/InputText';
import React, { type FC, useState } from 'react';

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
          <InputText
            id={'name'}
            name={'Name'}
            placeholder={'Enter a name here...'}
            isRequired={true}
            onChange={(event) => setName(event.target.value)}></InputText>
          <InputText
            id={'desc'}
            name={'Description'}
            placeholder={'Enter a description here...'}
            isRequired={true}
            onChange={(event) => setDesc(event.target.value)}></InputText>

          <Checkbox
            className="checkbox"
            label={'I understand and agree to BNB NFT’s Minting Rules and terms '}
            onChange={(e) => {
              setIsChecked(e.target.checked);
            }}></Checkbox>
          <input className="submit primary-2-btn" type="submit" value="Create" onClick={sendData} />
        </form>
      </div>
    </>
  );
};

export default CreateNFT;
