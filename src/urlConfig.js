// const baseUrl = process.env.API || "https://"
// const baseUrl = "http://localhost:6969";
// const baseUrl = "https://mobilelemanh.herokuapp.com";
const baseUrl = "http://be1.tranlan.tk";


export const api = `${baseUrl}/api`;

export const generatePublicUrl = (filename) => {
  return `${baseUrl}/public/${filename}`;
};

