import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { service } from "../../service/axios.service";
import ThreeSixty from "react-360-view";

function Description() {
  let url = useParams();
  console.log(url.desc);
  const basePath = 'https://cdn.kia-motors.uz/exterior/Seltos/20202020/G195/SWP';
  // const basePath = "https://fastly-production.24c.in/webin/360";
  // useEffect(() => {
  //   try {
  //     service.get('/car' + url.desc).then((res)=>{

  //     })
  //   } catch (error) {

  //   }
  // }, [])
  return (
    <div className="all_container border">
      <p className="fw-bold">
        <Link to="/">Bosh sahifa</Link> {">"} <Link to="/">modellar</Link> {">"}{" "}
        <Link to={`/modellar/${url.tur}`}>{url.tur} turlari</Link>
      </p>
      <iframe
        src="https://cdn.kia-motors.uz/panoramas/iframe.html?pano_xml=https://cdn.kia-motors.uz/uz/panoramas/seltos/1K/pano.xml"
        frameborder="0"
      ></iframe>
      <div className="d-block w-100">
        <ThreeSixty
          amount={72}
          imagePath={basePath}
          fileName="{index}.jpeg"
          spinReverse
        />
      </div>
    </div>
  );
}

export default Description;
