import React, { useMemo } from "react";
import { Select } from "antd";
import { SelectProps } from "antd/lib/select";

import { CalendarIcon, CaretDownMedium } from "../../assets";
import { PeriodSelectStyle } from "./style";

const { Option } = Select;

interface OptionsProps {
  value: string;
  label: string;
}

export interface PeriodSelectProps extends SelectProps {
  options: OptionsProps[];
}

export const PeriodSelect: React.FC<PeriodSelectProps> = props => {
  const { onChange, options } = props;
  const defaultValue = options[0].value;
  const optionElements = useMemo(() => {
    return options.map((option: OptionsProps) => {
      const { value, label } = option;

      return (
        <Option key={value} value={value}>
          {label}
        </Option>
      );
    });
  }, [options]);

  return (
    <PeriodSelectStyle>
      <CalendarIcon />
      <Select
        defaultValue={defaultValue}
        onChange={onChange}
        suffixIcon={CaretDownMedium}
      >
        {optionElements}
      </Select>
    </PeriodSelectStyle>
  );
};
