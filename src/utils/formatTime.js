function formatedTime(time) {
  const myDate = new Date(time * 1000);
  return myDate.toGMTString();
}

export default formatedTime;
