import { useState } from "react";

function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null)
  const [sortBy, setSortBy] = useState(null)

  const setSortColumn = (label) => {
if (sortBy && label !== sortBy) {
    setSortOrder('asc');
    setSortOrder(label);
    return;
}

    if (sortOrder===null) {
        setSortOrder('asc')
        setSortBy(label);
    } else if (sortOrder==='asc') {
        setSortOrder('desc')
        setSortBy(label);
    } else if (sortOrder==='desc') {
        setSortOrder(null)
        setSortBy(null);
    }
};

 let SortedData = data;
if (sortOrder && sortBy) {
    const { sortValue } = config.find(column => column.label === sortBy);
    SortedData = [...data].sort((a, b) => {
        const valueA = sortValue(a)
        const valueB = sortValue(b)

        const reverseOrder = sortOrder ==='asc' ? 1 : -1;

        if(typeof valueA === 'string'){
            return valueA.localeCompare(valueB) * reverseOrder;
        }else {
            return valueA - valueB * reverseOrder
        }
    });
}
return{
    sortOrder,
    sortBy,
    SortedData,
    setSortColumn
}
}
export default useSort;