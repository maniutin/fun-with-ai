export function onGenerateText(data, returnedTextSetter, isSubmittingSetter) {
  fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      returnedTextSetter(body.choices[0].text);
      isSubmittingSetter(false);
      return body;
    })
    .catch((error) => console.log(error));
}
