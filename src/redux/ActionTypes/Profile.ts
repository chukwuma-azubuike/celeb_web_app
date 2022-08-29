export const VENDOR_PROFILE_LOADING = "vendorProfileLoading";
export const VENDOR_PROFILE_ERROR = "vendorProfileError";
export const VENDOR_PROFILE_SUCCESS = "vendorProfileSuccess";
export const USER_PROFILE_LOADING = "userProfileLoading";
export const USER_PROFILE_ERROR = "userProfileError";
export const USER_PROFILE_SUCCESS = "userProfileSuccess";

export interface VendorProfileLoading {
  type: typeof VENDOR_PROFILE_LOADING;
}

export interface VendorProfileError {
  type: typeof VENDOR_PROFILE_ERROR;
}

export interface VendorReview {
  name: string;
  review: string;
  rating: string;
  date: number;
}

export interface VendorProfileSuccess {
  type: typeof VENDOR_PROFILE_SUCCESS;
  payload: {
    id: string;
    name: string;
    category: string;
    video: string;
    rating: number;
    reviews: VendorReview[];
    fans: number;
    imageURL: string;
    bio: string;
    online: boolean;
  } | unknown;
}

export interface UserProfileLoading {
  type: typeof USER_PROFILE_LOADING;
}

export interface UserProfileError {
  type: typeof USER_PROFILE_ERROR;
}

export interface UserProfileSuccess {
  type: typeof VENDOR_PROFILE_SUCCESS;
  payload: {
    id: string;
    name: string;
    category: string;
    video: string;
    rating: string;
    reviews: string;
    fans: string;
    imageURL: string;
    bio: string;
    online: string;
  };
}

export type VendorProfileTypes = VendorProfileLoading | VendorProfileError | VendorProfileSuccess;
export type UserProfileTypes = UserProfileLoading | UserProfileError | UserProfileSuccess;
