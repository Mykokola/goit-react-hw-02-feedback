import { Children } from "react"

export const Section = ({title,child}) => {
    return (
        <> 
        <h3>{title}</h3>
        {child}
        </>

    )
}