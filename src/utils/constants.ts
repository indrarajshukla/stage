const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL;


export const API_URL = backendBaseUrl
export const MAX_RESULTS = 10;
export const DEFAULT_TIMEOUT = 5000;
// Add more constants here as needed

export const AppBranding = "Stage";
export enum AppThemeGreen {
    Theme = "green",
    Background = "#F8FAF6",
}
export enum AppThemeTeal {
    Theme = "teal",
    Background = "#F1F8F9",
}