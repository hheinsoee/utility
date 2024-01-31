export const makeUp = (data, pretty, isNull = null) => {
  function mUp(d) {
    const prettyData = {};
    pretty.forEach((x) => {
      // if (d[x] && d[x] !== "null") { prettyData[x] = d[x] }
      // if (isNull && (d[x] == "undefined" || d[x] == null)) {
      //   d[x] = null;
      // }

      if (d[x] !== null && d[x] !== undefined) {
        prettyData[x] = d[x];
      } else if (isNull) {
        prettyData[x] = null;
      }
    });
    return prettyData;
  }
  if (Array.isArray(data)) {
    const result = [];
    data.forEach((d) => {
      result.push(mUp(d));
    });
    return result;
  }
  return mUp(data);
};

export const isRequired = (data, need) => {
  function mUp() {
    const required = [];
    need.forEach((x) => {
      if (!data[x]) {
        required.push(x);
      }
    });
    return required.length === 0 ? false : required;
  }
  if (Array.isArray(data)) {
    const result = [];
    data.forEach((d) => {
      result.push(...mUp(d));
    });
    return result.length === 0 ? false : result;
  }

  return mUp(data);
};
