export const getQuotes = async () => {
  const response = await fetch('https://zenquotes.io/api/quotes');
  const data = await response.json();
  return data;
}