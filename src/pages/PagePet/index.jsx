import { useContext, useEffect } from "react";
import { useState } from "react";

import { useParams, useHistory } from "react-router-dom";

import { UserContext } from "../../providers/User";

import api from "../../services/api";

import defaultImg from "../../assets/proprietario-default-img.svg";

import ButtonOutlined from "../../components/ButtonOutlined";
import Button from "../../components/Button";
// import Footer from "../../components/Footer";

import * as S from "./styles";

const PagePet = () => {
  const [dataPet, setDataPet] = useState({});
  const [dataOwner, setDataOwner] = useState({});

  const params = useParams();
  const history = useHistory();

  const { userData } = useContext(UserContext);

  const getAnimalById = (id) => {
    api.get(`/644/animals/${id}`).then((res) => setDataPet(res.data));
  };

  const getUserById = (userId) => {
    api.get(`/644/users/${userId}`).then((res) => setDataOwner(res.data));
  };

  const wantToAdopt = () => {
    if (userData.id) {
      console.log("adotado!");
    } else {
      history.push("/login");
    }
  };

  useEffect(() => {
    getAnimalById(params.id);
  }, []);

  useEffect(() => {
    if (dataPet.userId) getUserById(dataPet.userId);
  }, [dataPet]);

  return (
    <S.GenericContainer>
      <S.Main>
        {/* imagem grande do animal */}
        <S.Figcaption>
          <img src={dataPet.img} alt="" />
        </S.Figcaption>

        {/* outras imagens do animal */}
        <S.DivMoreImgs>
          <img src={dataPet.img} alt="" />
          <img src={dataPet.img} alt="" />
          <img src={dataPet.img} alt="" />
          <img src={dataPet.img} alt="" />
        </S.DivMoreImgs>

        <S.DivInfoPet>
          <h1>{dataPet.name}</h1>

          <S.DivInfoUser>
            <img src={dataOwner.avatar || defaultImg} alt="" />
            <div>
              <h5>{dataOwner.name}</h5>
              <h6>proprietário</h6>
            </div>
          </S.DivInfoUser>

          <h2>{dataPet.sex === "m" ? "Macho" : "Fêmea"}</h2>

          <h2>
            {dataPet.size === "small"
              ? "Pequeno"
              : dataPet.size === "medium"
              ? "Médio"
              : "Grande"}
          </h2>

          <span>{dataPet.moreInfo}</span>
        </S.DivInfoPet>

        <S.DivButtons>
          <ButtonOutlined callback={() => history.push("/")}>
            voltar
          </ButtonOutlined>
          {dataPet.userId === userData.id && (
            <ButtonOutlined
              callback={() => history.push(`/user/pet/${dataPet.id}`)}
            >
              Editar Pet
            </ButtonOutlined>
          )}
          <Button onClick={wantToAdopt} orangeSchema>
            Quero Adotar
          </Button>
        </S.DivButtons>

        <footer></footer>
      </S.Main>
    </S.GenericContainer>
  );
};

export default PagePet;
