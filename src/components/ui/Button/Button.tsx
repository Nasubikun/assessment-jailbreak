type ButtonProps = {
  children?: string
}

export const Button = ({ children }: ButtonProps): JSX.Element => {
  return <button>{children}</button>
}
