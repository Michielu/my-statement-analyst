import React from 'react';

import { getSessionTrans, getSessionLabels } from '../../../utils/sessions';
import {
    TableFormat, toTimestamp
} from '../../../utils'


const filterTrans = (trans, req) => {
    let filtered = trans.filter(tran => {
        let withinCostRange = true;
        let containsLabels = true;
        let withinDateRange = true;
        if (req.costMin) {
            withinCostRange = parseInt(tran.cost) >= parseInt(req.costMin);
        }
        if (req.costMax && withinCostRange) {
            withinCostRange = parseInt(tran.cost) <= parseInt(req.costMax);
        }
        if (req.selectedLabels.length > 0) {
            if (req.allLabels) {
                req.selectedLabels.forEach((label) => {
                    if (tran.labels.indexOf(label) == -1) {
                        containsLabels = false;
                    }
                })
            } else {
                containsLabels = false;
                tran.labels.forEach((label) => {
                    if (req.selectedLabels.indexOf(label) > -1) {
                        containsLabels = true;
                    }
                })
            }
        }
        if (req.rangeEnd && req.rangeStart) {
            const tsStart = toTimestamp(req.rangeStart);
            const tsEnd = toTimestamp(req.rangeEnd);
            const tsDOP = toTimestamp(tran.dateOfPurchase.substring(0, 10));

            if (tsDOP > tsEnd || tsDOP < tsStart) {
                withinDateRange = false;
            }
        }
        return withinCostRange && containsLabels && withinDateRange;
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