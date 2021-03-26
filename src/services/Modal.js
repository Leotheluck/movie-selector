const Modal = (props) => {
  return (
    <div onClick={e => e.stopPropagation()}>
      {props.children(props.onClose)}
    </div>
  );
}

export default Modal;