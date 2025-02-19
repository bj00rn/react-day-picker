import * as React from 'react';

import { getWeekdaysNames } from './utils/getWeekdaysNames';

export const Head: React.FC<ReactDayPicker.HeadProps> = props => {
  const { locale, showWeekNumber, dayPickerProps } = props;
  const { classNames, styles, formatWeekdayName } = dayPickerProps;
  const weekdayNames = getWeekdaysNames(locale, formatWeekdayName);
  return (
    <thead style={styles.head} className={classNames.head}>
      <tr style={styles.headRow} className={classNames.headRow}>
        {showWeekNumber && (
          <th
            style={styles.headWeekNumber}
            className={classNames.headWeekNumber}
          ></th>
        )}
        {weekdayNames.map((name, i) => (
          <th
            key={i}
            scope="col"
            style={styles.headWeekName}
            className={classNames.headWeekName}
          >
            {name}
          </th>
        ))}
      </tr>
    </thead>
  );
};
