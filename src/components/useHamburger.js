import { useState } from 'react'

const useHamburger = () => {
    const [isDisplayed, setDisplay] = useState(false);
    const toggleDisplay = () => {
      setDisplay(!isDisplayed);
    }

    return {isDisplayed, toggleDisplay};
}

export default useHamburger;