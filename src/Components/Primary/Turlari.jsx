import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setType } from "../../redux/actions/actionsType";
import { service } from "../../service/axios.service";
import PaginationUi from "../UI/Pagination";
import Loading from './../Loading/Loading';

function Turlari() {
  let url = useParams();
  const dispatch = useDispatch();
  const [limit] = useState(8);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);
  console.log(url);

  const typeArr = useSelector((state) => state.allTypes.typeDate);

  useEffect(() => {
    if (url && url.length !== 0) {
      try {
        service
          .get("/car", {
            params: {
              limit: limit,
              page: page,
              categoryId: url.id,
            },
          })
          .then((res) => {
            setTotal(res.data.total);
            setCount(Math.ceil(total / limit));
            dispatch(setType(res.data.data));
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [limit, page, total, dispatch, url]);

  const handlePageClick = async (e, value) => {
    setPage(value * 1);
    console.log(page);
    try {
      service
        .get("/car", {
          params: {
            limit: limit,
            page: page,
            categoryId: url.id,
          },
        })
        .then((res) => {
          dispatch(setType(res.data.data));
        });
    } catch (error) {
      console.log(error);
    }
  };

  return typeArr.length ? (
    <div className="all_container pb-5">
      <p className="fw-bold">
        <Link to="/">Bosh sahifa</Link> {">"} <Link to="/">Modellar</Link> {">"}{" "}
        <Link to={`/modellar/${url.category}/${url.id}`}>
          {url.category} turlari
        </Link>
      </p>
      <h1 className="fw-bold">Modellari turlari</h1>
      <div className="row py-4 d-flex">
        {typeArr.map((item) => (
          <Link
            to={`/modellar/${item.marka.name}/${url.id}/${item._id}`}
            className="col-3 px-5 text-center"
            key={item._id}
          >
            <img
              src={`../../images/chevrolet/63199a3d12064d3029295b6b.jpg`}
              alt={item.name}
            />
            <h3>Modeli: {item.marka.name}</h3>
            <h3>Narxi: {item.price.toString().slice(0, 5)}$</h3>
          </Link>
        ))}
      </div>
      <div className="w-100 py-4 d-flex justify-content-center">
        <PaginationUi
          handlePageClick={handlePageClick}
          pageCount={count}
          defaultValue={1}
        />
      </div>
    </div>
  ) : (
    <Loading />
  )
}

export default Turlari;
