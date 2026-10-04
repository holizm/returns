import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        number
        required
    />
    <Text
        order
        required
    />
    <DateTime
        requestedDate
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
        required
        returnStatus
    />
    <Text
        reason
        required
    />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
