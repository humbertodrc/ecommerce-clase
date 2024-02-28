const API_URL = process.env.NEXT_PUBLIC_API_URL

export const getFaqs = async () => {
  const response = await fetch(`${API_URL}/faqs`);
  const data = await response.json();
  return data;
}