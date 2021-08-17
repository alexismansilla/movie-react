import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
// import ReactPlayer from 'react-player';

import './ModalVideo.scss';

export default function ModalVideo(props) {
  const { videoKey, videoPlatform, isOpenModal, handleClose } = props;
  const [urlVideo, setUrlVideo] = useState(null);
  console.log(props);

  useEffect(() => {
    switch (videoPlatform) {
      case "YouTube":
        setUrlVideo(`https://youtu.be/${videoKey}`);
        break;
      case "Vimeo":
        setUrlVideo(`https://vimeo.com/${videoKey}`);
        break;
      default:
        break;
    }
  }, [videoKey, videoPlatform]);

  return (
    <Modal className="modal-video" visible={isOpenModal} centered onCancel={handleClose} footer={false}>
      This is a modal!
    </Modal>
  );
}
