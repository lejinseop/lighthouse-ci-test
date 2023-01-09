module.exports = {
  "ci": {
    "collect": {
      "startServerCommand": "yarn start",
      "startServerReadyPattern": "ready on",
      "url": [
        "http://localhost:3000"
      ],
      "numberOfRuns": 1,
      "settings": {
        "preset": "desktop"
      }
    },
    "upload": {
      "startServerCommand": "yarn start",
      "target": "temporary-public-storage"
    }
  }
}
