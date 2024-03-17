import { Actions, InputFields } from "@/Models/InputFields";

export const inputAdminFields:InputFields[] =[
    {
        type: "input",
        isNumber: false,
        name: "name",
        placeholder: "Name",
        label: "Name",
        value: "",
        validations: [
            {
                type: "required"
            },
            {
                type: "minLength",
                value: 2
            }
        ]
    },
    {
        type: "number",
        isNumber: true,
        name: "price",
        placeholder: "Precio",
        label: "Precio",
        value: "",
        validations: [
            {
                type: "required"
            },
            {
                type: "numbers"
            }
        ]
    }
]


export const actions: Actions = {
    class:"actions end",
    buttons:[
        {
            type: "submit",
            text: "crear"
        }
    ]
}