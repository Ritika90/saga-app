import APIInstance from "providers/api-instance";

const handleCatch = (errorInfo) => {
  console.log("*** There was a server error!");
  console.log(errorInfo);
  console.log("***");
};

const handleFinally = (showLoader, isLoaderAutoOff) => {
  console.log("Handle Your Condition");
};

// Common method for all get calls
export const doGet = async ({ url }) => {
  return APIInstance.get(url)
    .catch((errorInfo) => handleCatch(errorInfo))
    .finally(() => handleFinally());
};
