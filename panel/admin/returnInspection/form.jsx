import {
    DateTime,
    DialogForm,
    LongText,
    Numeric,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        required
        returnItem
    />
    <DateTime
        inspectionDate
        required
    />
    <Select
        options={[
            'unopened',
            'resalable',
            'damaged',
            'defective',
            'incomplete',
        ]}
        placeholder='physicalCondition'
        required
        returnCondition
    />
    <Numeric
        acceptedQuantity
        required
    />
    <Select
        options={[
            'refund',
            'exchange',
            'repair',
            'storeCredit',
            'rejected',
        ]}
        required
        resolution
    />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
