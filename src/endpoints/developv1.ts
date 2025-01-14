import { z } from 'zod';
import { endpoint } from '..';

const Roblox_Api_Develop_Models_Response_AssetVotingModel = z
  .object({
    assetId: z.number().int(),
    hasUserVoted: z.boolean(),
    canUserVote: z.boolean(),
    shouldShowVotes: z.boolean(),
    upVotes: z.number().int(),
    downVotes: z.number().int(),
    reasonForNotAbleToVote: z.string(),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_Response_AssetVotingModel_ = z
  .object({
    data: z.array(Roblox_Api_Develop_Models_Response_AssetVotingModel),
  })
  .passthrough();
const Roblox_Api_Develop_Models_UniverseModel = z
  .object({
    id: z.number().int(),
    name: z.string(),
    description: z.string(),
    isArchived: z.boolean(),
    rootPlaceId: z.number().int(),
    isActive: z.boolean(),
    privacyType: z.string(),
    creatorType: z.string(),
    creatorTargetId: z.number().int(),
    creatorName: z.string(),
    created: z.string().datetime({ offset: true }),
    updated: z.string().datetime({ offset: true }),
  })
  .passthrough();
const Roblox_Api_Develop_Models_GameTemplateModel = z
  .object({
    gameTemplateType: z.string(),
    hasTutorials: z.boolean(),
    universe: Roblox_Api_Develop_Models_UniverseModel,
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_GameTemplateModel_ = z
  .object({ data: z.array(Roblox_Api_Develop_Models_GameTemplateModel) })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_UniverseModel_ = z
  .object({
    previousPageCursor: z.string(),
    nextPageCursor: z.string(),
    data: z.array(Roblox_Api_Develop_Models_UniverseModel),
  })
  .passthrough();
const Roblox_Api_Develop_Models_PlaceCompatibilityModel = z
  .object({
    status: z.union([z.literal(0), z.literal(1), z.literal(2)]),
    platformName: z.string(),
    crashRatePercentage: z.number(),
  })
  .passthrough();
const Roblox_Api_Develop_Models_Response_PlaceCompatibilitiesResponse = z
  .object({
    Compatibilities: z.array(Roblox_Api_Develop_Models_PlaceCompatibilityModel),
  })
  .passthrough();
const Roblox_Api_Develop_Models_Response_StatisticsRange = z
  .object({ type: z.string(), data: z.record(z.number()) })
  .passthrough();
const Roblox_Api_Develop_Models_StatisticsResponse = z
  .object({
    placeId: z.number().int(),
    dataType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    dataGranularity: z.union([z.literal(0), z.literal(1), z.literal(2)]),
    startTime: z.string().datetime({ offset: true }),
    endTime: z.string().datetime({ offset: true }),
    data: z.record(Roblox_Api_Develop_Models_Response_StatisticsRange),
  })
  .passthrough();
const Roblox_Api_Develop_Models_DeveloperProductRevenue = z
  .object({ developerProductName: z.string(), revenueAmount: z.number().int() })
  .passthrough();
const Roblox_Api_Develop_Models_DeveloperProductAggregationResponse_developerProductRevenueByDevice = z
  .object({
    Computer: z.array(Roblox_Api_Develop_Models_DeveloperProductRevenue),
    Phone: z.array(Roblox_Api_Develop_Models_DeveloperProductRevenue),
    Tablet: z.array(Roblox_Api_Develop_Models_DeveloperProductRevenue),
    Console: z.array(Roblox_Api_Develop_Models_DeveloperProductRevenue),
    VR: z.array(Roblox_Api_Develop_Models_DeveloperProductRevenue),
  })
  .passthrough();
const Roblox_Api_Develop_Models_DeveloperProductAggregationResponse = z
  .object({
    allDevicesDeveloperProductRevenue: z.array(Roblox_Api_Develop_Models_DeveloperProductRevenue),
    developerProductRevenueByDevice:
      Roblox_Api_Develop_Models_DeveloperProductAggregationResponse_developerProductRevenueByDevice,
  })
  .passthrough();
const Roblox_Api_Develop_Models_Response_StatisticsAgeDataResponse = z
  .object({ isAgeDataAvailable: z.boolean() })
  .passthrough();
const Roblox_Web_Responses_Users_SkinnyUserResponse = z
  .object({ id: z.number().int(), name: z.string(), displayName: z.string() })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Users_SkinnyUserResponse_ = z
  .object({ data: z.array(Roblox_Web_Responses_Users_SkinnyUserResponse) })
  .passthrough();
const Roblox_Web_Responses_Plugins_PluginResponse = z
  .object({
    id: z.number().int(),
    name: z.string(),
    description: z.string(),
    commentsEnabled: z.boolean(),
    versionId: z.number().int(),
    created: z.string().datetime({ offset: true }),
    updated: z.string().datetime({ offset: true }),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Plugins_PluginResponse_ = z
  .object({ data: z.array(Roblox_Web_Responses_Plugins_PluginResponse) })
  .passthrough();
const Roblox_Api_Develop_Models_DevStatsCreatorDashboardMetadataResponse = z
  .object({
    isPlayFabDataSourceChartsEnabled: z.boolean(),
    playFabDataSourceChartsAvailableByKPITypes: z.array(z.string()),
  })
  .passthrough();
const Roblox_Api_Develop_Models_UniverseSettingsResponse = z
  .object({
    allowPrivateServers: z.boolean(),
    privateServerPrice: z.number().int(),
    id: z.number().int(),
    name: z.string(),
    universeAvatarType: z.union([z.literal(1), z.literal(2), z.literal(3)]),
    universeScaleType: z.union([z.literal(1), z.literal(2)]),
    universeAnimationType: z.union([z.literal(1), z.literal(2)]),
    universeCollisionType: z.union([z.literal(1), z.literal(2)]),
    universeBodyType: z.union([z.literal(1), z.literal(2)]),
    universeJointPositioningType: z.union([z.literal(1), z.literal(2)]),
    isArchived: z.boolean(),
    isFriendsOnly: z.boolean(),
    genre: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
      z.literal(6),
      z.literal(7),
      z.literal(8),
      z.literal(9),
      z.literal(10),
      z.literal(11),
      z.literal(12),
      z.literal(13),
      z.literal(14),
    ]),
    playableDevices: z.array(z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)])),
    isForSale: z.boolean(),
    price: z.number().int(),
    isStudioAccessToApisAllowed: z.boolean(),
    privacyType: z.string(),
  })
  .passthrough();
const Roblox_Api_Develop_Models_UniverseSettingsRequest = z
  .object({
    name: z.string(),
    universeAvatarType: z.union([z.literal(1), z.literal(2), z.literal(3)]),
    universeScaleType: z.union([z.literal(1), z.literal(2)]),
    universeAnimationType: z.union([z.literal(1), z.literal(2)]),
    universeCollisionType: z.union([z.literal(1), z.literal(2)]),
    universeBodyType: z.union([z.literal(1), z.literal(2)]),
    universeJointPositioningType: z.union([z.literal(1), z.literal(2)]),
    isArchived: z.boolean(),
    isFriendsOnly: z.boolean(),
    genre: z.union([
      z.literal(0),
      z.literal(1),
      z.literal(2),
      z.literal(3),
      z.literal(4),
      z.literal(5),
      z.literal(6),
      z.literal(7),
      z.literal(8),
      z.literal(9),
      z.literal(10),
      z.literal(11),
      z.literal(12),
      z.literal(13),
      z.literal(14),
    ]),
    playableDevices: z.array(z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)])),
    isForSale: z.boolean(),
    price: z.number().int(),
  })
  .passthrough();
