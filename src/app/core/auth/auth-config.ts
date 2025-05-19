// import { AuthConfig } from "angular-oauth2-oidc";
import { environment } from "../../../environments/environment";

export const authConfig = {
	// Url of the Identity Provider
	// issuer: environment.issuer,
	requireHttps: true,

	// URL of the SPA to redirect the user to after login
	redirectUri: environment.redirectUri,

	// URL of the SPA to redirect the user after silent refresh
	postLogoutRedirectUri: environment.redirectUri,
};
