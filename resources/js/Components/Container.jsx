import clsx from "clsx";
import React from "react";

export default function Container({children, className}){
    return(
        <div className={clsx(className, "container max-w-screen-lg mx-auto px-4")}>{children}</div>
    )
}