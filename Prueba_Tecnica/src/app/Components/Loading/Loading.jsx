import Image from "next/image";
import Load from "../../../../public/customers/Loading.gif";
export const Loading = () => {
  return (
    <div>
      <Image src={Load} alt="Cargando..." />
    </div>
  );
};
