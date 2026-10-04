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
        placeholder='returnItem'
        property='returnItem'
        required
    />
    <DateTime
        placeholder='inspectionDate'
        property='inspectionDate'
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
        property='returnCondition'
        required
    />
    <Numeric
        placeholder='acceptedQuantity'
        property='acceptedQuantity'
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
        placeholder='resolution'
        property='resolution'
        required
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
