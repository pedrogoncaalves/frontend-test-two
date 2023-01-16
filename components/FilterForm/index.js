import { AppTitle, FilterContainer, FilterField } from "./styles"



export const FilterForm = ({ type, value, onChange}) => {
    return(
        <>
        <AppTitle>News Tracker</AppTitle>
        <FilterContainer>
        <FilterField></FilterField>
        </FilterContainer>
        </>

    )
}