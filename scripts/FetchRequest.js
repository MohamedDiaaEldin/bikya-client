export const fetchRequest = (endPoint, method, body, use_cookies) => {
  const requestOptions = {
    method: method,
    dataType: "json",
    mode: "cors",
    credentials: 'same-origin' ,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  if (body) {
    requestOptions.body = JSON.stringify(body);
  }
  if (use_cookies){
    // requestOptions.credentials = "same-origin"
    // requestOptions.credentials = "include"
  }

  return fetch("https://mdiaa.pythonanywhere.com/" + endPoint, requestOptions).then(
    (response) => {
      return response;
    }
  );
};
