import React from 'react';

import { getSessionTrans, getSessionLabels } from '../../../utils/sessions';
import {
    TableFormat
} from '../../../utils'


const filterTrans = (trans, req) => {
    console.log('Trans: ', trans, req);
    let filtered = trans.filter(tran => {
        console.log("tran: ", tran.cost, req.costMin, req.costMax)
        return (tran.cost > req.costMin && tran.cost <= req.costMax);
    })
    return filtered;
}

const displayFilters = (filters) => {
    let formatFilters = (
        <div>
            {filters}
        </div>
    )

    return formatFilters;
}

const FilteredTrans = (filters) => {
    const allTrans = getSessionTrans();
    console.log("Filters are: ", filters)

    return (
        <div>
            <h2>Filters: </h2>
            <TableFormat transactions={filterTrans(allTrans, filters)}
                labels={getSessionLabels()}
            // toggleAllTrans={props.toggleAllTrans} 
            />
        </div>

    )
}

export default FilteredTrans;