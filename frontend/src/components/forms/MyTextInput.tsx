import { ErrorMessage, useField } from 'formik';

interface Props {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string]: any;
}


export const MyTextInput = ( { label, ...props }: Props ) => {
    const [ field ] = useField(props)

    return (
        <div className='field'>
            <label htmlFor={ props.id || props.name }>{label}</label>
            <input 
                className="text-input" 
                { ...field } 
                { ...props } 
            />

            <ErrorMessage name={ props.name } component="span" />
        </div>
    )
}
