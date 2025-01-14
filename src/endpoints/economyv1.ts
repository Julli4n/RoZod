import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Web_Responses_Economy_CurrencyResponse = z.object({ robux: z.number().int() }).passthrough();

const schemas = {
  Roblox_Web_Responses_Economy_CurrencyResponse,
};

/**
 * @api GET https://economy.roblox.com/v1/user/currency
 * @summary Gets currency for the authenticated user.
 * @description Currency can only be retrieved for the authenticated user.
 */
export const getUserCurrency = endpoint({
  method: 'get' as const,
  path: '/v1/user/currency',
  baseUrl: 'https://economy.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ robux: z.number().int() }).passthrough(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `1: The user is invalid.`,
    },
  ],
});
