const mapModeToEnabledCorsOrigin = {
  dev: `http://localhost:${process.env.FRONTEND_PORT}`,
}

const enabledCorsOrigin = mapModeToEnabledCorsOrigin[process.env.MODE]

const corsConfig = {
  origin: enabledCorsOrigin,
}

export default corsConfig
