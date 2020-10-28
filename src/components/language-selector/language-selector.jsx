import React from 'react';
import { useTranslation } from 'react-i18next';

import { Select, SelectContainer } from './language-selector.style';

const LenguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const handleChange = e => {
    changeLanguage(e.target.value);
  };

  return (
    <SelectContainer>
      <Select defaultValue={i18n.language} onChange={e => handleChange(e)}>
        <option value="en">EN</option>
        <option value="ru">RU</option>
      </Select>
    </SelectContainer>
  );
};

export default LenguageSelector;
