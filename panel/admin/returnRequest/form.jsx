import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='number'
        property='number'
        required
    />
    <Text
        placeholder='order'
        property='order'
        required
    />
    <DateTime
        placeholder='requestedDate'
        property='requestedDate'
        required
    />
    <Select
        options={[
            'requested',
            'approved',
            'rejected',
            'inTransit',
            'received',
            'inspected',
            'resolved',
            'cancelled',
        ]}
        placeholder='state'
        property='returnStatus'
        required
    />
    <Text
        placeholder='reason'
        property='reason'
        required
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
