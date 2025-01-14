import { z } from 'zod';
import { endpoint } from '..';

const Roblox_AccountSettings_Api_Models_AccountsSettingsMetadataModel = z
  .object({
    IsAccountsRestrictionsSpamBugFixEnabled: z.boolean(),
    MaximumParentalControlsMonthlySpendLimitInUSD: z.number().int(),
    IsParentalMonthlyLimitInUIEnabled: z.boolean(),
    IsParentalNotificationSettingsInUIEnabled: z.boolean(),
    IsContentControlsEnabled: z.boolean(),
  })
  .passthrough();
const Roblox_AccountSettings_Api_AppChatPrivacyResponse = z.object({ appChatPrivacy: z.string() }).passthrough();
const Roblox_AccountSettings_Api_AppChatPrivacyRequest = z
  .object({
    appChatPrivacy: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6)]),
  })
  .passthrough();
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({}).passthrough();
const Roblox_AccountSettings_Api_EmailResponse = z
  .object({
    emailAddress: z.string(),
    verified: z.boolean(),
    canBypassPasswordForEmailUpdate: z.boolean(),
  })
  .passthrough();
const Roblox_AccountSettings_Api_UpdateEmailRequest = z
  .object({
    password: z.string(),
    emailAddress: z.string(),
    skipVerificationEmail: z.boolean(),
    isAdsAccount: z.boolean(),
  })
  .passthrough();
const Roblox_AccountSettings_Api_GameChatPrivacyResponse = z.object({ gameChatPrivacy: z.string() }).passthrough();
const Roblox_AccountSettings_Api_GameChatPrivacyRequest = z
  .object({
    gameChatPrivacy: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6)]),
  })
  .passthrough();
const Roblox_AccountSettings_Api_InventoryPrivacyResponse = z
  .object({
    inventoryPrivacy: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6)]),
  })
  .passthrough();
const Roblox_AccountSettings_Api_InventoryPrivacyRequest = z
  .object({
    inventoryPrivacy: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6)]),
  })
  .passthrough();
const Roblox_AccountSettings_Api_InventoryPrivacyUpdateResponse = z
  .object({
    inventoryPrivacy: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6)]),
    tradePrivacy: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
      z.literal(6),
      z.literal(7),
    ]),
    privacySettingResponse: z.union([z.literal(0), z.literal(1)]),
  })
  .passthrough();
const Roblox_AccountSettings_Api_PrivateMessagePrivacyResponse = z
  .object({ privateMessagePrivacy: z.string() })
  .passthrough();
const Roblox_AccountSettings_Api_PrivateMessagePrivacyRequest = z
  .object({ privateMessagePrivacy: z.string() })
  .passthrough();
const Roblox_AccountSettings_Api_ThemeConfigurationResponse = z.object({ themeType: z.string() }).passthrough();
const Roblox_AccountSettings_Api_ThemeConfigurationRequest = z.object({ themeType: z.string() }).passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_System_String_ = z.object({ data: z.array(z.string()) }).passthrough();
const Roblox_AccountSettings_Api_TradePrivacyResponse = z.object({ tradePrivacy: z.string() }).passthrough();
const Roblox_AccountSettings_Api_UpdateTradePrivacyRequest = z
  .object({
    tradePrivacy: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
      z.literal(6),
      z.literal(7),
    ]),
  })
  .passthrough();
const Roblox_AccountSettings_Api_TradePrivacyUpdateResponse = z
  .object({
    tradePrivacy: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
      z.literal(6),
      z.literal(7),
    ]),
    inventoryPrivacy: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6)]),
    privacySettingResponse: z.union([z.literal(0), z.literal(1)]),
  })
  .passthrough();
const Roblox_AccountSettings_Api_TradeValueResponse = z.object({ tradeValue: z.string() }).passthrough();
const Roblox_AccountSettings_Api_TradeValueRequest = z
  .object({
    tradeValue: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  })
  .passthrough();
