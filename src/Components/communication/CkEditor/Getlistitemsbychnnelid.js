const Getlistitemsbychnnelid = async (listname, id) => {
  const resp = await fetch(
    `/_api/web/lists/GetByTitle('${listname}')/items?$filter=Title eq ${id}&$top=10000&$orderby=ID%20desc`,

    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json; odata=verbose",
      },
    }
  );
  const data = await resp.json();
  console.log("channelIdData", data);
  return data.d;
};
export default Getlistitemsbychnnelid;
