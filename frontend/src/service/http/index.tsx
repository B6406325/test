import { MemberInterface } from "../../interface/Idata";
const apiUrl = "http://localhost:8080";

async function CreateMember(data: MemberInterface) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      let res = await fetch(`${apiUrl}/member`, requestOptions)
        .then((response) => response.json())
        .then((res) => {
          if (res.data) {
            return { status: true, message: res.data };
          } else {
            return { status: false, message: res.error };
          }
        });
      return res;
}

async function ListUsers(data: MemberInterface) {
  console.log("Data sent to ListUsers:", data.Username);
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let res = await fetch(
    `${apiUrl}/member/${data.Username}/${data.Password}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return { status: true, message: res.data };
      } else {
        return { status: false, message: res.error };
      }
    });
  console.log(res);
  return res;
}

export{
    CreateMember,
    ListUsers,
}