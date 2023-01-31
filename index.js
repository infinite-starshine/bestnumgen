function generateBestNumber() {
  return 8;
}
function deprecatedBestNumbers() {
  return [7];
}

module.exports = {
  gen: generateBestNumber,
  deprecated: deprecatedBestNumbers,
}
