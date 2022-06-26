import React, { FC, useState } from "react";
import Modal from "./components/Modal";
import ModalJSX from "./components/ModalJSX";
import Sidebar from "./components/Sidebar";
import "./index.css";
interface Props {}

const App: FC<Props> = (props) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenModalJSX, setIsOpenModalJSX] = useState<boolean>(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

  return (
    <div className="app">
      <button className="btn" onClick={() => setIsOpenModal(!isOpenModal)}>
        Open Modal!
      </button>
      <button
        className="btn btn--orange"
        onClick={() => setIsOpenModalJSX(true)}
      >
        Open Modal JSX!
      </button>
      <button className="btn" onClick={() => setIsOpenSidebar(!isOpenSidebar)}>
        Open Sidebar
      </button>
      <ModalJSX
        isOpen={isOpenModalJSX}
        closeWhenPressEsc
        closeWhenClickOnOverlay
        animate="drop"
        className="custom-modal"
        overlayClassName="custom-overlay-modal"
        onClose={() => setIsOpenModalJSX(false)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis impedit
        iure debitis inventore, odio, commodi quidem incidunt, sequi repellat
        quasi quae quis unde earum nihil blanditiis voluptatibus a culpa
        obcaecati!
      </ModalJSX>
      <Modal
        isOpen={isOpenModal}
        closeWhenPressEsc
        closeWhenClickOnOverlay
        animate="zoom"
        className="custom-modal"
        overlayClassName="custom-overlay-modal"
        onClose={() => setIsOpenModal(false)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis impedit
        iure debitis inventore, odio, commodi quidem incidunt, sequi repellat
        quasi quae quis unde earum nihil blanditiis voluptatibus a culpa
        obcaecati!
      </Modal>
      <Sidebar
        isOpen={isOpenSidebar}
        position="left"
        onClose={() => setIsOpenSidebar(false)}
      >
        Sidebar
      </Sidebar>
    </div>
  );
};
export default App;
