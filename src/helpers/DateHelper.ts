import { format, compareAsc, compareDesc, isEqual } from 'date-fns';
// import * as langs from 'date-fns/locale'; // If multi language
import { ru, enUS } from 'date-fns/locale';

export default class DateHelper {
  // locale
  static getFormattedDate = (data: any, lang: any) => {
    // console.log('If multi language', langs[lang]);
    const locale = lang === 'ru' ? ru : enUS;
    DateHelper.compareTwoDate();

    return format(data, 'dd MMMM yyyy', { locale });
  };

  // Compare date
  static compareTwoDate = () => {
    const resultAsc = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10));
    const resultDesc = compareDesc(new Date(1987, 1, 11), new Date(1989, 6, 10));
    const resultIsEqual = isEqual(new Date(2014, 6, 2, 6, 30, 45, 0), new Date(2014, 6, 2, 6, 30, 45, 500));

    // Asc equal
    console.log(resultAsc);
    // Desc equal
    console.log(resultDesc);
    // Is date equal
    console.log(resultIsEqual);
  };
}
