import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        width: '500px',
        height: '500px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',  
    }
  };

function BotonNuevoGrafo() {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <button className='btn btn-primary' onClick={openModal}>
                Nuevo Grafo
            </button>
            <Modal
                isOpen={modalIsOpen}
                //onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                //contentLabel="Example Modal"
            >
            </Modal>
        </div>
    )
}

export default BotonNuevoGrafo;