import {useState} from 'react';

export const usePopUp = () => {
    const [isVisible, setVisibility] = useState(false);
  
    const handleClick = () => setVisibility(!isVisible);
    
  
    return { isVisible, handleClick };
  }