const Roblox_Api_Develop_Models_PrivateServerDetailsResponse = z
  .object({
    isEnabled: z.boolean(),
    price: z.number().int(),
    activeServersCount: z.number().int(),
    activeSubscriptionsCount: z.number().int(),
  })
  .passthrough();
const Roblox_Api_Develop_Models_LiveStatsResponseModel = z
  .object({
    totalPlayerCount: z.number().int(),
    playerCountsByDeviceType: z.record(z.number().int()),
    gameCount: z.number().int(),
  })
  .passthrough();
const Roblox_Api_Develop_Models_UniversePermissionsModel = z
  .object({ canManage: z.boolean(), canCloudEdit: z.boolean() })
  .passthrough();
const Roblox_Api_Develop_Models_IPlaceModel = z.object({}).passthrough();
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_IPlaceModel_ = z
  .object({
    previousPageCursor: z.string(),
    nextPageCursor: z.string(),
    data: z.array(Roblox_Api_Develop_Models_IPlaceModel),
  })
  .passthrough();
const Roblox_Api_Develop_Models_Response_TeamCreateSettingsResponse = z
  .object({ isEnabled: z.boolean() })
  .passthrough();
const Roblox_Api_Develop_Models_UpdateTeamCreateSettingsRequest = z.object({ isEnabled: z.boolean() }).passthrough();
const Roblox_Web_WebAPI_ApiEmptyResponseModel = z.object({}).passthrough();
const Roblox_Api_Develop_Models_UserResponse = z
  .object({
    buildersClubMembershipType: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
    userId: z.number().int(),
    username: z.string(),
    displayName: z.string(),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_UserResponse_ = z
  .object({
    previousPageCursor: z.string(),
    nextPageCursor: z.string(),
    data: z.array(Roblox_Api_Develop_Models_UserResponse),
  })
  .passthrough();
const Roblox_Api_Develop_Models_TeamCreateMembershipRequest = z.object({ userId: z.number().int() }).passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_UniverseModel_ = z
  .object({ data: z.array(Roblox_Api_Develop_Models_UniverseModel) })
  .passthrough();
const Roblox_Api_Develop_Models_UniverseIdPermissionsModel = z
  .object({
    universeId: z.number().int(),
    canManage: z.boolean(),
    canCloudEdit: z.boolean(),
  })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_UniverseIdPermissionsModel_ = z
  .object({
    data: z.array(Roblox_Api_Develop_Models_UniverseIdPermissionsModel),
  })
  .passthrough();
const Roblox_Api_Develop_Models_UniverseTeamCreateSettingsModel = z
  .object({ id: z.number().int(), isEnabled: z.boolean() })
  .passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_UniverseTeamCreateSettingsModel_ = z
  .object({
    data: z.array(Roblox_Api_Develop_Models_UniverseTeamCreateSettingsModel),
  })
  .passthrough();
const Roblox_Api_Develop_Models_GroupModel = z.object({ id: z.number().int(), name: z.string() }).passthrough();
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_GroupModel_ = z
  .object({ data: z.array(Roblox_Api_Develop_Models_GroupModel) })
  .passthrough();
const Roblox_Api_Develop_Models_PlaceConfigurationModel = z
  .object({ name: z.string(), description: z.string() })
  .passthrough();
const Roblox_Api_Develop_Models_PlaceModel = z
  .object({
    id: z.number().int(),
    universeId: z.number().int(),
    name: z.string(),
    description: z.string(),
  })
  .passthrough();
const Roblox_Api_Develop_Models_AliasRequest = z
  .object({
    name: z.string(),
    type: z.union([z.literal(1), z.literal(2), z.literal(3)]),
    targetId: z.number().int(),
  })
  .passthrough();
const Roblox_Develop_Api_UpdatePluginRequest = z
  .object({
    name: z.string(),
    description: z.string(),
    commentsEnabled: z.boolean(),
  })
  .passthrough();

const schemas = {
  Roblox_Api_Develop_Models_Response_AssetVotingModel,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_Response_AssetVotingModel_,
  Roblox_Api_Develop_Models_UniverseModel,
  Roblox_Api_Develop_Models_GameTemplateModel,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_GameTemplateModel_,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_UniverseModel_,
  Roblox_Api_Develop_Models_PlaceCompatibilityModel,
  Roblox_Api_Develop_Models_Response_PlaceCompatibilitiesResponse,
  Roblox_Api_Develop_Models_Response_StatisticsRange,
  Roblox_Api_Develop_Models_StatisticsResponse,
  Roblox_Api_Develop_Models_DeveloperProductRevenue,
  Roblox_Api_Develop_Models_DeveloperProductAggregationResponse_developerProductRevenueByDevice,
  Roblox_Api_Develop_Models_DeveloperProductAggregationResponse,
  Roblox_Api_Develop_Models_Response_StatisticsAgeDataResponse,
  Roblox_Web_Responses_Users_SkinnyUserResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Users_SkinnyUserResponse_,
  Roblox_Web_Responses_Plugins_PluginResponse,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Plugins_PluginResponse_,
  Roblox_Api_Develop_Models_DevStatsCreatorDashboardMetadataResponse,
  Roblox_Api_Develop_Models_UniverseSettingsResponse,
  Roblox_Api_Develop_Models_UniverseSettingsRequest,
  Roblox_Api_Develop_Models_PrivateServerDetailsResponse,
  Roblox_Api_Develop_Models_LiveStatsResponseModel,
  Roblox_Api_Develop_Models_UniversePermissionsModel,
  Roblox_Api_Develop_Models_IPlaceModel,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_IPlaceModel_,
  Roblox_Api_Develop_Models_Response_TeamCreateSettingsResponse,
  Roblox_Api_Develop_Models_UpdateTeamCreateSettingsRequest,
  Roblox_Web_WebAPI_ApiEmptyResponseModel,
  Roblox_Api_Develop_Models_UserResponse,
  Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_UserResponse_,
  Roblox_Api_Develop_Models_TeamCreateMembershipRequest,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_UniverseModel_,
  Roblox_Api_Develop_Models_UniverseIdPermissionsModel,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_UniverseIdPermissionsModel_,
  Roblox_Api_Develop_Models_UniverseTeamCreateSettingsModel,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_UniverseTeamCreateSettingsModel_,
  Roblox_Api_Develop_Models_GroupModel,
  Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_GroupModel_,
  Roblox_Api_Develop_Models_PlaceConfigurationModel,
  Roblox_Api_Develop_Models_PlaceModel,
  Roblox_Api_Develop_Models_AliasRequest,
  Roblox_Develop_Api_UpdatePluginRequest,
};

/**
 * @api GET https://develop.roblox.com/v1/assets/voting
 * @summary Gets the voting information of the given assets
 * @param assetIds The ids of the Roblox.Platform.Assets.IAsset.
 */
export const getAssetsVoting = endpoint({
  method: 'get' as const,
  path: '/v1/assets/voting',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    assetIds: {
      style: 'form',
    },
  },
  parameters: {
    assetIds: z.array(z.number()),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_Response_AssetVotingModel_,
  errors: [],
});
/**
 * @api GET https://develop.roblox.com/v1/gametemplates
 * @summary Gets a page of templates that can be used to start off making games.
 * @description Templates subject to change without notice.
Sort order of templates specified by Roblox.
 */
export const getGametemplates = endpoint({
  method: 'get' as const,
  path: '/v1/gametemplates',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_GameTemplateModel_,
  errors: [],
});
/**
 * @api GET https://develop.roblox.com/v1/groups/:groupId/universes
 * @summary Gets a list of universes for the given group.
 * @param groupId The group id.
 * @param isArchived Whether or not to return archived games.
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder Sorted by universeId
 */
export const getGroupsGroupidUniverses = endpoint({
  method: 'get' as const,
  path: '/v1/groups/:groupId/universes',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    groupId: {
      style: 'simple',
    },
    isArchived: {
      style: 'form',
      explode: true,
    },
    limit: {
      style: 'form',
      explode: true,
    },
    cursor: {
      style: 'form',
      explode: true,
    },
    sortOrder: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    groupId: z.number().int(),
    isArchived: z.boolean().optional(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_UniverseModel_,
  errors: [
    {
      status: 400,
      description: `Invalid groupId.`,
    },
  ],
});
/**
 * @api POST https://develop.roblox.com/v1/places/:placeId
 * @summary Updates the place configuration for the place with the id placeId
 * @param body
 * @param placeId The place id for the place to be updated.
 * @description Currently the only supported functionality for updating the configuration is around Name, and Description.
 */
export const postPlacesPlaceid = endpoint({
  method: 'post' as const,
  path: '/v1/places/:placeId',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    placeId: {
      style: 'simple',
    },
  },
  parameters: {
    placeId: z.number().int(),
  },
  body: Roblox_Api_Develop_Models_PlaceConfigurationModel,
  response: Roblox_Api_Develop_Models_PlaceModel,
  errors: [
    {
      status: 400,
      description: `placeId is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `Authenticated user is not authorized to manage this place.
0: Token Validation Failed`,
    },
  ],
});
/**
 * @api PATCH https://develop.roblox.com/v1/places/:placeId
 * @summary Updates the place configuration for the place with the id placeId
 * @param body
 * @param placeId The place id for the place to be updated.
 * @description Currently the only supported functionality for updating the configuration is around Name, and Description.
 */
export const patchPlacesPlaceid = endpoint({
  method: 'patch' as const,
  path: '/v1/places/:placeId',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    placeId: {
      style: 'simple',
    },
  },
  parameters: {
    placeId: z.number().int(),
  },
  body: Roblox_Api_Develop_Models_PlaceConfigurationModel,
  response: Roblox_Api_Develop_Models_PlaceModel,
  errors: [
    {
      status: 400,
      description: `placeId is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `Authenticated user is not authorized to manage this place.
0: Token Validation Failed`,
    },
  ],
});
/**
 * @api GET https://develop.roblox.com/v1/places/:placeId/compatibilities
 * @summary Gets compatibility of place with different platforms placeId
 * @param placeId The place id for the place to be updated.
 */
export const getPlacesPlaceidCompatibilities = endpoint({
  method: 'get' as const,
  path: '/v1/places/:placeId/compatibilities',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    placeId: {
      style: 'simple',
    },
  },
  parameters: {
    placeId: z.number().int(),
  },
  response: Roblox_Api_Develop_Models_Response_PlaceCompatibilitiesResponse,
  errors: [
    {
      status: 400,
      description: `placeId is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `Authenticated user is not authorized to manage this place.`,
    },
  ],
});
/**
 * @api GET https://develop.roblox.com/v1/places/:placeId/stats/:type
 * @summary Get statistics data for a place.
 * @param placeId The place id.
 * @param type The data type.
 * @param granularity The Roblox.Api.Develop.Models.StatisticsDataGranularity.
 * @param divisionType Optional division type for the data.
 * @param startTime Optional time of first sample.
 * @param endTime Optional time of last sample.
 */
export const getPlacesPlaceidStatsType = endpoint({
  method: 'get' as const,
  path: '/v1/places/:placeId/stats/:type',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    placeId: {
      style: 'simple',
    },
    type: {
      style: 'simple',
    },
    granularity: {
      style: 'form',
      explode: true,
    },
    divisionType: {
      style: 'form',
      explode: true,
    },
    startTime: {
      style: 'form',
      explode: true,
    },
    endTime: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    placeId: z.number().int(),
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    granularity: z.union([z.literal(0), z.literal(1), z.literal(2)]),
    divisionType: z.union([z.literal(0), z.literal(1)]).optional(),
    startTime: z.string().datetime({ offset: true }).optional(),
    endTime: z.string().datetime({ offset: true }).optional(),
  },
  response: Roblox_Api_Develop_Models_StatisticsResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `2: Not authorized to perform this action.`,
    },
    {
      status: 404,
      description: `1: The place is invalid.
3: Too many data points requested.
4: The requested data type is not known.`,
    },
  ],
});
/**
 * @api GET https://develop.roblox.com/v1/places/:placeId/stats/:type/legacy/flot
 * @summary Get statistics data for a place in a certain format.
DO NOT USE THIS ENDPOINT. It may be removed at any time. Use GetStatistics instead.
 * @param placeId The place id.
 * @param type The data type.
 * @param timeFrame The Roblox.Api.Develop.Models.StatisticsDataGranularity.
 * @param divisionType Optional division type for the data.
 * @param startTime Optional time of first sample.
 * @param endTime Optional time of last sample.
 */
export const getPlacesPlaceidStatsTypeLegacyFlot = endpoint({
  method: 'get' as const,
  path: '/v1/places/:placeId/stats/:type/legacy/flot',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    placeId: {
      style: 'simple',
    },
    type: {
      style: 'simple',
    },
    timeFrame: {
      style: 'form',
      explode: true,
    },
    divisionType: {
      style: 'form',
      explode: true,
    },
    startTime: {
      style: 'form',
      explode: true,
    },
    endTime: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    placeId: z.number().int(),
    type: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    timeFrame: z.union([z.literal(0), z.literal(1), z.literal(2)]),
    divisionType: z.union([z.literal(0), z.literal(1)]).optional(),
    startTime: z.string().datetime({ offset: true }).optional(),
    endTime: z.string().datetime({ offset: true }).optional(),
  },
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `2: Not authorized to perform this action.`,
    },
    {
      status: 404,
      description: `1: The place is invalid.
3: Too many data points requested.
4: The requested data type is not known.`,
    },
  ],
});
/**
 * @api GET https://develop.roblox.com/v1/places/:placeId/stats/developer-product-aggregation
 * @summary An endpoint that returns whether the age data is available for a place.
 * @param placeId The place Id.
 * @param timeFrame The Roblox.Api.Develop.Models.StatisticsDataGranularity.
 */
export const getPlacesPlaceidStatsDeveloperProductAggregation = endpoint({
  method: 'get' as const,
  path: '/v1/places/:placeId/stats/developer-product-aggregation',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    placeId: {
      style: 'simple',
    },
    timeFrame: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    placeId: z.number().int(),
    timeFrame: z.union([z.literal(0), z.literal(1), z.literal(2)]),
  },
  response: Roblox_Api_Develop_Models_DeveloperProductAggregationResponse,
  errors: [
    {
      status: 400,
      description: `1: The place is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `2: Not authorized to perform this action.`,
    },
  ],
});
/**
 * @api GET https://develop.roblox.com/v1/places/:placeId/stats/is-age-data-available
 * @summary An endpoint that returns whether the age data is available for a place.
 * @param placeId The place Id.
 */
export const getPlacesPlaceidStatsIsAgeDataAvailable = endpoint({
  method: 'get' as const,
  path: '/v1/places/:placeId/stats/is-age-data-available',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    placeId: {
      style: 'simple',
    },
  },
  parameters: {
    placeId: z.number().int(),
  },
  response: z.object({ isAgeDataAvailable: z.boolean() }).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: The place is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `2: Not authorized to perform this action.`,
    },
  ],
});
/**
 * @api GET https://develop.roblox.com/v1/places/:placeId/teamcreate/active_session/members
 * @summary List of users in the active Team Create session
 * @param placeId The place Id.
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 */
export const getPlacesPlaceidTeamcreateActive_sessionMembers = endpoint({
  method: 'get' as const,
  path: '/v1/places/:placeId/teamcreate/active_session/members',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    placeId: {
      style: 'simple',
    },
    limit: {
      style: 'form',
      explode: true,
    },
    cursor: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    placeId: z.number().int(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Users_SkinnyUserResponse_,
  errors: [
    {
      status: 400,
      description: `1: The universe is invalid.
5: The place is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `2: Not authorized to perform this action.
4: TeamCreate on universe is disabled.`,
    },
    {
      status: 404,
      description: `0: An unknown error occurred.`,
    },
    {
      status: 500,
      description: `6: Multiple active sessions in a Team Create place.`,
    },
  ],
});
/**
 * @api GET https://develop.roblox.com/v1/plugins
 * @summary Gets plugin details by ids.
 * @param pluginIds The plugin ids.
 */
export const getPlugins = endpoint({
  method: 'get' as const,
  path: '/v1/plugins',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    pluginIds: {
      style: 'form',
    },
  },
  parameters: {
    pluginIds: z.array(z.number()),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Web_Responses_Plugins_PluginResponse_,
  errors: [
    {
      status: 400,
      description: `1: Too many ids.
2: The format of the ids are invalid.`,
    },
  ],
});
/**
 * @api PATCH https://develop.roblox.com/v1/plugins/:pluginId
 * @summary Updates a plugin.
 * @param body The Roblox.Develop.Api.UpdatePluginRequest.
 * @param pluginId The id of the plugin.
 */
export const patchPluginsPluginid = endpoint({
  method: 'patch' as const,
  path: '/v1/plugins/:pluginId',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    pluginId: {
      style: 'simple',
    },
  },
  parameters: {
    pluginId: z.number().int(),
  },
  body: Roblox_Develop_Api_UpdatePluginRequest,
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `5: Description too long.
6: Text moderated.
7: Invalid name.
8: The request body is missing.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
4: Insufficient permissions.`,
    },
    {
      status: 404,
      description: `3: The id is invalid.`,
    },
  ],
});
/**
 * @api GET https://develop.roblox.com/v1/search/universes
 * @summary Allows searching for universes.
 * @param search 
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder The order the results are sorted in.
 * @param q A search query with filters seperated by whitespace. Example: "these are keywords! filterName:filterValue filterName:filterValue"

archived:[Value] (required: False)
Allowed values: [True,False]

active:[Value] (required: False)
Allowed values: [True,False]

creator:[Value] (required: True)
Allowed values: [User,Group,Team]

groups:[Value,Value,...] (required: False)


 * @param sort Determines the way results will be sorted. Format: (a prefix for ascending or descending) + (sort type).

Ascending Prefix: +

Descending Prefix -

Allowed Sort Types: +GameCreated,-GameCreated,+GameName,-GameName,+RootPlaceName,-RootPlaceName,+RootPlaceUpdated,-RootPlaceUpdated,+LastUpdated,-LastUpdated

Note: An allowed type with no prefix allows both ascending and descending but if a prefix is specified only the specified order is allowed.
 * @description PoC of search endpoint which supports filters in search query string and special syntax for sorts.
IMPORTANT: filter names, values, sort values - are case sensitive!
 */
export const getSearchUniverses = endpoint({
  method: 'get' as const,
  path: '/v1/search/universes',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    search: {
      style: 'form',
      explode: true,
    },
    limit: {
      style: 'form',
      explode: true,
    },
    cursor: {
      style: 'form',
      explode: true,
    },
    sortOrder: {
      style: 'form',
      explode: true,
    },
    q: {
      style: 'form',
      explode: true,
    },
    sort: {
      style: 'form',
    },
  },
  parameters: {
    search: z.unknown(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
    q: z.string().optional(),
    sort: z.array(z.any()).optional(),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_UniverseModel_,
  errors: [
    {
      status: 400,
      description: `&#x27;q&#x27; field value contains filter which value has a wrong format or is not in allowed values list.
or
&#x27;q&#x27; field value doesn&#x27;t contain filter which is required.
or
&#x27;sort&#x27; field value has a wrong format or is not in allowed values list.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 500,
      description: `Unknown error retrieving search results.`,
    },
  ],
});
/**
 * @api GET https://develop.roblox.com/v1/stats/creator-dashboard-metadata
 */
export const getStatsCreatorDashboardMetadata = endpoint({
  method: 'get' as const,
  path: '/v1/stats/creator-dashboard-metadata',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_Api_Develop_Models_DevStatsCreatorDashboardMetadataResponse,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://develop.roblox.com/v1/universes/:universeId
 * @summary Gets a Roblox.Api.Develop.Models.UniverseModel.
 * @param universeId The Universe id.
 */
export const getUniversesUniverseid = endpoint({
  method: 'get' as const,
  path: '/v1/universes/:universeId',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  response: Roblox_Api_Develop_Models_UniverseModel,
  errors: [
    {
      status: 400,
      description: `1: The universe does not exist.`,
    },
  ],
});
/**
 * @api POST https://develop.roblox.com/v1/universes/:universeId/activate
 * @summary Activates a universes.
 * @param universeId The universe id.
 */
export const postUniversesUniverseidActivate = endpoint({
  method: 'post' as const,
  path: '/v1/universes/:universeId/activate',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: The universe does not exist.
2: This universe does not have a root place.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
3: You are not authorized to configure this universe.
6: The root place for this universe is under review and can not be activated.
7: Creator already has the maximum number of places active.`,
    },
  ],
});
/**
 * @api POST https://develop.roblox.com/v1/universes/:universeId/aliases
 * @summary Creates an alias.
 * @param body The request body containing the alias attributes.
 * @param universeId The universe Id.
 */
export const postUniversesUniverseidAliases = endpoint({
  method: 'post' as const,
  path: '/v1/universes/:universeId/aliases',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  body: Roblox_Api_Develop_Models_AliasRequest,
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: The request body is missing.
2: The alias name is required.
3: The alias type is required.
4: The alias target is required.
6: The alias name is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
10: You are not authorized to configure this universe.`,
    },
    {
      status: 404,
      description: `7: The universe does not exist.`,
    },
    {
      status: 409,
      description: `8: An alias with the provided name already exists.`,
    },
  ],
});
/**
 * @api DELETE https://develop.roblox.com/v1/universes/:universeId/aliases/:name
 * @summary Deletes an alias.
 * @param universeId The universe id.
 * @param name The name of the alias to delete.
 */
export const deleteUniversesUniverseidAliasesName = endpoint({
  method: 'delete' as const,
  path: '/v1/universes/:universeId/aliases/:name',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
    name: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.number().int(),
    name: z.string(),
  },
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
10: You are not authorized to configure this universe.`,
    },
    {
      status: 404,
      description: `7: The universe does not exist.
9: An alias with the provided name does not exist.`,
    },
  ],
});
/**
 * @api PATCH https://develop.roblox.com/v1/universes/:universeId/aliases/:name
 * @summary Updates an alias.
 * @param body The request body containing the alias attributes to update.
 * @param universeId The universe Id.
 * @param name The name of the alias to update.
 */
export const patchUniversesUniverseidAliasesName = endpoint({
  method: 'patch' as const,
  path: '/v1/universes/:universeId/aliases/:name',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    universeId: {
      style: 'simple',
    },
    name: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.number().int(),
    name: z.string(),
  },
  body: Roblox_Api_Develop_Models_AliasRequest,
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: The request body is missing.
5: Either none or both alias type and target should be provided.
6: The alias name is invalid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
10: You are not authorized to configure this universe.`,
    },
    {
      status: 404,
      description: `7: The universe does not exist.
9: An alias with the provided name does not exist.`,
    },
    {
      status: 409,
      description: `8: An alias with the provided name already exists.`,
    },
  ],
});
/**
 * @api GET https://develop.roblox.com/v1/universes/:universeId/configuration
 * @summary Get settings for an owned universe.
 * @param universeId The universe Id.
 */
