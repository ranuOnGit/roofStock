import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Gridview from '../gridView/Gridview';
import Tableview from '../tableView/Tableview';
import { BsGrid } from 'react-icons/bs';
import { BsTable } from 'react-icons/bs'
import './Home.css'

const Home = () => {
  const [ list, setList ] = useState( [] );
  const [ table, setTable ] = useState( false )
  const [grid, setGrid] = useState(true)

  let history = useHistory();

  const url =
    'https://samplerspubcontent.blob.core.windows.net/public/properties.json';

  const fetchList = async () => {
    const res = await axios.get(url);
    setList(res.data.properties);
  };

  useEffect(() => {
    fetchList();
  }, []);

  const handleDetails = (el) => {
    history.push('/details', { params: el });
  };

  const handleGrid = () => {
    setGrid( true )
    setTable(false)
  }

  const handleTable = () => {
    setTable( true )
    setGrid(false)
  }

  return (
    <div>
      <div className='toggleButtons'>
        <button onClick={handleGrid} className='grid-button'>
          <BsGrid />
        </button>
        <button onClick={handleTable} className='table-button'>
          <BsTable />
        </button>
      </div>
      {table && <Tableview list={list} moreDetails={handleDetails} />}
      {grid && <Gridview list={list} moreDetails={handleDetails} />}
    </div>
  );
};

export default Home;
