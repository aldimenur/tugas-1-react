import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Albums from "./Gallery.album";

function GalleryLayout(props) {
  const [angka, setAngka] = useState(3);
  const [stateDown, setStateDown] = useState(false);
  const [stateUp, setStateUp] = useState(false);

  const handleTambah = () => {
    if (angka === 10) {
      setAngka(angka + 0);
      setStateUp(true);
    } else if (angka < 10) {
      setAngka(angka + 1);
      setStateDown(false);
    }
  };

  const handleKurang = () => {
    if (angka === 1) {
      setAngka(angka - 0);
      setStateDown(true);
    } else if (angka > 0) {
      setAngka(angka - 1);
      setStateUp(false);
    }
  };

  return (
    <React.Fragment>
      <div className="w-half">
        <Albums limit={angka} />
      </div>
      <div className="mx-auto bg-danger px-3 rounded-5">
        <h2 className="text-center text-white">{angka}</h2>
      </div>
      <div className="mx-auto">
        <Button
          onClick={handleTambah}
          disabled={stateUp}
          size="lg"
          className="m-2"
        >
          TAMBAH
        </Button>
        <Button
          onClick={handleKurang}
          disabled={stateDown}
          size="lg"
          className="m-2"
        >
          KURANG
        </Button>
      </div>
    </React.Fragment>
  );
}

export default GalleryLayout;
