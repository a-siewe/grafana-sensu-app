/*

 */

function getClientsURIs(checkNames, clientNames) {
  var uris = [];
  var dimensionURI = "/clients";
  // look for clientName in dimensions
  if (clientNames.length) {
    for (let i = 0; i < clientNames.length; i++) {
      var aClientName = clientNames[i];
      dimensionURI = "/clients/" + aClientName;
      uris.push(dimensionURI);
    }
  }
  if (uris.length === 0) {
    uris.push(dimensionURI);
  }
  uris.push("/events");
  uris.push("/results");

  return uris;
}

/**
 * [getClientHealthURIs description]
 * @param  {[type]} clientNames [description]
 * @return {[type]}             [description]
 */
function getClientHealthURIs(clientNames) {
  var uris = [];
  // look for clientName in dimensions
  if (clientNames.length) {
    for (let i = 0; i < clientNames.length; i++) {
      var aClientName = clientNames[i];
      var resultsURI = "/results/" + aClientName;
      uris.push(resultsURI);
      var eventsURI = "/events/" + aClientName;
      uris.push(eventsURI);
    }
  }
  if (uris.length === 0) {
    uris.push("/results");
    uris.push("/events");
  }
  return uris;
}

/**
 * [getClientHistoryURIs description]
 * @param  {[type]} clientNames [description]
 * @return {[type]}             [description]
 */
function getClientHistoryURIs(clientNames) {
  var uris = [];
  var dimensionURI = "/clients";
  // look for clientName in dimensions
  if (clientNames.length) {
    for (let i = 0; i < clientNames.length; i++) {
      let aClientName = clientNames[i];
      dimensionURI = "/clients/" + aClientName + "/history";
      uris.push(dimensionURI);
    }
  }
  if (uris.length === 0) {
    uris.push(dimensionURI);
  }
  return uris;
}

export {
  getClientsURIs,
  getClientHealthURIs,
  getClientHistoryURIs
};
