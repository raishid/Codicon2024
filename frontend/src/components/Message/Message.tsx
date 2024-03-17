export const Message = ({message}:any) => {
    return (
        <div className="flex justify-start px-10">

            <div className="mx-2 text-white font-extralight">
                18:30
            </div>
            <div>
                <span className="text-sky-500 mr-1">{message.username}: </span>
                <span className="text-white ">
                    {message.message}
                </span>
            </div>
        </div>
    )
}
