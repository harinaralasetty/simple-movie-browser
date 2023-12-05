import React from 'react';
import Record from './Record.js';
import '../../styles/RecordList.css';

function RecordList({ records }) {
  return (
    <div className='record-list'>
      {records.map((record) => (
        <Record key={record.id} record={record} />
      ))}
    </div>
  );
}

export default RecordList;
