export function getId(prefix = 'id') {
  return `${prefix}-${Math.round(Date.now() * Math.random())}`;
}
