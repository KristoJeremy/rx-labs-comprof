import React, { useState, useEffect } from "react";
import { setCookie, isCookie } from "@/helper/cookie";
import { Modal } from "./modal";

export const SpecialOffer = () => {
  const [showModal, setShowModal] = useState(!isCookie());
  const [loading, setLoading] = useState(true);

  const handleTimout = () => {
    setCookie();
    setShowModal(false);
  };

  useEffect(() => {
    if (!isCookie()) {
      setShowModal(true);
    }
    setLoading(false);
  }, []);

  return (
    <div>
      {!loading && showModal && <Modal onVerify={handleTimout}></Modal>}
    </div>
  );
};
