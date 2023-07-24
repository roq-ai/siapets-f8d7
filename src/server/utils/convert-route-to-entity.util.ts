const mapping: Record<string, string> = {
  animals: 'animal',
  organizations: 'organization',
  portals: 'portal',
  tutors: 'tutor',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
