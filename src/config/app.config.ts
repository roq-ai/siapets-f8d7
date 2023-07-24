interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administradordo Sistema'],
  customerRoles: [],
  tenantRoles: ['Administradordo Sistema'],
  tenantName: 'Organization',
  applicationName: 'SIAPETS',
  addOns: ['file'],
};
