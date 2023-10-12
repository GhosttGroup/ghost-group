import './input.css';

interface InputProps {
  placeholder?: string;
  value?: string;
  type?: 'text';
  label?: string;
}

const Input = (props:InputProps) => {

  return (
      <div className={"input-animation"}>
      {props.label && <label>{props.label}</label>} 
         <input className="input__animation" {...props} />
      </div> );

};


export default Input;
