import Api from "./api";

const CandyServices = {
  index: () => Api.get("/candy"),
};

export default CandyServices;
