const getSavedData = (savedData) => {
  if (savedData) {
    return savedData.data.code
  }
  return ''
}

module.exports = {
  getSavedData
}
