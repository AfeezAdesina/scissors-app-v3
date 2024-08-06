export const Label = ({ children, htmlFor, ...props }) => {
    return (
      <label htmlFor={htmlFor} {...props}>
        {children}
      </label>
    );
  };
  
 
  export const Input = ({ type, id, name, value, onChange, ...props }) => {
    return (
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    );
  };
  
  

  

  export const Textarea = ({ id, name, value, onChange, ...props }) => {
    return (
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
    );
  };
  

  export const Button = ({ children, type, onClick, ...props }) => {
    return (
      <button type={type} onClick={onClick} {...props}>
        {children}
      </button>
    );
  };
  
  