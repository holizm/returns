import { DateTime } from 'list'

export default item => <>
    <td>{item.number}</td>
    <td>{item.order?.title}</td>
    <DateTime value={item.requestedDate} />
    <td>{item.returnStatus}</td>
</>
