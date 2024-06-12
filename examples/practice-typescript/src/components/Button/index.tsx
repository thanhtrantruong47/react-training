import '../../styles/component.scss';

interface ButtonProps {
  text: string;
  styleClass: 'btn-action' | 'btn-add';
  onClick?: () => void;
}

const Button = ({ text, styleClass, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`btn  ${styleClass}`}>
      {text}
    </button>
  );
};

export default Button;
