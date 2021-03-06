const express = require("express");
const router = express.Router();
const ZingMp3 = require("zingmp3-api-full");

router.get("/", (req, res, next) => {
  res.json({
    response: [
      { path: "/api/v1/audio/stream/ZWA7UB8U", params: ["id"] },
      { path: "/api/v1/playlist-detail/67OAAOCF", params: ["id"] },
      { path: "/api/v1/get-home", params: ["page"] },
      { path: "/api/v1/get-top-100", params: [] },
      { path: "/api/v1/get-chart-home", params: [] },
      { path: "/api/v1/new-release-chart", params: [] },
      { path: "/api/v1/song-detail/ZWA7UB8U", params: [] },
      { path: "/api/v1/nghe-si/Khoa", params: ["keyword"] },
      { path: "/api/v1/lyric/ZWA7UB8U", params: ["id"] },
      { path: "/api/v1/search/Tet-Dong-Day", params: ["keyword"] },
      { path: "/api/v1/playlist-mv/67OAAOCF", params: ["id", "page", "count"] },
      { path: "/api/v1/category-mv/67OAAOCF", params: ["id"] },
      { path: "/api/v1/video/stream/67OAAOCF/", params: ["id"] },
    ],
  });
});

router.get("/audio/stream/:id", async (req, res, next) => {
  const id = req.params.id;
  const data = await ZingMp3.getSong(id);
  res.json(data);
});

router.get("/playlist-detail/:id", async (req, res, next) => {
  const id = req.params.id;
  const data = await ZingMp3.getDetailPlaylist(id);
  res.json(data);
});

router.get("/get-home", async (req, res, next) => {
  let page = req.query.page || 1;
  const data = await ZingMp3.getHome(page);
  res.json(data);
});

router.get("/playlist-mv/:id", async (req, res, next) => {
  const id = req.params.id;
  let page = req.query.page || 1;
  let count = req.query.count || 15;
  const data = await ZingMp3.getListMV(id, page, count);
  res.json(data);
});

router.get("/get-top-100", async (req, res, next) => {
  const data = await ZingMp3.getTop100();
  res.json(data);
});

router.get("/get-chart-home", async (req, res, next) => {
  const data = await ZingMp3.getChartHome();
  res.json(data);
});

router.get("/new-release-chart", async (req, res, next) => {
  const data = await ZingMp3.getNewReleaseChart();
  res.json(data);
});

router.get("/song-detail/:id", async (req, res, next) => {
  const id = req.params.id;
  const data = await ZingMp3.getInfoSong();
  res.json(data);
});

router.get("/lyric/:id", async (req, res, next) => {
  const id = req.params.id;
  const data = await ZingMp3.getLyric(id);
  res.json(data);
});

router.get("/search/:keyword", async (req, res, next) => {
  const keyword = req.params.keyword;
  const data = await ZingMp3.search(keyword);
  res.json(data);
});

router.get("/nghe-si/:keyword", async (req, res, next) => {
  const keyword = req.params.keyword;
  const data = await ZingMp3.getArtist(keyword);
  res.json(data);
});

router.get("/category-mv/:id", async (req, res, next) => {
  const id = req.params.id;
  const data = await ZingMp3.getCategoryMV(id);
  res.json(data);
});

router.get("/video/stream/:id", async (req, res, next) => {
  const id = req.params.id;
  const data = await ZingMp3.getVideo(id);
  res.json(data);
});

module.exports = router;
