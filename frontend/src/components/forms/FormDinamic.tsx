import { Actions, InputFields } from '@/Models/InputFields'
import { Formik, Form } from 'formik'
import { GET_PROPS_FORMS } from './Forms.constants'
import { MySelect, MyTextInput } from '.'

interface Props {
  inputFields: InputFields[]
  actions: Actions
}

export const FormDinamic = ({ inputFields, actions }: Props) => {

  return (
    <Formik
      initialValues={GET_PROPS_FORMS(inputFields).initialValues}
      validationSchema={GET_PROPS_FORMS(inputFields).validationSchema}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {() => (
        <Form noValidate>
          {inputFields.map(({ type, name, placeholder, label, options }) => {

            if (type === 'input' || 
                type === 'password' || 
                type === 'email' || 
                type === 'number') {
              return <MyTextInput
                key={name}
                type={(type as any)}
                name={name}
                label={label}
                placeholder={placeholder} />

            } else if (type === 'select') {
              return (
                <MySelect
                  key={name}
                  label={label}
                  name={name}
                >
                  <option value="">Selecione una opcion</option>
                  {
                    options?.map(({ id, label }) => (
                      <option key={id} value={id}>{label}</option>
                    ))
                  }
                </MySelect>
              )
            }


            throw new Error(`El type: ${type}, no es soportado`);
          })}



          <div className={actions.class}>
            {
              actions.buttons.map(({text, type},i)=>(
                <button 
                  key={i} 
                  type={type}
                >
                  {text}
                </button>
              ))
            }
          </div>

        </Form>
      )}

    </Formik>
  )
}
