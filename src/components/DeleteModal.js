import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function DeleteModal(props) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const onDelete = () => {
        props.deleteTask(props.task._id);
        toggle();
    }

    return (
        <>
            <Button color="danger" onClick={toggle}>
                Delete
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Are You Sure?</ModalHeader>
                <ModalBody>
                    Promice, than you will not cry about file {props.task.name} ...
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onDelete}>
                        Promice and delete
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default DeleteModal;