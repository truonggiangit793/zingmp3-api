const express = require("express");
const router = express.Router();
const ZingMp3 = require("zingmp3-api-full");

router.get("/", (req, res, next) => {
    res.json({
        response: [
            { path: "/api/v1/play/:id", params: ["id"] },
            { path: "/api/v1/get-playlist-detail/:id", params: ["id"] },
            { path: "/api/v1/get-home", params: ["page"] },
            { path: "/api/v1/get-top-100", params: [] },
            { path: "/api/v1/get-chart-home", params: [] },
            { path: "/api/v1/get-new-realease-chart", params: [] },
            { path: "/api/v1/get-song-info/:id", params: [] },
            { path: "/api/v1/get-artist/:keyword", params: ["keyword"] },
            { path: "/api/v1/get-lyric/:id", params: ["id"] },
            { path: "/api/v1/search/:keyword", params: ["keyword"] },
            { path: "/api/v1/get-list-mv/:id", params: ["id", "page", "count"] },
            { path: "/api/v1/get-category-mv/:id", params: ["id"] },
            { path: "/api/v1/get-video/:id", params: ["id"] },
        ],
    });
});

router.get("/play/:id", async (req, res, next) => {
    const id = req.params.id;
    const data = await ZingMp3.getSong(id);
    res.json(data);
});

router.get("/get-playlist-detail/:id", async (req, res, next) => {
    const id = req.params.id;
    const data = await ZingMp3.getDetailPlaylist(id);
    res.json(data);
});

router.get("/get-home", async (req, res, next) => {
    let page = req.query.page || 1;
    const data = await ZingMp3.getHome(page);
    res.json(data);
});

router.get("/get-list-mv/:id", async (req, res, next) => {
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

router.get("/get-new-realease-chart", async (req, res, next) => {
    const data = await ZingMp3.getNewReleaseChart();
    res.json(data);
});

router.get("/get-song-info/:id", async (req, res, next) => {
    const id = req.params.id;
    const data = await ZingMp3.getInfoSong();
    res.json(data);
});

router.get("/get-lyric/:id", async (req, res, next) => {
    const id = req.params.id;
    const data = await ZingMp3.getLyric(id);
    res.json(data);
});

router.get("/search/:keyword", async (req, res, next) => {
    const keyword = req.params.keyword;
    const data = await ZingMp3.search(keyword);
    res.json(data);
});

router.get("/get-artist/:keyword", async (req, res, next) => {
    const keyword = res.params.keyword;
    const data = await ZingMp3.getArtist(keyword);
    res.json(data);
});

router.get("/get-category-mv/:id", async (req, res, next) => {
    const id = req.params.id;
    const data = await ZingMp3.getCategoryMV(id);
    res.json(data);
});

router.get("/get-video/:id", async (req, res, next) => {
    const id = req.params.id;
    const data = await ZingMp3.getVideo(id);
    res.json(data);
});

module.exports = router;
