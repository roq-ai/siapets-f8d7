import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { portalValidationSchema } from 'validationSchema/portals';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.portal
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getPortalById();
    case 'PUT':
      return updatePortalById();
    case 'DELETE':
      return deletePortalById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getPortalById() {
    const data = await prisma.portal.findFirst(convertQueryToPrismaUtil(req.query, 'portal'));
    return res.status(200).json(data);
  }

  async function updatePortalById() {
    await portalValidationSchema.validate(req.body);
    const data = await prisma.portal.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deletePortalById() {
    const data = await prisma.portal.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
