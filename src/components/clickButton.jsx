export const ClickButton = (props) => {
    return <div className={`btn-bg font-skranji cursor-pointer text-2xl text-center px-8 flex justify-center items-center pt-4 ${props.className}`} onClick={props.onClick}>
        {props.title}
    </div>
}

export const ClaimButton = (props) => {
    return <div className={`ref-btn font-skranji cursor-pointer text-2xl text-white flex justify-center items-center ${props.className}`} onClick={props.onClick}>
        {props.title}
    </div>
}