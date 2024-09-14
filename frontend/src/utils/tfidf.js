// Helper function to tokenize and clean the text
function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(" ")
    .filter((token) => token.length > 0);
}

// TF function: Count word frequency in a single document
function termFrequency(term, document) {
  const tokens = tokenize(document);
  const count = tokens.filter((token) => token === term).length;
  return count / tokens.length;
}

// IDF function: Inverse document frequency across all documents
function inverseDocumentFrequency(term, documents) {
  const numDocsWithTerm = documents.filter((doc) =>
    tokenize(doc).includes(term)
  ).length;
  return Math.log(documents.length / (1 + numDocsWithTerm));
}

// TF-IDF vector for a document
export function calculateTfidfVector(document, documents) {
  const tokens = tokenize(document);
  const uniqueTokens = [...new Set(tokens)];
  const tfidfVector = uniqueTokens.map((term) => {
    const tf = termFrequency(term, document);
    const idf = inverseDocumentFrequency(term, documents);
    return tf * idf;
  });
  return tfidfVector;
}

// Cosine similarity between two vectors
export function cosineSimilarity(vecA, vecB) {
  const dotProduct = vecA.reduce((sum, a, idx) => sum + a * vecB[idx], 0);
  const magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
  const magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
  return dotProduct / (magnitudeA * magnitudeB);
}
