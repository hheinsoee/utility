export const makeUp = (
  data: any | any[],
  pretty: string[],
  isNull = undefined
) => {
  function mUp(d: any) {
    const prettyData: { [key: string]: any } = {};
    pretty.forEach((x) => {
      if (d[x] !== undefined) {
        prettyData[x] = d[x];
      } else if (isNull) {
        prettyData[x] = null;
      }
    });
    return prettyData;
  }
  if (Array.isArray(data)) {
    const result: any[] = [];
    data.forEach((d: any) => {
      result.push(mUp(d));
    });
    return result;
  }
  return mUp(data);
};

export const isRequired = (data: any, need: string[]) => {
  function mUp(data: any) {
    const required: any[] = [];
    need.forEach((x) => {
      if (data[x] == null) {
        required.push(x);
      }
    });
    return required.length === 0 ? false : required;
  }
  return mUp(data);
};
