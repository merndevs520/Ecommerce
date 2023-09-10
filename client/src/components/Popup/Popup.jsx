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
          <Modal.Title id="contained-modal-title-vcenter">
            {props.Header}
            <Button
              className="bg-blue-400 ml-56 text-white font-semibold"
              onClick={props.onHide}
            >
              Close
            </Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.children}</p>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Popup;
