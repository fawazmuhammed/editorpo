const UpdateListItem = async (listname, id, digest, item) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json; odata=verbose",
      "X-RequestDigest": digest,
      "IF-MATCH": "*", //Overrite the changes in the sharepoint list item
      "X-HTTP-Method": "MERGE",
      credentials: "same-origin",
    },
    body: JSON.stringify(item),
  };
  console.log("request", requestOptions);
  const resp = await fetch(
    `/_api/web/lists/GetByTitle('${listname}')/items(${id})`,
    requestOptions
  );
  //const data = await resp.json();
  //console.log("The created employee is",data);
  //return data.d;
};
export default UpdateListItem;
