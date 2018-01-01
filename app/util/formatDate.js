const formatDate = (time) => {
  const d = new Date(time);
  const format = {month: 'long', day: 'numeric', year: 'numeric'};
  
  return d.toLocaleString('en-us', format);
}

export default formatDate
