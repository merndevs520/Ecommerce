import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Popup = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="flex justify-between w-full"
          >
            <p>{props.Header}</p>
            <Button
              className="bg-blue-400 text-white font-semibold"
              onClick={props.onHide}
            >
              Close
            </Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>{props.children}</div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Popup;
