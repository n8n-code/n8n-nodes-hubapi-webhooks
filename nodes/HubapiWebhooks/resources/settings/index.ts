import type { INodeProperties } from 'n8n-workflow';

export const settingsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					]
				}
			},
			"options": [
				{
					"name": "Delete Webhooks v3 App ID Settings Clear",
					"value": "Delete Webhooks v3 App ID Settings Clear",
					"action": "Delete Webhooks v3 App ID Settings Clear",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/webhooks/v3/{{$parameter[\"appId\"]}}/settings"
						}
					}
				},
				{
					"name": "Get Webhooks v3 App ID Settings Get All",
					"value": "Get Webhooks v3 App ID Settings Get All",
					"action": "Get Webhooks v3 App ID Settings Get All",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/webhooks/v3/{{$parameter[\"appId\"]}}/settings"
						}
					}
				},
				{
					"name": "Put Webhooks v3 App ID Settings Configure",
					"value": "Put Webhooks v3 App ID Settings Configure",
					"action": "Put Webhooks v3 App ID Settings Configure",
					"description": "",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/webhooks/v3/{{$parameter[\"appId\"]}}/settings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /webhooks/v3/{appId}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Delete Webhooks v3 App ID Settings Clear"
					]
				}
			}
		},
		{
			"displayName": "App ID",
			"name": "appId",
			"required": true,
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Delete Webhooks v3 App ID Settings Clear"
					]
				}
			}
		},
		{
			"displayName": "Hapikey",
			"name": "security_developer_hapikey",
			"type": "string",
			"default": "",
			"description": "API key for developer_hapikey (query: hapikey)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "hapikey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Delete Webhooks v3 App ID Settings Clear"
					]
				}
			}
		},
		{
			"displayName": "GET /webhooks/v3/{appId}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Get Webhooks v3 App ID Settings Get All"
					]
				}
			}
		},
		{
			"displayName": "App ID",
			"name": "appId",
			"required": true,
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Get Webhooks v3 App ID Settings Get All"
					]
				}
			}
		},
		{
			"displayName": "Hapikey",
			"name": "security_developer_hapikey",
			"type": "string",
			"default": "",
			"description": "API key for developer_hapikey (query: hapikey)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "hapikey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Get Webhooks v3 App ID Settings Get All"
					]
				}
			}
		},
		{
			"displayName": "PUT /webhooks/v3/{appId}/settings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Put Webhooks v3 App ID Settings Configure"
					]
				}
			}
		},
		{
			"displayName": "App ID",
			"name": "appId",
			"required": true,
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Put Webhooks v3 App ID Settings Configure"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Target URL",
			"name": "targetUrl",
			"type": "string",
			"default": "",
			"description": "A publicly available URL for Hubspot to call where event payloads will be delivered. See [link-so-some-doc](#) for details about the format of these event payloads.",
			"routing": {
				"send": {
					"property": "targetUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Put Webhooks v3 App ID Settings Configure"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Throttling",
			"name": "throttling",
			"type": "json",
			"default": "{}",
			"description": "Configuration details for webhook throttling.",
			"routing": {
				"send": {
					"property": "throttling",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Put Webhooks v3 App ID Settings Configure"
					]
				}
			}
		},
		{
			"displayName": "Hapikey",
			"name": "security_developer_hapikey",
			"type": "string",
			"default": "",
			"description": "API key for developer_hapikey (query: hapikey)",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "hapikey",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings"
					],
					"operation": [
						"Put Webhooks v3 App ID Settings Configure"
					]
				}
			}
		},
];
