declare module 'sse.js' {
	export type SSEOptions = EventSourceInit & {
		headers?: Record<string, string>;
		payload?: string;
		method?: string;
	};

	export class SEE extends EventSource {
		constructor(url: string | URL, sseOptions?: SSEOptions);
		stream(): void;
	}
}
