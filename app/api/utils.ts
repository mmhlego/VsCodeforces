import { sha512 } from 'js-sha512';

export function getSignature(methodName: string, data: object): string {
  //   const randHex = generateHexString(6);
  const randHex = '123456';

  const fields = getFieldsArray(data);

  var apiSig = `${randHex}/${methodName}?${fields.join('&')}#${apiUserSecret}`;

  console.log(apiSig);
  return `${randHex}/${sha512(apiSig)}`;
}

export function generateHexString(len: number) {
  const hex = '0123456789ABCDEF';
  let output = '';
  for (let i = 0; i < len; ++i) {
    output += hex.charAt(Math.floor(Math.random() * hex.length));
  }
  return output;
}

export function getEpoch() {
  return Math.floor(new Date().getTime() / 1000);
}

export function getFieldsArray(obj: object): string[] {
  return Object.keys(obj)
    .map((k: string) => `${k}=${obj[k as keyof typeof obj]}`)
    .sort();
}

export function getTimeString(seconds: number) {
  seconds = Math.abs(seconds);
  const minutes = Math.trunc(seconds / 60) % 60;
  const hours = Math.trunc(seconds / 3600) % 24;
  const days = Math.trunc(seconds / 86400);
  if (seconds < 3600) {
    // less than an hour
    return `${minutes}min`;
  } else if (seconds <= 86400) {
    // less than a day
    return `${hours}h ${minutes}min`;
  } else {
    // more than a day
    return `${days}d  ${hours}h`;
  }
}

export function getDifficultyColor(
  min: number,
  max: number,
  difficulty?: number,
  defaultValue: string = 'transparent'
) {
  if (!difficulty) {
    return defaultValue;
  }

  const colors = ['#7CCD3D', '#ECE53F', '#EC8E1F', '#E5632A', '#D93636'];
  const range = max - min + 1;
  difficulty = Math.trunc(((difficulty - min) / range) * 5);
  return colors[difficulty];
}