export const getUniversesUniverseidConfiguration = endpoint({
  method: 'get' as const,
  path: '/v1/universes/:universeId/configuration',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  response: Roblox_Api_Develop_Models_UniverseSettingsResponse,
  errors: [
    {
      status: 400,
      description: `1: The universe does not exist.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `2: You are not authorized to configure this universe.`,
    },
  ],
});
/**
 * @api PATCH https://develop.roblox.com/v1/universes/:universeId/configuration
 * @summary Update universe settings for an owned universe.
 * @param body The Roblox.Api.Develop.Models.UniverseSettingsRequest model.
 * @param universeId The universeId.
 */
export const patchUniversesUniverseidConfiguration = endpoint({
  method: 'patch' as const,
  path: '/v1/universes/:universeId/configuration',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  body: Roblox_Api_Develop_Models_UniverseSettingsRequest,
  response: Roblox_Api_Develop_Models_UniverseSettingsResponse,
  errors: [
    {
      status: 400,
      description: `1: The universe does not exist.
3: Invalid UniverseAvatarType.
4: Invalid UniverseScaleType.
5: Invalid UniverseAnimationType.
6: Invalid UniverseCollisionType.
7: New universe name or description has been rejected.
8: New universe name is too long.
10: Invalid UniverseBodyType.
11: Invalid UniverseJointPositioningType.
12: The universe has no root place.
13: At least one playable device must be provided.
15: Price is required when isForSale is true.
16: This game cannot be offered for sale because it is not public.
17: This game cannot be offered for sale because it has private servers enabled.
18: The game price is outside of the allowed range.
19: Invalid genre.
20: The request body is missing.
21: Invalid device type.
22: Invalid asset type.
23: Invalid value, the min must be less than or equal to the max
24: Invalid scale value`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
2: You are not authorized to configure this universe.
14: You are not authorized to sell games.`,
    },
    {
      status: 409,
      description: `9: Failed to shutdown all intances of game after changing AvatarType. The change has been reverted.`,
    },
  ],
});
/**
 * @api GET https://develop.roblox.com/v1/universes/:universeId/configuration/vip-servers
 * @summary Get settings for an owned universe's VIP servers.
 * @param universeId The universe Id.
 */
