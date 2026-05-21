import type { Core, UID } from '@strapi/strapi';

function getPreviewPathname(uid: UID.ContentType, { locale, document }: { locale?: string; document?: any }): string | null {
  if (!document) return null;
  const { slug } = document

  switch (uid) {
    case "api::article.article": {
      if (!slug) return "/blog"
      return `/blog/articles/${slug}`
    }

    default:
      return null
  }
}


const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Admin => {
  const clientUrl = env("CLIENT_URL");
  const previewSecret = env("PREVIEW_SECRET");

  return {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    apiToken: {
      salt: env('API_TOKEN_SALT'),
    },
    preview: {
      enabled: true,
      config: {
        allowedOrigins: [clientUrl],
        async handler(uid: UID.ContentType, { documentId, locale, status }) {
          const document = await strapi.documents(uid).findOne({ 
            documentId, 
            status: status as "draft" | "published" 
          })
          const pathname = getPreviewPathname(uid, { locale, document })

          if (!pathname) return null;

          const urlSearchParams = new URLSearchParams({
            url: pathname,
            secret: previewSecret,
            status: String(status)
          })

          return `${clientUrl}/api/preview?${urlSearchParams.toString()}`
        }
      }
    },
    transfer: {
      token: {
        salt: env('TRANSFER_TOKEN_SALT'),
      },
    },
    secrets: {
      encryptionKey: env('ENCRYPTION_KEY'),
    },
    flags: {
      nps: env.bool('FLAG_NPS', true),
      promoteEE: env.bool('FLAG_PROMOTE_EE', true),
    },
  }

};

export default config;
