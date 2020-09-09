const GetAllUsers = async () => {
  const resp = await fetch(`/apps/memo/_api/web/siteusers`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json; odata=verbose",
    },
  });
  const data = await resp.json();
  // console.log("Current logged in user", data.d);
  return data.d;
};
export default GetAllUsers;
