import React from "react";

type Props = {
    children: React.ReactNode
    title?: string
}

const Card = (props: Props) => {
    return (
        <div className="bg-mYou-error-90 font-roboto rounded-[32px] w-full md:w-auto max-w-none md:max-w-[75%] ">
            {/*header */}
            <div className="bg-mYou-error-80 rounded-t-[32px] py-6 px-10 text-mYou-error-30">
                <p className="font-semibold text-3xl">{props.title}</p>
            </div>
            <div className="p-10">
                {props.children}
            </div>
        </div>
    )
}

export default Card;