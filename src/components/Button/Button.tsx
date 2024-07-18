import utils from '../../styles/modules/utils.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content?: string;
  classStyle?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Button = ({ content, classStyle, icon: IconComponent, onClick, ...res }: ButtonProps) => (
  <button className={`${utils.pointer} ${classStyle}`} onClick={onClick} {...res}>
    {IconComponent && <IconComponent />}
    {content}
  </button>
);

export default Button;
