module.exports = {
    start_server: parseBool(process.env.START_SERVER, true),
    app_name: process.env.APP_NAME || 'Michael Wilson',
    env: process.env.NODE_ENV || 'development',
    development: process.env.NODE_ENV !== 'production',
    production: process.env.NODE_ENV === 'production',
    service: process.env.SERVICE || 'mwilson_website',
    host: process.env.HOST || 'https://mwilson.io',
    secret: process.env.SECRET || 'michael',
    sessions_db: process.env.SESSIONS_DB || 'athenian_sessions',
    server_port: process.env.PORT || 7000,
    max_tokens: process.env.MAX_TOKENS || 10,
    token_expiration: process.env.TOKEN_EXPIRATION || 28, // days
    color_dark: process.env.COLOR_DARK || '#5d3e6e',
    color_light: process.env.COLOR_LIGHT || '#fafafa'
};

function parseBool(value, default_value) {
    if (typeof value === 'undefined') {
        return default_value;
    } else {
        return value === 'true';
    }
}
