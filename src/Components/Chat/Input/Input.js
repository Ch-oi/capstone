import React from 'react';
import UploadPhotos from './UploadPhotos/UploadPhotos';
import { Input, InputGroup, InputGroupAddon } from 'reactstrap';

const input = ({ messages, sendMessageHandler, setMessage }) => (
  <InputGroup>
    <InputGroupAddon addonType='prepend'>
      <UploadPhotos className='uploadPhotoButton' />
    </InputGroupAddon>
    <Input
      className='height5 inputTextArea'
      type='text'
      placeholder='Type a message...'
      value={messages}
      onChange={(event) => setMessage(event.target.value)}
      onKeyPress={(event) =>
        event.key === 'Enter' ? sendMessageHandler(event) : null
      }
    />
    <InputGroupAddon
      className='height5 sendMessageButton'
      addonType='append'
      onClick={(event) => {
        sendMessageHandler(event);
      }}
    >
      SEND
    </InputGroupAddon>
  </InputGroup>
);

export default input;
