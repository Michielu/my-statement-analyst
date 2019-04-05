import React from 'react';

import { getSessionTrans, getSessionLabels } from '../../../utils/sessions';
import {
    TableFormat
} from '../../../utils'


const filterTrans = (trans, req) => {
    console.log('Trans: ', trans, req);
    let filtered = trans.filter(tran => {
        let withinRange = true;
        if (req.costMin) {
            withinRange = parseInt(tran.cost) >= parseInt(req.costMin);
        }
        if (req.costMax && withinRange) {
            withinRange = parseInt(tran.cost) <= parseInt(req.costMax);
        }
        return withinRange;
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