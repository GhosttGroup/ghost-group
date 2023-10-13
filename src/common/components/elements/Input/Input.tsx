import './input.css';

interface IInputProps {
  placeholder?: string;
  value?: string;
  type?: 'text';
  label?: string;
}

const Input = (props:IInputProps) => {

  return (
      <div className={"input__animation"}>
      {props.label && <label>{props.label}</label>} 
         <input className="input__animation" {...props} />
      </div> );
};


export default Input;
