import React from 'react';
import { useTranslation } from 'react-i18next';

import { Select, SelectContainer } from './language-selector.style';

const LenguageSelector = () => {
  const { i18n } = useTranslation();

  // useEffect(() => {
  //   i18n.changeLanguage('en');
  // }, [i18n]);

  const handleChange = e => {
    i18n.changeLanguage(e.target.value);
    console.log('changed');
  };

  return (
    <SelectContainer>
      <Select defaultValue="en" onChange={e => handleChange(e)}>
        {/* <option value="ico">Choose language</option> */}
        <option value="en">EN</option>
        <option value="ru">RU</option>
      </Select>
    </SelectContainer>
  );
};

export default LenguageSelector;
