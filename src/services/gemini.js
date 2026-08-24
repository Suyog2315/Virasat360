// Gemini API integration will be added here.
//
// The Heritage AI will eventually answer questions about:
// - Konark Sun Temple
// - Jagannath Temple
// - Udayagiri & Khandagiri
// - Lingaraj Temple
// - Barabati Fort
//
// API keys will be stored in environment variables.

export async function askHeritageAI(question) {

  console.log(
    "Heritage AI question:",
    question
  );

  return {
    answer:
      "Heritage AI integration will provide an evidence-based answer here."
  };
}