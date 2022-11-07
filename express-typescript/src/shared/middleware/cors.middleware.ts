import cors from "cors";
import configVar from "../config/configVar";

export const optionsCors: cors.CorsOptions = {
  allowedHeaders: configVar.allowedHeaders,
  origin: configVar.allowedOrigins,
  methods: configVar.methods,
};
