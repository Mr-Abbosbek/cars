import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { service } from "../../service/axios.service";
import ThreeSixty from "react-360-view";
import Iframe from "react-iframe";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedType } from "../../redux/actions/actionsType";
import Loading from './../Loading/Loading';


function Description() {
  const [makon, setMakon] = useState(false);
  let url = useParams();
  const dispatch = useDispatch();
  const selectedTypeArr = useSelector((state) => state.allTypes);

  useEffect(() => {
    service.get("/car/" + url.desc).then((res) => {
      dispatch(setSelectedType(res.data));
    });
  }, [url, dispatch]);

  const {
    color,
    description,
    distance,
    gearbok,
    marka,
    motor,
    price,
    tonirovka,
    year,
  } = selectedTypeArr;

  console.log(selectedTypeArr.length);

  return !selectedTypeArr.length ? (
    <div className="all_container description_page">
      <p className="fw-bold">
        <Link to="/">Bosh sahifa</Link> {">"} <Link to="/">Modellar</Link> {">"}{" "}
        <Link to={`/modellar/${url.category}/${url.id}`}>
          {url.category} turlari
        </Link>{" "}
        {">"}{" "}
        <Link to={`/modellar/${url.category}/${url.id}/${url.desc}`}>
          Description
        </Link>
      </p>

      <div className="row desc_title">
        <div className="col">
          <h1>Modellari</h1>
        </div>
      </div>
      <div className="row info py-4">
        <div className="col-4 px-5 py-3 info_text">
          <div>
            <h1>{marka && marka.name}</h1>
            <h5>{price} so'm dan</h5>
          </div>
          <div>
            <img
              src="../../../images/chevrolet/3d/61.png"
              alt=""
              className="w-100"
            />
          </div>
          <h6 className="d-flex">
            Marka: <p className="m-0 mx-2">{marka && marka.name}</p>
          </h6>
          <h6 className="d-flex">
            Tanirovkasi: <p className="m-0 mx-2">{tonirovka}</p>
          </h6>
          <h6 className="d-flex">
            Motori: <p className="m-0 mx-2">{motor}</p>
          </h6>
          <h6 className="d-flex">
            Year: <p className="m-0 mx-2">{year}</p>
          </h6>
          <h6 className="d-flex">
            Color: <p className="m-0 mx-2">{color}</p>
          </h6>
          <h6 className="d-flex">
            Distance: <p className="m-0 mx-2">{distance}</p>
          </h6>
          <h6 className="d-flex">
            Gearbook: <p className="m-0 mx-2">{gearbok}</p>
          </h6>
          <h6 className="d-flex">
            Description: <p className="m-0 mx-2">{description}</p>
          </h6>
          <hr className="my-2" />
          <h6 className="w-100 d-flex justify-content-center">
            Umumiy harajat: <p className="m-0 mx-2">{price} so'm dan</p>
          </h6>
        </div>
        <div className="col-8 info_image">
          <h1>{marka && marka.name}</h1>
          <div className={makon === true ? "d-block image_360" : "d-none"}>
            <Iframe
              width="100%"
              height="100%"
              src="https://cdn.kia-motors.uz/panoramas/iframe.html?pano_xml=https://cdn.kia-motors.uz/uz/panoramas/seltos/1K/pano.xml"
              frameborder="0"
            />
          </div>
          <div className={makon === false ? "d-block image_360 w-100" : "d-none"}>
            <ThreeSixty
              amount={72}
              imagePath={"../../../images/chevrolet/3d"}
              fileName="{index}.png"
              spinReverse
            />
          </div>
          <div className="w-100 py-4 d-flex justify-content-center">
            <img src="./../../../images/Group.png" alt="" />
          </div>
          <p className="w-100 text-center">
            Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin. Mashinaning
            rangi ushbu saytda taqdim etilganidan farq qilishi mumkin.
          </p>
          <div className="py-3 d-flex justify-content-center">
            <div className="form-check px-4">
              <input
                className={makon === false ? "form-check-input bg-black" : "form-check-input bg-white"}
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onClick={() => {
                  setTimeout(setMakon(false),5000)
                }}
                defaultChecked
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Tashqi makon
              </label>
            </div>
            <div className="form-check px-4">
              <input
                className={makon === true ? "form-check-input bg-black border border-black" : "form-check-input bg-white"}
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                onClick={() => {
                  setTimeout(setMakon(true), 5000)
                }}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Ichki makon
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  )
}

export default Description;
