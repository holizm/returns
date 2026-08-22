import {
    DateTime,
    List,
    Text,
} from 'list'
import Form from './form'

const headers = <>
    <th start>returnsNumber</th>
    <th>returnsOrder</th>
    <th>returnsRequestedDate</th>
    <th>returnsStatus</th>
</>

const row = item => <>
    <td>{item.number}</td>
    <td>{item.order?.title}</td>
    <DateTime value={item.requestedDate} />
    <td>{item.returnStatus}</td>
</>

export default <List
    create={Form}
    filters={<Text property='number' />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
