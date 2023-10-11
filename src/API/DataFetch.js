export async function DataFetchAPI() {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
  );

  console.log("response inside datFetch=====>", response);

  if (response.status === 200) {
    return response;
  }

  return new Error(response.status);
}
