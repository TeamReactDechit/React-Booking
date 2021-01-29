export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Errore risposta");
}

export function handleError(error) {
  console.error("Fallita chiamata API. " + error);
  throw error;
}
