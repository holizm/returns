import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='returnsNumber'
        property='number'
        required
    />
    <Text
        placeholder='returnsOrder'
        property='order'
        required
    />
    <DateTime
        placeholder='returnsRequestedDate'
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
        placeholder='stateMachinesState'
        property='returnStatus'
        required
    />
    <Text
        placeholder='returnsReason'
        property='reason'
        required
    />
    <LongText
        placeholder='returnsDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
