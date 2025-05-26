import { handleRequest } from './handler';

export default {
	fetch(request: Request, env: Env) {
		return handleRequest(request,env);
	},
};
