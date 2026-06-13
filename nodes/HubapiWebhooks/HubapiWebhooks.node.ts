import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { settingsDescription } from './resources/settings';
import { subscriptionsDescription } from './resources/subscriptions';

export class HubapiWebhooks implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Hubapi Webhooks',
                name: 'N8nDevHubapiWebhooks',
                icon: { light: 'file:./hubapi-webhooks.png', dark: 'file:./hubapi-webhooks.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Subscribes apps to HubSpot change events, delivering payloads to a target URL.',
                defaults: { name: 'Hubapi Webhooks' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevHubapiWebhooksApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Settings",
					"value": "Settings",
					"description": "Operations to manage app-level webhook settings."
				},
				{
					"name": "Subscriptions",
					"value": "Subscriptions",
					"description": "Operations to manage event subscriptions."
				}
			],
			"default": ""
		},
		...settingsDescription,
		...subscriptionsDescription
                ],
        };
}
