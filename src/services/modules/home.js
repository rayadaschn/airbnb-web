import service from "../index";

export function getHomeGoodPriceData() {
  return service.get({
    url: "home/goodprice",
  });
}
