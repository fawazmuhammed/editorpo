const Getlistitemsbychnnelid = async (listname) => {
  const resp = await fetch(
    `https://resembleae.sharepoint.com/sites/DMSDemo/_api/web/lists/GetByTitle('${listname}')/items?$top=10000&$orderby=ID desc`,

    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json; odata=verbose",
      },
    }
  );
  const data = await resp.json();
  console.log("Data", data);
  return data.d;
};
export default Getlistitemsbychnnelid;
