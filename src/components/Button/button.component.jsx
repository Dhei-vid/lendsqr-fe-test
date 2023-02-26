import "./button.styles.scss";

const Button = ({ children }) => (
  <button type="submit" className="button-container">
    {children}
  </button>
);

export default Button;
