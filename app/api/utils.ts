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
