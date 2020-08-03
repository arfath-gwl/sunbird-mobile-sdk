import {Content as ContentData} from '@project-sunbird/client-services/models';
import {Rollup} from '../../telemetry';
import {ContentAccess} from '../../profile';
import {ContentMarker} from './response';

export {Content as ContentData, LicenseDetails, AltMsg as ComingSoonMsg, OriginData} from '@project-sunbird/client-services/models';

export interface Content {
    identifier: string;
    name: string;
    contentData: ContentData;
    mimeType: string;
    basePath: string;
    contentType: string;
    referenceCount: number;
    lastUpdatedTime: number;
    isAvailableLocally: boolean;
    isUpdateAvailable: boolean;
    children?: Content[];
    hierarchyInfo?: HierarchyInfo[];
    sizeOnDevice: number;
    lastUsedTime: number;
    rollup?: Rollup;
    contentFeedback?: ContentFeedback[];
    contentAccess?: ContentAccess[];
    contentMarker?: ContentMarker[];
    leafNodes: string[];
    leafNodesCount: number;
}

export interface ContentFeedback {
    contentId: string;
    rating: number;
    comments: string;
    createdAt?: number;
    stageId?: string;
    contentVersion: string;
}

export interface ContentFeedbackFilterCriteria {
    uid: string;
    contentId: string;
}

export interface HierarchyInfo {
    identifier: string;
    contentType: string;
}


