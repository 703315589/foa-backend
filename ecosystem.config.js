module.exports = {
  apps: [
    {
      name: "foa-backend",
      script: "./server.js",
      instances: 1,
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 5000
      }
    }
  ]
}