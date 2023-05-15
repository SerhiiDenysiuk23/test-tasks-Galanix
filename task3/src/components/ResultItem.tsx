import React, {FC} from 'react';
import {University} from "../types/university";

const ResultItem: FC<{item: University, index: number}> = ({item, index}) => {
    return (
        <tr>
           <td>{index}</td>
           <td>{item.name}</td>
           <td>{item.country}</td>
           <td>{item.alpha_two_code}</td>
            <td>{item.domains.map(i => <div>{i}</div>)}</td>
           <td>{item.web_pages.map(i => <div><a href={i}>{i}</a></div>)}</td>
        </tr>
    );
};

export default ResultItem;