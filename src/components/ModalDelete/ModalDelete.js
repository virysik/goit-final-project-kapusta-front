import { useState } from "react";

const DelModal = () => {
    const [showDelModal, setShowDelModal] = useState(false);
    
  function toggle() {
    setShowDelModal(prevShowDelModal => !prevShowDelModal);
}

  return {
    showDelModal,
    toggle,
  }
};

export default DelModal;