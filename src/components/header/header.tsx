import HeaderListItem from "./header-list-item/header-list-item"
import HeaderList from "./header-list/header-list"
import HeaderLinks from "./header-links/header-links"
import HeaderFormFilters from "./header-form-filters/header-form-filters"
import HeaderActions from "./header-actions/header-actions"
import Logo from "../logo/logo"

const Header = () => {
    return (
        <header>
            <HeaderList>
                <HeaderListItem>
                    <Logo src='/logo.png' />
                </HeaderListItem>
                <HeaderListItem>
                    <HeaderLinks />
                </HeaderListItem>
                <HeaderListItem>
                    <HeaderFormFilters />
                </HeaderListItem>
                <HeaderListItem>
                    <HeaderActions />
                </HeaderListItem>
            </HeaderList>   
        </header>
    )
}

export default Header