async function HttpPost(
  url: string,
  data: any
): Promise<{ statusCode: number; [key: string]: any }> {
  const body = typeof data !== "string" ? JSON.stringify(data) : data;
  const response = await fetch(url, {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();

  result.statusCode = response.status;
  return result;
}

export { HttpPost };
