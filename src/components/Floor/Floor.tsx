import React from 'react';
import Table from '../Table/Table';
import './Floor.css';
import myProps, myState from './App.tsx';

function Floor(myProps, myState) {
 
  return (
    <div className='floor' >
        <Table number='1'/>
        <Table/>
        <Table/>
        <Table/>
        <Table/>
        <Table/>
        <Table/>
        <Table/>
        <Table/>
        <Table/>
    </div>
  );
}

export default Floor;
