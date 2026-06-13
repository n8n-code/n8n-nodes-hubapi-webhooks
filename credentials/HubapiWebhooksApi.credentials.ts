import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class HubapiWebhooksApi implements ICredentialType {
        name = 'N8nDevHubapiWebhooksApi';

        displayName = 'Hubapi Webhooks API';

        icon: Icon = { light: 'file:../nodes/HubapiWebhooks/hubapi-webhooks.png', dark: 'file:../nodes/HubapiWebhooks/hubapi-webhooks.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.hubapi.com/',
                        required: true,
                        placeholder: 'https://api.hubapi.com/',
                        description: 'The base URL of your Hubapi Webhooks API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'hapikey': '={{$credentials.apiKey}}',
                        },
                },
        };


}
