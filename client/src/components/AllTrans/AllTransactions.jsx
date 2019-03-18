import React from 'react';

import {
  TableFormat
} from '../../utils'

import { getSessionTrans, getSessionLabels } from '../../utils/sessions';

const AllTransactions = (props) => {
  return <TableFormat transactions={getSessionTrans()}
    labels={getSessionLabels()}
    toggleAllTrans={props.toggleAllTrans} />
}

export default AllTransactions;