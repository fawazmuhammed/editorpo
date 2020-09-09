const DeleteListItem = async (listname, id, digest) => {
  const requestOptions = {
    method: "POST",
    headers: {
      accept: "application/json;odata=verbose",
      "content-type": "application/json;odata=verbose",
      "X-RequestDigest": digest,
      "IF-MATCH": "*",
      "X-HTTP-Method": "DELETE",
      credentials: "same-origin",
    },
    success: function (data) {
      alert("success");
    },
    error: function (data) {
      alert("failed");
    },

    //body: JSON.stringify(item),
  };
  console.log("deleterequest", requestOptions);
  const resp = await fetch(
    `/_api/web/lists/GetByTitle('ckeditor')/items(${id})`,
    requestOptions
  );
  console.log("resp", resp);
  //const data = await resp.json();
  //console.log("The created employee is",data);
  //return data.d;
};
export default DeleteListItem;
