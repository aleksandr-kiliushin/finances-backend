const mapModeToEnabledCorsOrigin = {
  dev: `http://localhost:${process.env.FRONTEND_PORT}`,
}

export const enabledCorsOrigin = mapModeToEnabledCorsOrigin[process.env.MODE]
