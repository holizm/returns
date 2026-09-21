import { List } from 'list'
import Form from './form'

const headers = <>
    <th start>returnsReturnItem</th>
    <th>corePhysicalCondition</th>
    <th>returnsAcceptedQuantity</th>
    <th>returnsResolution</th>
</>

const row = item => <>
    <td>{item.returnItem?.title}</td>
    <td>{item.returnCondition}</td>
    <td>{item.acceptedQuantity}</td>
    <td>{item.resolution}</td>
</>

export default <List
    create={Form}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
