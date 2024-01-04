import { useSelector } from "react-redux";
import { useGetListPost } from "@/Redux/useActions/useGetListPost";
import Carrousel from "../Carrousel/Carrousel";
import style from './styles/index.module.css'

export default function CarrouselProperty({ propertyId }) {
  const typeProperty = useSelector((state) => state.theme.list);

  useGetListPost();

  const filterPropertiesByType = (properties, type) => {
    return properties.filter((property) => property.type === type);
  };

  let currentType = propertyId.type;
  const filteredProperties = filterPropertiesByType(typeProperty, currentType);

  return (
    <div className={style.contCarrouselProperty}>
      <div className={style.contTitle}>
        <h3 className="font-bold text-xl">
          Propiedades que podrían interesarte
        </h3>
      </div>
      <Carrousel data={filteredProperties} widthCard={350} />
    </div>
  );
}
