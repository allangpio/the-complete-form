export default function formatIncome(value: string): string {
  const input = value.replace(/[^\d]/g, '');

  // eslint-disable-next-line no-return-assign
  return input ? (value = `R$ ${parseFloat(input).toLocaleString('pt')}`) : '';
}