const Roblox_AccountSettings_Api_Models_Response_GetBlockedUsersResponse = z
  .object({ blockedUserIds: z.array(z.number()) })
  .passthrough();
const Roblox_AccountSettings_Api_Models_BlockedUser = z
  .object({
    userId: z.number().int(),
    name: z.string(),
    displayName: z.string(),
  })
  .passthrough();
const Roblox_AccountSettings_Api_Models_Response_GetDetailedBlockedUsersResponse = z
  .object({
    blockedUsers: z.array(Roblox_AccountSettings_Api_Models_BlockedUser),
    maxBlockedUsers: z.number().int(),
    total: z.number().int(),
  })
  .passthrough();
const Roblox_AccountSettings_Api_SendVerifyEmailRequest = z
  .object({ freeItem: z.boolean(), isAdsAccount: z.boolean() })
  .passthrough();

const schemas = {
  Roblox_AccountSettings_Api_Models_AccountsSettingsMetadataModel,
  Roblox_AccountSettings_Api_AppChatPrivacyResponse,
  Roblox_AccountSettings_Api_AppChatPrivacyRequest,
  Roblox_Web_WebAPI_ApiEmptyResponseModel,
  Roblox_AccountSettings_Api_EmailResponse,
  Roblox_AccountSettings_Api_UpdateEmailRequest,
  Roblox_AccountSettings_Api_GameChatPrivacyResponse,
  Roblox_AccountSettings_Api_GameChatPrivacyRequest,
  Roblox_AccountSettings_Api_InventoryPrivacyResponse,
  Roblox_AccountSettings_Api_InventoryPrivacyRequest,
  Roblox_AccountSettings_Api_InventoryPrivacyUpdateResponse,
  Roblox_AccountSettings_Api_PrivateMessagePrivacyResponse,
  Roblox_AccountSettings_Api_PrivateMessagePrivacyRequest,
  Roblox_AccountSettings_Api_ThemeConfigurationResponse,
  Roblox_AccountSettings_Api_ThemeConfigurationRequest,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_System_String_,
  Roblox_AccountSettings_Api_TradePrivacyResponse,
  Roblox_AccountSettings_Api_UpdateTradePrivacyRequest,
  Roblox_AccountSettings_Api_TradePrivacyUpdateResponse,
  Roblox_AccountSettings_Api_TradeValueResponse,
  Roblox_AccountSettings_Api_TradeValueRequest,
  Roblox_AccountSettings_Api_Models_Response_GetBlockedUsersResponse,
  Roblox_AccountSettings_Api_Models_BlockedUser,
  Roblox_AccountSettings_Api_Models_Response_GetDetailedBlockedUsersResponse,
  Roblox_AccountSettings_Api_SendVerifyEmailRequest,
};

/**
 * @api GET https://accountsettings.roblox.com/v1/account/settings/metadata
 * @summary Returns metadata used by the accountsettings page
 */
