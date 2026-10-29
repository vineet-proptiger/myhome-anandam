import { SITE_URL, PROJECT_NAME } from '../../lib/config'

export const metadata = {
  title: `Privacy Policy | ${PROJECT_NAME}`,
  description: `Privacy policy and terms of use for ${PROJECT_NAME}.`,
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: `Privacy Policy | ${PROJECT_NAME}`,
    description: `Privacy policy and terms of use for ${PROJECT_NAME}.`,
    url: `${SITE_URL}/privacy-policy`,
    type: 'website',
  },
}

export default function PrivacyPolicyLayout({ children }) {
  return children
}
