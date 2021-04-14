// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function clone<T>(data: T) :T{
  return JSON.parse(JSON.stringify(data));
}

export default clone;