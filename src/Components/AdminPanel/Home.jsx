import React, { useEffect, useState } from "react";
import { service } from "./../../service/axios.service";
import { useDispatch, useSelector } from "react-redux";
import { setAllType } from "./../../redux/actions/actionsType";
import Delete from './../Icons/Delete';
import Edit from './../Icons/Edit';
import Modal from '../UI/ModalCategory';
import ModalCar from '../UI/ModalCar';

function Home() {
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const allTypesArr = useSelector(state => state.allType.allTypeDate);

  useEffect(() => {
    try {
      service
        .get("/car", {
          params: {
            limit: limit,
            page: page,
          },
        })
        .then((res) => {
          console.log(res.data);
          setTotal(res.data.total);
          dispatch(setAllType(res.data.data));
        });
    } catch (error) {
      console.log(error);
    }
  }, [limit, page, dispatch]);

  const typeTitle = [
    "#",
    "Marka",
    "Gearbok",
    "Tonirovka",
    "Motor",
    "Year",
    "Color",
    "Distance",
    // "Price",
    // 'Description',
    ""
  ];

  return (
    <div className="admin_home_page bg-white px-3">
      <div className="w-100 d-flex align-items-center justify-content-between px-4 py-5">
        <div className="d-flex align-items-center">
          <div className="default_block"></div>
          <h2 className="m-0 px-4">Mashinalar</h2>
        </div>
        <div className="d-flex">
          <div className="px-3">
            <Modal title="Katigoriya qo'shish" />
          </div>
          <ModalCar title="Mashina qo'shish" />
        </div>
      </div>
      <table className="table table-hover table-responsive">
        <thead>
          <tr>
            {typeTitle.map((item, index) => (
              <th key={index} className={index===0 ? "px-4 py-4 text-black-50" : "py-4 text-black-50"}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
            {
              allTypesArr.map((item, index)=>(
                <tr key={index}>
                  <th className="px-4 py-4 text-black-50">{index+1}.</th>
                  <th className="py-4">{item.marka ? item.marka.name : "Chevrolet"}</th>
                  <th className="py-4">{item.gearbok}</th>
                  <th className="py-4">{item.tonirovka}</th>
                  <th className="py-4">{item.motor}</th>
                  <th className="py-4">{item.year}</th>
                  <th className="py-4">{item.color}</th>
                  <th className="py-4">{item.distance}</th>
                  <th className="py-4"><button className="btn btn-primary"><Edit style={{white: '105px'}} /></button></th>
                  <th className="py-4"><button className="btn btn-danger"><Delete /></button></th>
                </tr>
              ))
            }
        </tbody>
      </table>
    </div>
  );
}

export default Home;
