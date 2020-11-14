
function cap(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

if(window.location.hostname) document.title = cap(window.location.hostname)

export default ({app, router, Vue}) => {
}
