import './button.styles.scss'

const Button = ({ children }) => {
  console.log(children)

  return <button className='button-container'>{children}</button>
}

export default Button
