import './CreateNFT.scss';
import { ReactComponent as Circle } from './assets/circle.svg';
import { ReactComponent as DownloadIcon } from './assets/download.svg';
import { ReactComponent as PictureIcon } from './assets/picture.svg';
import { useForm } from 'react-hook-form';
import Checkbox from '@components/Checkbox/Checkbox';
import InputText from '@components/Inputs/InputText/InputText';
import React, { ChangeEvent, type FC, useRef, useState } from 'react';

export const CreateNFT: FC = () => {
  const [name, setName] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [dragIsOver, setDragIsOver] = useState(false);
  const [file, setFile] = useState<File>();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string | undefined>(undefined);
  const allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg'];
  const dropAreaRef = useRef<HTMLDivElement>(null);

  const sendData = (event: React.FormEvent<HTMLFormElement>) => {};
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (dropAreaRef && dropAreaRef.current) {
      dropAreaRef.current.style.opacity = '1';
    }
    setDragIsOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (dropAreaRef && dropAreaRef.current) {
      dropAreaRef.current.style.opacity = '0.25';
    }
    setDragIsOver(false); //TODo: To darken or change the background picture
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragIsOver(false);
    let file = Array.from(event.dataTransfer.files)[0];
    setFileName(file.name);
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
        <form onSubmit={(e) => sendData} className="create-nft-form">
          <p>Import image</p>
          <span className="types-allowed">File types supported: JPG, PNG, GIF, SVG. Max size: 50 MB</span>
          <div id="drop-area" className="drop-area" ref={dropAreaRef} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
            <Circle className="circle"></Circle>
            {!fileName ? <DownloadIcon></DownloadIcon> : <PictureIcon></PictureIcon>}
          </div>
          <InputText
            id={'name'}
            name={'Name'}
            placeholder={'Enter a name here...'}
            isRequired={true}
            onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setName(event.target.value)}></InputText>
          <InputText
            id={'desc'}
            name={'Description'}
            placeholder={'Enter a description here...'}
            isRequired={true}
            multiline={true}
            onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setDesc(event.target.value)}></InputText>
          <Checkbox
            label={'I understand and agree to BNB NFT’s Minting Rules and terms '}
            onChange={(e) => {
              setIsChecked(e.target.checked);
            }}></Checkbox>
          <input className="submit primary-2-btn" type="submit" value="Create" />
        </form>
      </div>
    </>
  );
};

export default CreateNFT;
