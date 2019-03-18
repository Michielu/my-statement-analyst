import React from 'react';

import {
  TableFormat
} from '../../utils'

const AllTransactions = (props) => {
  return <TableFormat transactions={JSON.parse(sessionStorage.getItem("trans"))}
    labels={JSON.parse(sessionStorage.getItem("labels"))}
    toggleAllTrans={props.toggleAllTrans} />
}

export default AllTransactions;