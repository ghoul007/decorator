export function testDecorator(val) {
  return target => {
    Object.defineProperty(target.prototype, 'name', { value: () => val.name });
  };
}