export const getUniversesUniverseidConfigurationVipServers = endpoint({
  method: 'get' as const,
  path: '/v1/universes/:universeId/configuration/vip-servers',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  response: Roblox_Api_Develop_Models_PrivateServerDetailsResponse,
  errors: [
    {
      status: 400,
      description: `1: The universe does not exist.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `2: You are not authorized to configure this universe.`,
    },
  ],
});
/**
 * @api POST https://develop.roblox.com/v1/universes/:universeId/deactivate
 * @summary Deactivates a universe.
 * @param universeId The universe id.
 */
export const postUniversesUniverseidDeactivate = endpoint({
  method: 'post' as const,
  path: '/v1/universes/:universeId/deactivate',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `1: The universe does not exist.
2: This universe does not have a root place.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `0: Token Validation Failed
3: You are not authorized to configure this universe.`,
    },
  ],
});
/**
 * @api GET https://develop.roblox.com/v1/universes/:universeId/live-stats
 * @param universeId
 */
export const getUniversesUniverseidLiveStats = endpoint({
  method: 'get' as const,
  path: '/v1/universes/:universeId/live-stats',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  response: Roblox_Api_Develop_Models_LiveStatsResponseModel,
  errors: [
    {
      status: 400,
      description: `1: The universe does not exist.
2: This universe does not have a root place.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `3: You are not authorized to configure this universe.`,
    },
  ],
});
/**
 * @api GET https://develop.roblox.com/v1/universes/:universeId/permissions
 * @summary Returns list of granted and declined permissions related to the universe with the id universeId for authenticated user
 * @param universeId The universe id.
 */
export const getUniversesUniverseidPermissions = endpoint({
  method: 'get' as const,
  path: '/v1/universes/:universeId/permissions',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  response: Roblox_Api_Develop_Models_UniversePermissionsModel,
  errors: [
    {
      status: 400,
      description: `1: The universe does not exist.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://develop.roblox.com/v1/universes/:universeId/places
 * @summary Gets a list of places for a universe.
 * @param universeId The asset id.
 * @param isUniverseCreation
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder Sorted by placeId
 */
export const getUniversesUniverseidPlaces = endpoint({
  method: 'get' as const,
  path: '/v1/universes/:universeId/places',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
    isUniverseCreation: {
      style: 'form',
      explode: true,
    },
    limit: {
      style: 'form',
      explode: true,
    },
    cursor: {
      style: 'form',
      explode: true,
    },
    sortOrder: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    universeId: z.number().int(),
    isUniverseCreation: z.boolean().optional(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_IPlaceModel_,
  errors: [],
});
/**
 * @api GET https://develop.roblox.com/v1/universes/:universeId/teamcreate
 * @summary Gets TeamCreate settings for an Roblox.Platform.Universes.IUniverse.
 * @param universeId The universe Id.
 */
export const getUniversesUniverseidTeamcreate = endpoint({
  method: 'get' as const,
  path: '/v1/universes/:universeId/teamcreate',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  response: z.object({ isEnabled: z.boolean() }).passthrough(),
  errors: [
    {
      status: 400,
      description: `Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.InvalidUniverse`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.Unauthorized`,
    },
  ],
});
/**
 * @api PATCH https://develop.roblox.com/v1/universes/:universeId/teamcreate
 * @summary Edit team create settings for a universe.
 * @param body The request body containing the team create settings.
 * @param universeId The universe Id.
 * @description Enables, or disables team create for a universe.
 */
export const patchUniversesUniverseidTeamcreate = endpoint({
  method: 'patch' as const,
  path: '/v1/universes/:universeId/teamcreate',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  body: z.object({ isEnabled: z.boolean() }).passthrough(),
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.InvalidUniverse`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.Unauthorized
0: Token Validation Failed`,
    },
  ],
});
/**
 * @api GET https://develop.roblox.com/v1/universes/:universeId/teamcreate/memberships
 * @summary List of users allowed to TeamCreate a universe.
 * @param universeId The universe Id.
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder TeamCreate membership grant date
 */
export const getUniversesUniverseidTeamcreateMemberships = endpoint({
  method: 'get' as const,
  path: '/v1/universes/:universeId/teamcreate/memberships',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    universeId: {
      style: 'simple',
    },
    limit: {
      style: 'form',
      explode: true,
    },
    cursor: {
      style: 'form',
      explode: true,
    },
    sortOrder: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    universeId: z.number().int(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_UserResponse_,
  errors: [
    {
      status: 400,
      description: `Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.InvalidUniverse`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.TeamCreateDisabled`,
    },
  ],
});
/**
 * @api DELETE https://develop.roblox.com/v1/universes/:universeId/teamcreate/memberships
 * @summary Removes a user from a TeamCreate permissions list.
 * @param body The request body.
 * @param universeId The universe Id.
 */
export const deleteUniversesUniverseidTeamcreateMemberships = endpoint({
  method: 'delete' as const,
  path: '/v1/universes/:universeId/teamcreate/memberships',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    body: {},
    universeId: {
      style: 'simple',
    },
  },
  parameters: {
    universeId: z.number().int(),
  },
  body: z.object({ userId: z.number().int() }).passthrough(),
  response: z.object({}).passthrough(),
  errors: [
    {
      status: 400,
      description: `Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.InvalidUniverse OR Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.InvalidUser`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
    {
      status: 403,
      description: `Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.TeamCreateDisabled
0: Token Validation Failed`,
    },
  ],
});
/**
 * @api GET https://develop.roblox.com/v1/universes/multiget
 * @summary Gets a System.Collections.Generic.List`1.
 * @param ids The universe IDs to get. Limit 100.
 * @description If a universe can not be found for a given ID (such as -1) it will be skipped.
 */
export const getUniversesMultiget = endpoint({
  method: 'get' as const,
  path: '/v1/universes/multiget',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    ids: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    ids: z.array(z.number()),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_UniverseModel_,
  errors: [
    {
      status: 400,
      description: `8: No universe IDs sent to get.
9: Too many universe IDs sent to get, the limit is: `,
    },
  ],
});
/**
 * @api GET https://develop.roblox.com/v1/universes/multiget/permissions
 * @summary Returns an array of granted and declined permissions related to the universes with the ids in ids for the authenticated user.
 * @param ids The universe ids.
 * @description If a universe can not be found for a given ID (such as -1) it will be skipped.
 */
export const getUniversesMultigetPermissions = endpoint({
  method: 'get' as const,
  path: '/v1/universes/multiget/permissions',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    ids: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    ids: z.array(z.number()),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_UniverseIdPermissionsModel_,
  errors: [
    {
      status: 400,
      description: `8: No universe IDs sent to get.
9: Too many universe IDs sent to get, the limit is: `,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://develop.roblox.com/v1/universes/multiget/teamcreate
 * @summary Gets TeamCreate settings for multiple universes specified by Ids
 * @param ids
 */
export const getUniversesMultigetTeamcreate = endpoint({
  method: 'get' as const,
  path: '/v1/universes/multiget/teamcreate',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    ids: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    ids: z.array(z.number()),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_UniverseTeamCreateSettingsModel_,
  errors: [
    {
      status: 400,
      description: `Roblox.Api.Develop.ResponseEnums.TeamCreateErrors.TooManyUniverseIdsSent`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://develop.roblox.com/v1/user/:userId/canmanage/:assetId
 * @summary Returns whether the user can manage a given asset.
 * @param userId The ID of the user.
 * @param assetId The ID of the asset.
 */
export const getUserUseridCanmanageAssetid = endpoint({
  method: 'get' as const,
  path: '/v1/user/:userId/canmanage/:assetId',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    userId: {
      style: 'simple',
    },
    assetId: {
      style: 'simple',
    },
  },
  parameters: {
    userId: z.number().int(),
    assetId: z.number().int(),
  },
  response: z.void(),
  errors: [],
});
/**
 * @api GET https://develop.roblox.com/v1/user/groups/canmanage
 * @summary Gets a list of Groups that a user can manage.
 */
export const getUserGroupsCanmanage = endpoint({
  method: 'get' as const,
  path: '/v1/user/groups/canmanage',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_GroupModel_,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://develop.roblox.com/v1/user/groups/canmanagegamesoritems
 * @summary Gets a list of groups a user can manage games or items for.
 */
export const getUserGroupsCanmanagegamesoritems = endpoint({
  method: 'get' as const,
  path: '/v1/user/groups/canmanagegamesoritems',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_Api_Develop_Models_GroupModel_,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://develop.roblox.com/v1/user/teamcreate/memberships
 * @summary List of universes the authenticated user has permission to TeamCreate.
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder TeamCreate membership grant date
 */
export const getUserTeamcreateMemberships = endpoint({
  method: 'get' as const,
  path: '/v1/user/teamcreate/memberships',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    limit: {
      style: 'form',
      explode: true,
    },
    cursor: {
      style: 'form',
      explode: true,
    },
    sortOrder: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_UniverseModel_,
  errors: [
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
/**
 * @api GET https://develop.roblox.com/v1/user/universes
 * @summary Gets a list of universes for the authenticated user.
 * @param isArchived Whether or not to return archived games.
 * @param limit The number of results per request.
 * @param cursor The paging cursor for the previous or next page.
 * @param sortOrder Sorted by universeId
 */
export const getUserUniverses = endpoint({
  method: 'get' as const,
  path: '/v1/user/universes',
  baseUrl: 'https://develop.roblox.com',
  requestFormat: 'json' as const,
  serializationMethod: {
    isArchived: {
      style: 'form',
      explode: true,
    },
    limit: {
      style: 'form',
      explode: true,
    },
    cursor: {
      style: 'form',
      explode: true,
    },
    sortOrder: {
      style: 'form',
      explode: true,
    },
  },
  parameters: {
    isArchived: z.boolean().optional(),
    limit: z
      .union([z.literal(10), z.literal(25), z.literal(50), z.literal(100)])
      .optional()
      .default(10),
    cursor: z.string().optional(),
    sortOrder: z.enum(['Asc', 'Desc']).optional().default('Asc'),
  },
  response: Roblox_Web_WebAPI_Models_ApiPageResponse_Roblox_Api_Develop_Models_UniverseModel_,
  errors: [
    {
      status: 400,
      description: `cursor is not valid.`,
    },
    {
      status: 401,
      description: `0: Authorization has been denied for this request.`,
    },
  ],
});
