async function HttpUtil(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: any
): Promise<{ statusCode: number; [key: string]: any }> {
  const body = typeof data !== "string" ? JSON.stringify(data) : data;
  const response = await fetch(url, {
    method,
    body,
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("auth") ?? "",
    },
  });

  const result = await response.json();

  result.statusCode = response.status;
  return result;
}

export { HttpUtil };
