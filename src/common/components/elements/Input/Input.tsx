import './input.css';
interface InputProps {
  placeholder: string;
  value: string;
  type: 'text';
  label: string;
}

const Input = (props:InputProps) => {

  return (
      <div className={"input-animation"}>
      <label>{props.label}</label>
         <input {...props} />
      </div> );

};


export default Input;
