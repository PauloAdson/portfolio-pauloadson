import React from "react";
import "./styles.css";
import Depoimento from "../Depoimento/Depoimento";
import logoAzevedoAdvocacia from "../../assets/images/logos-clientes/azevedo-advocacia-logo.png";
import logoFurlanSolucoes from "../../assets/images/logos-clientes/logo-furlan-solucoes.png";

const CarrosselDepoimentos = () => {
  return (
    <div className="depoimentos__carrosel">
      <Depoimento
        bgLogo={"white"}
        logoCliente={logoAzevedoAdvocacia}
        cliente={"Azevedo Advocacia"}
        comentario={
          "E ficou muito top ! Trabalho incrível 👏 agradecemos muito pelo empenho em compreender e nos explicar cada passo."
        }
      />
      <Depoimento
        bgLogo={"black"}
        cliente={"Furlan Soluções Financeiras"}
        logoCliente={logoFurlanSolucoes}
        comentario={"Gostei muito👏"}
      />
    </div>
  );
};

export default CarrosselDepoimentos;
