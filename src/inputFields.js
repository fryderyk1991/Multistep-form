const inputs = [
    {
        label: 'First name',
        name: 'firstName',
        type: 'text',
        required: true,
        stepId: 1,
    },
    {
        label: 'Last name',
        name: 'lastName',
        type: 'text',
        required: true,
        stepId: 1,
    },
    {
        type: 'radio',
        name: 'gender',
        labels: ['Male', 'Female'],
        required: true,
        stepId: 1,
    },
    {
        label: 'Dropdown',
        name: 'dropdown',
        type: 'dropdown',
        options: ['Item 1', 'Item 2', 'Item 3'],
        required: true,
        stepId: 2
    },
    {
        label: 'Email',
        name: 'email',
        type: 'email',
        required: true,
        stepId: 2,
    },
    {
        label: 'Experience',
        name: 'experience',
        type: 'text',
        required: true,
        stepId: 2,
    },
    {
        label: 'Country',
        name: 'country',
        type: 'text',
        required: true,
        stepId: 3,
    },
    {
        label: 'City',
        name: 'city',
        type: 'text',
        required: true,
        stepId: 3,
    },
    {
        label: 'Street',
        name: 'street',
        type: 'text',
        required: true,
        stepId: 3,
    }
];


export default inputs;