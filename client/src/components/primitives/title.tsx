import { ChangeEvent, useState } from 'react';

import { useComponentVisible } from '../../hooks/useComponentVisible';
import { BasicTitle } from './styled/basic-title';
import { TitleContainer } from './styled/title-container';
import { TitleInput } from './styled/title-input';

type Props = {
  fontSize: 'x-large' | 'large' | 'medium';
  bold?: boolean;
  title: string;
  onChange: (value: string) => void;
};

export const Title = ({ onChange, title, fontSize, bold }: Props) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const [value, setValue] = useState(title);

  const onEdit = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <TitleContainer ref={ref}>
      {isComponentVisible ? (
        <TitleInput
          value={value}
          onChange={onEdit}
          onBlur={() => setIsComponentVisible(false)}
          fontSize={fontSize}
          bold={bold}
          autoFocus={isComponentVisible}
        />
      ) : (
        <BasicTitle onClick={() => setIsComponentVisible(true)}>
          {value}
        </BasicTitle>
      )}
    </TitleContainer>
  );
};
