import openai from '$lib/openai';
('');
export const gptFunction = async (prompt) => {
	const comicDetection = await openai.chat.completions.create({
		model: 'gpt-4-vision-preview',
		max_tokens: 300,
		temperature: 0.2,
		messages: [
			{
				role: 'system',
				content:
					'You are a comic book store owner, answer breifly but provide context about what is on the cover, including the title and issue number, and any type of story arc, crossover, etc'
			},
			{
				role: 'user',
				content: [
					{
						type: 'text',
						text: 'What is this comic book? Please provide the name and issue number'
					},
					{
						type: 'image_url',
						image_url: {
							// url: 'https://i5.walmartimages.com/seo/Amazing-Spider-Man-300-Facsimile-Edition_ac7746a7-2dc6-427e-b44a-bf84e332f70a.0a8f096a61079e69f89b0c166cd58231.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF'
							url: 'https://m.media-amazon.com/images/I/51vJSf0aGIL.jpg',
							detail: 'low'
						}
					}
				]
			}
		]
	});

	const comicPrediction = comicDetection.choices[0].message;
	console.log(comicPrediction);

	const response = await openai.chat.completions.create({
		model: 'gpt-4-1106-preview',
		messages: [
			{
				role: 'system',
				content:
					'You are a comic book store owner, please provide info about the comic book like publisher, issue number, and date published, as well as any additional context about the story or important character introductions'
			},
			{
				role: 'user',
				content: comicPrediction.content
			}
		],
		tools: [
			{
				type: 'function',
				function: {
					name: 'get_comic_info',
					description: 'Returns a JSON compatible object with information about the comic book',
					parameters: {
						type: 'object',
						properties: {
							title: {
								type: 'string',
								description: 'The title of the comic book'
							},
							issue: {
								type: 'string',
								description: 'The issue number of the comic book'
							},
							publisher: {
								type: 'string',
								description: 'The publisher of the comic book'
							},
							publish_date: {
								type: 'string',
								description: 'The date the comic book was published'
							},
							notes: {
								type: 'string',
								description: 'The interesting notes or relevant information about the comic book'
							}
						},
						required: ['title', 'issue', 'publisher', 'publish_date', 'notes']
					}
				}
			}
		]
	});

	console.log(response.choices[0].message.tool_calls[0]);

	return response.choices[0];
};
