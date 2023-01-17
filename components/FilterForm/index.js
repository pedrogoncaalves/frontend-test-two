import Link from "next/link"
import { AppTitle, FilterContainer, FilterField } from "./styles"



export const FilterForm = ({ type, value, onChange, placeholder}) => {
    return(
        <>
       <Link href="/"> <AppTitle>News Tracker</AppTitle></Link>
        <FilterContainer>
        <FilterField></FilterField>
        </FilterContainer>
        </>

    )
}