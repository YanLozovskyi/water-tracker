import { Container } from "components"

export const Section = ({ className, children }) => { return <section className={className}><Container >{children}</Container></section> }