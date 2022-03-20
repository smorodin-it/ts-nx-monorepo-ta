import { MinimalUserNameInfo } from './types';

export const formatSize = (size: number): string => {
  let sizeString: string;
  if (size < 1024) {
    sizeString = size + ' байт';
  } else if (size < 1024 * 1024) {
    sizeString = (size / 1024.0).toFixed(0) + ' КБ';
  } else if (size < 1024 * 1024 * 1024) {
    sizeString = (size / 1024.0 / 1024.0).toFixed(1) + ' МБ';
  } else {
    sizeString = (size / 1024.0 / 1024.0 / 1024.0).toFixed(1) + ' ГБ';
  }
  return sizeString;
};

export const formatUserNameShort = (user: MinimalUserNameInfo): string => {
  return (
    user.firstName +
    ' ' +
    user.lastName.charAt(0) +
    '. ' +
    user.patronymic.charAt(0) +
    '.'
  );
};

export const formatUserNameFull = (user: MinimalUserNameInfo): string => {
  return `${user.firstName} ${user.lastName} ${user.patronymic}`;
};

export const daysDiff = (controlDate: string): number => {
  const date = new Date(controlDate).getTime();
  const now = new Date().getTime();
  return Math.ceil((date - now) / (1000 * 3600 * 24));
};

export const stringDeclination = (num: number, labels: string[]): string => {
  const cases = [2, 0, 1, 1, 1, 2];
  return (
    num.toString() +
    ' ' +
    labels[
      num % 100 > 4 && num % 100 < 20 ? 2 : cases[num % 10 < 5 ? num % 10 : 5]
    ]
  );
};
