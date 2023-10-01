import './CreateNFT.scss';
import { ReactComponent as Circle } from './assets/circle.svg';
import { CreateNFTValidationSchema } from './createNFTValidationSchema';
import { ReactComponent as DownloadIcon } from './assets/download.svg';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { ReactComponent as PictureIcon } from './assets/picture.svg';
import { Product } from '@models/Product';
import { useAddProductMutation } from '@src/features/api/productsApi';
import { yupResolver } from '@hookform/resolvers/yup';
import Checkbox from '@components/Checkbox/Checkbox';
import InputText from '@components/Inputs/InputText/InputText';
import React, { ChangeEvent, type FC, useRef, useState } from 'react';

export const CreateNFT: FC = () => {
  const [file, setFile] = useState<File>();
  const [fileName, setFileName] = useState<string | undefined>(undefined);
  const allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg'];
  const dropAreaRef = useRef<HTMLDivElement>(null);

  const methods = useForm<any>({ resolver: yupResolver(CreateNFTValidationSchema()) });
  const [addProduct] = useAddProductMutation();

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<Product> = (data) => {
    addProduct(data);
  };
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (dropAreaRef && dropAreaRef.current) {
      dropAreaRef.current.style.opacity = '1';
    }
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (dropAreaRef && dropAreaRef.current) {
      dropAreaRef.current.style.opacity = '0.25';
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    let file = Array.from(event.dataTransfer.files)[0];
    setFileName(file.name);
    if (!allowedFileTypes.includes(file.type)) {
      //
    }

    setFile(file);
  };

  return (
    <div className="create-nft-page">
      <h2>Create an NFT</h2>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="create-nft-form">
          <p>Import image</p>
          <span className="types-allowed">File types supported: JPG, PNG, GIF, SVG. Max size: 50 MB</span>
          <div id="drop-area" className="drop-area" ref={dropAreaRef} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
            <Circle className="circle"></Circle>
            {!fileName ? <DownloadIcon></DownloadIcon> : <PictureIcon></PictureIcon>}
          </div>
          <InputText id={'name'} name={'name'} placeholder={'Enter a name here...'} isRequired={true}></InputText>
          <InputText
            id={'description'}
            name={'description'}
            placeholder={'Enter a description here...'}
            isRequired={true}
            multiline={true}></InputText>
          <Checkbox label={'I understand and agree to BNB NFT’s Minting Rules and terms '}></Checkbox>
          <input className="submit primary-2-btn" type="submit" value="Create" />
        </form>
      </FormProvider>
    </div>
  );
};

export default CreateNFT;
