import React from "react";
import { Button, Dropdown, DropdownButton, Form, Modal } from "react-bootstrap";

interface FinishModalProps {
  isShownModal: boolean;
  setIsShownModal: React.Dispatch<React.SetStateAction<boolean>>;
  finishReason: string;
  setFinishReason: React.Dispatch<React.SetStateAction<string>>;
  handleFinish: () => void;
}

function FinishModal({
  isShownModal,
  setIsShownModal,
  finishReason,
  setFinishReason,
  handleFinish,
}: FinishModalProps) {
  return (
    <Modal show={isShownModal} onHide={() => setIsShownModal(!isShownModal)}>
      <Modal.Header closeButton>
        <Modal.Title>Finish reason</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <DropdownButton
            variant="secondary"
            id="dropdown-split-variants-secondary"
            title={"Finish Sale Reason"}
          >
            <Dropdown.Item onClick={() => setFinishReason("Sold")}>
              Sold
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setFinishReason("Seller Resigned")}>
              Seller Resigned
            </Dropdown.Item>
          </DropdownButton>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>...or write a custom reason</Form.Label>
            <Form.Control
              value={finishReason}
              onChange={(e) => setFinishReason(e.target.value)}
              as="textarea"
              rows={3}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => setIsShownModal(!isShownModal)}
        >
          Close
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            handleFinish();
            setIsShownModal(!isShownModal);
          }}
        >
          Finish
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FinishModal;
