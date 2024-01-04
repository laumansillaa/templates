import style from './styles/customContainer.module.css'

export const CustomBorderContainerForm = ({ children }) => {
  return <div className={style.customContainer}>{children}</div>;
};
