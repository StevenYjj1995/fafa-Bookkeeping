// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function clone(data: any) {
  return JSON.parse(JSON.stringify(data));
}

export default clone;