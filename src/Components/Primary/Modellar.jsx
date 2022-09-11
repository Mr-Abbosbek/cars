import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCategory } from '../../redux/actions/actionsType';
import { service } from '../../service/axios.service';

function Modellar() {
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    service.get('/category/marka',{
      params: {
        limit: limit,
        page: page
      }
    }).then((res)=>{
      console.log(res.data.data);
      dispatch(setCategory(res.data.data))
    })
  }, [limit, page, dispatch]);

  const category = useSelector(state => state.allCategory.category);
  category.sort((a, b) => {
    let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});
  console.log(category);

  return (
    <div className='all_container'>
      <p className='fw-bold'><Link to='/'>Bosh sahifa</Link> {'>'} <Link to='/'>modellar</Link></p>
      <h1 className='fw-bold'>Modellari</h1>
      <div className='row py-4 d-flex'>
        {
          category.map((item)=>(
            <Link to={`/modellar/${item.name}`} className='col-3 px-5 text-center' key={item._id}>
              <img src={`./images/${item.name}.jpg`} alt={item.name} />
              <h3>{item.name}</h3>
            </Link>
          ))
        }
      </div>
    </div>
  );
}

export default Modellar;