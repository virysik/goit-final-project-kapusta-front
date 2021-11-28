import { useState } from "react";

const DelModal = () => {
    const [showDelModal, setShowDelModal] = useState(false);
    
  function toggle() {
    setShowDelModal(!showDelModal);
}


  return {
    showDelModal,
    toggle,
  }
};

export default DelModal;