export const getAccountSettingsMetadata = endpoint({
  method: 'get' as const,
  path: '/v1/account/settings/metadata',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_AccountSettings_Api_Models_AccountsSettingsMetadataModel,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://accountsettings.roblox.com/v1/app-chat-privacy
 * @summary Get a user's app chat privacy setting
 */
export const getAppChatPrivacy = endpoint({
  method: 'get' as const,
  path: '/v1/app-chat-privacy',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ appChatPrivacy: z.string() }).passthrough(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://accountsettings.roblox.com/v1/app-chat-privacy
 * @summary Updates a user's app chat privacy setting
 * @param body
 */
export const postAppChatPrivacy = endpoint({
  method: 'post' as const,
  path: '/v1/app-chat-privacy',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_AccountSettings_Api_AppChatPrivacyRequest,
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `Roblox.AccountSettings.Api.ResponseEnums.ContactSettingsErrors.InvalidSettingOption`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `Roblox.AccountSettings.Api.ResponseEnums.ContactSettingsErrors.AccountLocked
            OR
            Roblox.AccountSettings.Api.ResponseEnums.ContactSettingsErrors.SettingLockedCuratedGamesEnabled
0: Token Validation Failed`,
    },
  ],
});
/**
 * @api GET https://accountsettings.roblox.com/v1/email
 * @summary Gets the authenticated user's email address and verified status
 */
export const getEmail = endpoint({
  method: 'get' as const,
  path: '/v1/email',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_AccountSettings_Api_EmailResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://accountsettings.roblox.com/v1/email
 * @summary Updates the authenticated user's email address
 * @param body The request body.
 */
export const postEmail = endpoint({
  method: 'post' as const,
  path: '/v1/email',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_AccountSettings_Api_UpdateEmailRequest,
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `8: Password is incorrect.
9: Invalid email address.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
1: PIN is locked.
3: There are too many accounts associated with this email address.
11: You must be on the Corporate network to log in.`,
    },
    {
      status: 409,
      description: `4: This is already the current email.`,
    },
    {
      status: 429,
      description: `6: Too many attempts to update email. Please try again later.
7: Too many attempts to send verification email. Please try again later.`,
    },
    {
      status: 503,
      description: `2: This feature is currently disabled. Please try again later.`,
    },
  ],
});
/**
 * @api PATCH https://accountsettings.roblox.com/v1/email
 * @summary Updates the authenticated user's email address
 * @param body The request body.
 */
export const patchEmail = endpoint({
  method: 'patch' as const,
  path: '/v1/email',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_AccountSettings_Api_UpdateEmailRequest,
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `8: Password is incorrect.
9: Invalid email address.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
1: PIN is locked.
3: There are too many accounts associated with this email address.
11: You must be on the Corporate network to log in.`,
    },
    {
      status: 409,
      description: `4: This is already the current email.`,
    },
    {
      status: 429,
      description: `6: Too many attempts to update email. Please try again later.
7: Too many attempts to send verification email. Please try again later.`,
    },
    {
      status: 503,
      description: `2: This feature is currently disabled. Please try again later.`,
    },
  ],
});
/**
 * @api POST https://accountsettings.roblox.com/v1/email/verify
 * @summary Send verify email to the authenticated user's email address
 * @param body The request body.
 */
export const postEmailVerify = endpoint({
  method: 'post' as const,
  path: '/v1/email/verify',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_AccountSettings_Api_SendVerifyEmailRequest.optional(),
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `10: No email address is associated with the account.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
1: PIN is locked.
11: You must be on the Corporate network to log in.`,
    },
    {
      status: 409,
      description: `5: The email is already verified.`,
    },
    {
      status: 429,
      description: `7: Too many attempts to send verification email. Please try again later.`,
    },
    {
      status: 503,
      description: `2: This feature is currently disabled. Please try again later.`,
    },
  ],
});
/**
 * @api GET https://accountsettings.roblox.com/v1/game-chat-privacy
 * @summary Get a user's game chat privacy setting
 */
export const getGameChatPrivacy = endpoint({
  method: 'get' as const,
  path: '/v1/game-chat-privacy',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ gameChatPrivacy: z.string() }).passthrough(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://accountsettings.roblox.com/v1/game-chat-privacy
 * @summary Updates a user's game chat privacy setting
 * @param body
 */
export const postGameChatPrivacy = endpoint({
  method: 'post' as const,
  path: '/v1/game-chat-privacy',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_AccountSettings_Api_GameChatPrivacyRequest,
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `Roblox.AccountSettings.Api.ResponseEnums.ContactSettingsErrors.InvalidSettingOption`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `Roblox.AccountSettings.Api.ResponseEnums.ContactSettingsErrors.AccountLocked
            OR
            Roblox.AccountSettings.Api.ResponseEnums.ContactSettingsErrors.SettingLockedCuratedGamesEnabled
0: Token Validation Failed`,
    },
  ],
});
/**
 * @api GET https://accountsettings.roblox.com/v1/inventory-privacy
 * @summary Get a user's inventory privacy setting
 */
