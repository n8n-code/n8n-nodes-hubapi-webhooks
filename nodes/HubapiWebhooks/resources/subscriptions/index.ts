import type { INodeProperties } from 'n8n-workflow';

export const subscriptionsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					]
				}
			},
			"options": [
				{
					"name": "Get Webhooks v3 App ID Subscriptions Get All",
					"value": "Get Webhooks v3 App ID Subscriptions Get All",
					"action": "Get Webhooks v3 App ID Subscriptions Get All",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/webhooks/v3/{{$parameter[\"appId\"]}}/subscriptions"
						}
					}
				},
				{
					"name": "Post Webhooks v3 App ID Subscriptions Create",
					"value": "Post Webhooks v3 App ID Subscriptions Create",
					"action": "Post Webhooks v3 App ID Subscriptions Create",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/webhooks/v3/{{$parameter[\"appId\"]}}/subscriptions"
						}
					}
				},
				{
					"name": "Post Webhooks v3 App ID Subscriptions Batch Update Update Batch",
					"value": "Post Webhooks v3 App ID Subscriptions Batch Update Update Batch",
					"action": "Post Webhooks v3 App ID Subscriptions Batch Update Update Batch",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/webhooks/v3/{{$parameter[\"appId\"]}}/subscriptions/batch/update"
						}
					}
				},
				{
					"name": "Delete Webhooks v3 App ID Subscriptions Subscription ID Archive",
					"value": "Delete Webhooks v3 App ID Subscriptions Subscription ID Archive",
					"action": "Delete Webhooks v3 App ID Subscriptions Subscription ID Archive",
					"description": "",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/webhooks/v3/{{$parameter[\"appId\"]}}/subscriptions/{{$parameter[\"subscriptionId\"]}}"
						}
					}
				},
				{
					"name": "Get Webhooks v3 App ID Subscriptions Subscription ID Get By ID",
					"value": "Get Webhooks v3 App ID Subscriptions Subscription ID Get By ID",
					"action": "Get Webhooks v3 App ID Subscriptions Subscription ID Get By ID",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/webhooks/v3/{{$parameter[\"appId\"]}}/subscriptions/{{$parameter[\"subscriptionId\"]}}"
						}
					}
				},
				{
					"name": "Patch Webhooks v3 App ID Subscriptions Subscription ID Update",
					"value": "Patch Webhooks v3 App ID Subscriptions Subscription ID Update",
					"action": "Patch Webhooks v3 App ID Subscriptions Subscription ID Update",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/webhooks/v3/{{$parameter[\"appId\"]}}/subscriptions/{{$parameter[\"subscriptionId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /webhooks/v3/{appId}/subscriptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Get Webhooks v3 App ID Subscriptions Get All"
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
						"Subscriptions"
					],
					"operation": [
						"Get Webhooks v3 App ID Subscriptions Get All"
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
						"Subscriptions"
					],
					"operation": [
						"Get Webhooks v3 App ID Subscriptions Get All"
					]
				}
			}
		},
		{
			"displayName": "POST /webhooks/v3/{appId}/subscriptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Post Webhooks v3 App ID Subscriptions Create"
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
						"Subscriptions"
					],
					"operation": [
						"Post Webhooks v3 App ID Subscriptions Create"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
			"description": "Determines if the subscription is active or paused. Defaults to false.",
			"routing": {
				"send": {
					"property": "active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Post Webhooks v3 App ID Subscriptions Create"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Event Type",
			"name": "eventType",
			"type": "options",
			"default": "contact.propertyChange",
			"description": "Type of event to listen for. Can be one of `create`, `delete`, `deletedForPrivacy`, or `propertyChange`.",
			"options": [
				{
					"name": "Contact Property Change",
					"value": "contact.propertyChange"
				},
				{
					"name": "Company Property Change",
					"value": "company.propertyChange"
				},
				{
					"name": "Deal Property Change",
					"value": "deal.propertyChange"
				},
				{
					"name": "Ticket Property Change",
					"value": "ticket.propertyChange"
				},
				{
					"name": "Product Property Change",
					"value": "product.propertyChange"
				},
				{
					"name": "Line Item Property Change",
					"value": "line_item.propertyChange"
				},
				{
					"name": "Contact Creation",
					"value": "contact.creation"
				},
				{
					"name": "Contact Deletion",
					"value": "contact.deletion"
				},
				{
					"name": "Contact Privacy Deletion",
					"value": "contact.privacyDeletion"
				},
				{
					"name": "Company Creation",
					"value": "company.creation"
				},
				{
					"name": "Company Deletion",
					"value": "company.deletion"
				},
				{
					"name": "Deal Creation",
					"value": "deal.creation"
				},
				{
					"name": "Deal Deletion",
					"value": "deal.deletion"
				},
				{
					"name": "Ticket Creation",
					"value": "ticket.creation"
				},
				{
					"name": "Ticket Deletion",
					"value": "ticket.deletion"
				},
				{
					"name": "Product Creation",
					"value": "product.creation"
				},
				{
					"name": "Product Deletion",
					"value": "product.deletion"
				},
				{
					"name": "Line Item Creation",
					"value": "line_item.creation"
				},
				{
					"name": "Line Item Deletion",
					"value": "line_item.deletion"
				},
				{
					"name": "Conversation Creation",
					"value": "conversation.creation"
				},
				{
					"name": "Conversation Deletion",
					"value": "conversation.deletion"
				},
				{
					"name": "Conversation New Message",
					"value": "conversation.newMessage"
				},
				{
					"name": "Conversation Privacy Deletion",
					"value": "conversation.privacyDeletion"
				},
				{
					"name": "Conversation Property Change",
					"value": "conversation.propertyChange"
				}
			],
			"routing": {
				"send": {
					"property": "eventType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Post Webhooks v3 App ID Subscriptions Create"
					]
				}
			}
		},
		{
			"displayName": "Property Name",
			"name": "propertyName",
			"type": "string",
			"default": "",
			"description": "The internal name of the property to monitor for changes. Only applies when `eventType` is `propertyChange`.",
			"routing": {
				"send": {
					"property": "propertyName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Post Webhooks v3 App ID Subscriptions Create"
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
						"Subscriptions"
					],
					"operation": [
						"Post Webhooks v3 App ID Subscriptions Create"
					]
				}
			}
		},
		{
			"displayName": "POST /webhooks/v3/{appId}/subscriptions/batch/update",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Post Webhooks v3 App ID Subscriptions Batch Update Update Batch"
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
						"Subscriptions"
					],
					"operation": [
						"Post Webhooks v3 App ID Subscriptions Batch Update Update Batch"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Inputs",
			"name": "inputs",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "inputs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Post Webhooks v3 App ID Subscriptions Batch Update Update Batch"
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
						"Subscriptions"
					],
					"operation": [
						"Post Webhooks v3 App ID Subscriptions Batch Update Update Batch"
					]
				}
			}
		},
		{
			"displayName": "DELETE /webhooks/v3/{appId}/subscriptions/{subscriptionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Delete Webhooks v3 App ID Subscriptions Subscription ID Archive"
					]
				}
			}
		},
		{
			"displayName": "Subscription ID",
			"name": "subscriptionId",
			"required": true,
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Delete Webhooks v3 App ID Subscriptions Subscription ID Archive"
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
						"Subscriptions"
					],
					"operation": [
						"Delete Webhooks v3 App ID Subscriptions Subscription ID Archive"
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
						"Subscriptions"
					],
					"operation": [
						"Delete Webhooks v3 App ID Subscriptions Subscription ID Archive"
					]
				}
			}
		},
		{
			"displayName": "GET /webhooks/v3/{appId}/subscriptions/{subscriptionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Get Webhooks v3 App ID Subscriptions Subscription ID Get By ID"
					]
				}
			}
		},
		{
			"displayName": "Subscription ID",
			"name": "subscriptionId",
			"required": true,
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Get Webhooks v3 App ID Subscriptions Subscription ID Get By ID"
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
						"Subscriptions"
					],
					"operation": [
						"Get Webhooks v3 App ID Subscriptions Subscription ID Get By ID"
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
						"Subscriptions"
					],
					"operation": [
						"Get Webhooks v3 App ID Subscriptions Subscription ID Get By ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /webhooks/v3/{appId}/subscriptions/{subscriptionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Patch Webhooks v3 App ID Subscriptions Subscription ID Update"
					]
				}
			}
		},
		{
			"displayName": "Subscription ID",
			"name": "subscriptionId",
			"required": true,
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Patch Webhooks v3 App ID Subscriptions Subscription ID Update"
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
						"Subscriptions"
					],
					"operation": [
						"Patch Webhooks v3 App ID Subscriptions Subscription ID Update"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
			"description": "Determines if the subscription is active or paused.",
			"routing": {
				"send": {
					"property": "active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"Patch Webhooks v3 App ID Subscriptions Subscription ID Update"
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
						"Subscriptions"
					],
					"operation": [
						"Patch Webhooks v3 App ID Subscriptions Subscription ID Update"
					]
				}
			}
		},
];
