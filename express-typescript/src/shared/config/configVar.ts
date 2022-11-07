export default {
  tokenKey: "APIKEYTOKENSECURITY",
  allowedOrigins: "http://localhost:3000",
  methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
  ],
};