export const getInventoryPrivacy = endpoint({
  method: 'get' as const,
  path: '/v1/inventory-privacy',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_AccountSettings_Api_InventoryPrivacyResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://accountsettings.roblox.com/v1/inventory-privacy
 * @summary Updates a user's inventory privacy setting
 * @param body
 */
export const postInventoryPrivacy = endpoint({
  method: 'post' as const,
  path: '/v1/inventory-privacy',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_AccountSettings_Api_InventoryPrivacyRequest,
  response: Roblox_AccountSettings_Api_InventoryPrivacyUpdateResponse,
  errors: [
    {
      status: 400,
      description: `Roblox.AccountSettings.Api.ResponseEnums.ContactSettingsErrors.AccountLocked`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `Roblox.AccountSettings.Api.ResponseEnums.ContactSettingsErrors.InventoryHidingFeatureDisabled
0: Token Validation Failed`,
    },
  ],
});
/**
 * @api GET https://accountsettings.roblox.com/v1/private-message-privacy
 * @summary Get a user's private message privacy setting
 */
export const getPrivateMessagePrivacy = endpoint({
  method: 'get' as const,
  path: '/v1/private-message-privacy',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ privateMessagePrivacy: z.string() }).passthrough(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://accountsettings.roblox.com/v1/private-message-privacy
 * @summary Updates a user's private message privacy setting
 * @param body
 */
export const postPrivateMessagePrivacy = endpoint({
  method: 'post' as const,
  path: '/v1/private-message-privacy',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: z.object({ privateMessagePrivacy: z.string() }).passthrough(),
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `Roblox.AccountSettings.Api.ResponseEnums.ContactSettingsErrors.InvalidSettingOption`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `Roblox.AccountSettings.Api.ResponseEnums.ContactSettingsErrors.AccountLocked
            OR
            Roblox.AccountSettings.Api.ResponseEnums.ContactSettingsErrors.SettingLockedCuratedGamesEnabled
0: Token Validation Failed`,
    },
  ],
});
/**
 * @api GET https://accountsettings.roblox.com/v1/themes/:consumerType/:consumerId
 * @summary returns the theme type for a specific consumer.
 * @param consumerType The consumer type
 * @param consumerId The consumer's theme configuration to get. If the consumerType is User always return the AuthenticatedUser's theme type.
 */
export const getThemesConsumertypeConsumerid = endpoint({
  method: 'get' as const,
  path: '/v1/themes/:consumerType/:consumerId',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    consumerType: {
      style: 'simple',
    },
    consumerId: {
      style: 'simple',
    },
  },
  parameters: {
    consumerType: z.literal(1),
    consumerId: z.string(),
  },
  response: z.object({ themeType: z.string() }).passthrough(),
  errors: [
    {
      status: 400,
      description: `3: Invalid consumer type.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api PATCH https://accountsettings.roblox.com/v1/themes/:consumerType/:consumerId
 * @summary Modify the theme type for consumer.
 * @param body An Roblox.AccountSettings.Api.ThemeConfigurationRequest.
 * @param consumerType The consumer type
 * @param consumerId The consumer's theme configuration to modify. If the consumerType is User always modify the AuthenticatedUser's theme type.
 */
export const patchThemesConsumertypeConsumerid = endpoint({
  method: 'patch' as const,
  path: '/v1/themes/:consumerType/:consumerId',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    consumerType: {
      style: 'simple',
    },
    consumerId: {
      style: 'simple',
    },
  },
  parameters: {
    consumerType: z.literal(1),
    consumerId: z.number().int(),
  },
  body: z.object({ themeType: z.string() }).passthrough(),
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `2: Invalid theme type.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
  ],
});
/**
 * @api GET https://accountsettings.roblox.com/v1/themes/types
 * @summary returns all the enabled theme types.
 */
export const getThemesTypes = endpoint({
  method: 'get' as const,
  path: '/v1/themes/types',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_System_String_,
  errors: [],
});
/**
 * @api GET https://accountsettings.roblox.com/v1/trade-privacy
 * @summary Get a user's trade privacy setting
 */
export const getTradePrivacy = endpoint({
  method: 'get' as const,
  path: '/v1/trade-privacy',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ tradePrivacy: z.string() }).passthrough(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://accountsettings.roblox.com/v1/trade-privacy
 * @summary Updates a user's trade privacy setting
 * @param body
 */
export const postTradePrivacy = endpoint({
  method: 'post' as const,
  path: '/v1/trade-privacy',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_AccountSettings_Api_UpdateTradePrivacyRequest,
  response: Roblox_AccountSettings_Api_TradePrivacyUpdateResponse,
  errors: [
    {
      status: 400,
      description: `Roblox.AccountSettings.Api.ResponseEnums.TradeSettingsErrors.InvalidTradePrivacy`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `Roblox.AccountSettings.Api.ResponseEnums.TradeSettingsErrors.AccountLocked
            OR
            Roblox.AccountSettings.Api.ResponseEnums.TradeSettingsErrors.UserCannotTrade
0: Token Validation Failed`,
    },
  ],
});
/**
 * @api GET https://accountsettings.roblox.com/v1/trade-value
 * @summary Get a user's trade quality filter setting
 */
export const getTradeValue = endpoint({
  method: 'get' as const,
  path: '/v1/trade-value',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  response: z.object({ tradeValue: z.string() }).passthrough(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api POST https://accountsettings.roblox.com/v1/trade-value
 * @summary Updates a user's trade quality filter setting
 * @param body
 */
export const postTradeValue = endpoint({
  method: 'post' as const,
  path: '/v1/trade-value',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: Roblox_AccountSettings_Api_TradeValueRequest,
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `Roblox.AccountSettings.Api.ResponseEnums.TradeSettingsErrors.InvalidTradeValue`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `Roblox.AccountSettings.Api.ResponseEnums.TradeSettingsErrors.AccountLocked
            OR
            Roblox.AccountSettings.Api.ResponseEnums.TradeSettingsErrors.UserCannotTrade
0: Token Validation Failed`,
    },
  ],
});
/**
 * @api POST https://accountsettings.roblox.com/v1/users/:userId/block
 * @summary Blocks another user.
 * @param userId The user ID to block.
 */
export const postUsersUseridBlock = endpoint({
  method: 'post' as const,
  path: '/v1/users/:userId/block',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `0: Target user does not exist.
1: Target user already blocked.
2: User sending block request has reached their block limit.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.
7: User is not logged in.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 503,
      description: `3: User blocking is disabled.
8: The request failed internally. Please try again later.`,
    },
  ],
});
/**
 * @api POST https://accountsettings.roblox.com/v1/users/:userId/unblock
 * @summary Unblocks a previously blocked user.
 * @param userId The user ID to unblock.
 */
export const postUsersUseridUnblock = endpoint({
  method: 'post' as const,
  path: '/v1/users/:userId/unblock',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
  },
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `0: Target user does not exist.
4: Target user for unblock request is not currently blocked.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.
7: User is not logged in.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed`,
    },
    {
      status: 503,
      description: `3: User blocking is disabled.
8: The request failed internally. Please try again later.`,
    },
  ],
});
/**
 * @api GET https://accountsettings.roblox.com/v1/users/get-blocked-users
 * @summary Gets all blocked users.
 */
export const getUsersGetBlockedUsers = endpoint({
  method: 'get' as const,
  path: '/v1/users/get-blocked-users',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_AccountSettings_Api_Models_Response_GetBlockedUsersResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://accountsettings.roblox.com/v1/users/get-detailed-blocked-users
 * @summary Gets all blocked users with details.
 */
export const getUsersGetDetailedBlockedUsers = endpoint({
  method: 'get' as const,
  path: '/v1/users/get-detailed-blocked-users',
  baseUrl: 'https://accountsettings.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_AccountSettings_Api_Models_Response_GetDetailedBlockedUsersResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
