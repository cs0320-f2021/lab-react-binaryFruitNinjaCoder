function TextBox(props) {
    return (
        <div className="textbox">
        <input type='text' label={props.label} onChange={(e) => {props.change(e.target.value)}}></input>
      </div>
    );
}

export default TextBox;