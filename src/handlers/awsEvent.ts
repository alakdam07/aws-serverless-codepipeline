import { Response } from '../utils/lambda-response'
import runWarm from '../utils/run-warm'


/**
 *
 */
export async function awsEvent(event: AWSLambda.APIGatewayEvent): Promise<Response> {

  try {
    return {
      statusCode: 200,
      body: JSON.stringify(event),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
}

export default runWarm(awsEvent)
