import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
    <Modal
    isOpen={props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
    >
        <h1>Selected Option</h1>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
);

export default OptionModal;