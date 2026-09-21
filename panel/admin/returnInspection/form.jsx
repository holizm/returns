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
        placeholder='returnsReturnItem'
        property='returnItem'
        required
    />
    <DateTime
        placeholder='returnsInspectionDate'
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
        placeholder='corePhysicalCondition'
        property='returnCondition'
        required
    />
    <Numeric
        placeholder='returnsAcceptedQuantity'
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
        placeholder='returnsResolution'
        property='resolution'
        required
    />
    <LongText
        placeholder='returnsDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
