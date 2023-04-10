import service from "../index";

export function getHomeGoodPriceData() {
  return service.get({
    url: "home/goodprice",
  });
}

export function getHomeHighScoreData() {
  return service.get({
    url: "/home/highscore",
  });
}

export function getHomeDiscountData() {
  return service.get({
    url: "/home/discount",
  });
}

export function getHomeHotRecommendData() {
  return service.get({
    url: "/home/hotrecommenddest",
  });
}

export function getHomeLongforData() {
  return service.get({
    url: "/home/longfor",
  });
}

export function getHomePlusData() {
  return service.get({
    url: "/home/plus",
  });
}
