import pino, { transport } from "pino";

const logger = pino({
    transport: {
        target: "pino-pretty",
        options:{
            colorize: true,
            translateTime: 'SYS:yyyy-mm-dd HH:MM;ss',
            ignore: "pid, hostname"
        }
    }
});

logger.info("This is testing");

export default logger;