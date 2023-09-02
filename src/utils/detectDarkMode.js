const detectDarkMode = () => {
  //1. Proverka temnoj temi na urovne sistemnih nastroek
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark'
  }
  return 'light'
}

export default detectDarkMode
