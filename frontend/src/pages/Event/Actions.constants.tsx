import { Actions, InputFields } from "@/Models/InputFields";

export const inputAdminFields:InputFields[] =[
    {
        type: "input",
        isNumber: false,
        name: "title",
        placeholder: "titulo del evento",
        label: "Evento",
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
        type: "input",
        isNumber: true,
        name: "description",
        placeholder: "Descripcion del evento",
        label: "Descripcion",
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
        type: "input",
        isNumber: true,
        name: "author",
        placeholder: "Autor del evento",
        label: "Autor",
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
        type: "input",
        isNumber: true,
        name: "Fecha",
        placeholder: "Fecha del evento",
        label: "Autor",
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
    }
]


export const actions: Actions = {
    class:"actions end",
    buttons:[
        {
            type: "submit",
            text: "Crear Evento"
        }
    ]
}