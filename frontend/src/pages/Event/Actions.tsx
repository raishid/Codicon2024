import { FormDinamic } from "@@/forms/FormDinamic"
import { actions, inputAdminFields } from "./Actions.constants"
import { Example } from "@@/Example"

export const Actions = () => {
  return (
    <>
      <div className="flex justify-center">
        <Example />
      </div>
      <div className="flex justify-center">
        <FormDinamic inputFields={inputAdminFields} actions={actions} />
      </div>
    </>
  )
}
