// just a base logger for now
const logger = value => console.log(value)
logger.e = value => console.error(value)

export default logger
