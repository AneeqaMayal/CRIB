import axios from 'axios';

export default class WebHandler {
  /////////////////////////////// Post Method ////////////////////////////////
  sendPostDataRequest(url, bodyParams, onSuccess, onFailure) {
    console.log('------------API POST REQUEST--------------');
    console.log('URL==>', url);
    console.log('BODYPARAMS==>', JSON.stringify(bodyParams));

    axios
      .post(url, bodyParams, {
        headers: {
          'content-type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(async response => {
        const respJson = response.data;
        console.log('RESPOSNE==>', JSON.stringify(respJson));
        if (respJson.status == true) {
          onSuccess(respJson);
        } else {
          onFailure(respJson);
        }
      })
      .catch(error => {
        console.log('RESPOSNE Error==>', error);
        onFailure(error);
      });
  }

  ///////////////////////////////////// Simple Get //////////////////////////////////////////////
  sendGetRequest(url, onSuccess, onFailure) {
    console.log('Url', url);
    axios
      .get(url)
      .then(resp => {
        const respJson = resp.data;
        onSuccess(respJson);
      })
      .catch(error => {
        console.log(error);
        onFailure(error);
      });
  }


    /////////////////////////////// Post Method ////////////////////////////////
    sendPostDataRequest1(url, bodyParams, onSuccess, onFailure) {

          let headers = {
              'Accept': 'application/json',
              'Content-Type': 'multipart/form-data',
          }
          
          console.log("------------API POST REQUEST--------------")
          console.log("URL==>", url)
          // console.log("HEADER==>", headers)
          console.log("BODYPARAMS==>", JSON.stringify(bodyParams))

          let requestOptions = {
              method: 'POST',
              headers: headers,
              body: bodyParams
            };

          fetch(url, requestOptions)
              .then((response) => {
              //    console.log("RESPOSNE==>", JSON.stringify(response))
              return response.json();
                  // const respJson = response.data
                  // console.log("RESPOSNE==>", JSON.stringify(respJson))
                 
              }).then((res) => {
                   console.log("RESPOSNE==>", JSON.stringify(res))
                  if (res.status == true) {
                      onSuccess(res)
                  } else {
                      onFailure(res)
                  }
              }).catch((error) => {
                  console.log("RESPOSNE Error==>", error);
                  onFailure(error)
              })
     
  }
}


