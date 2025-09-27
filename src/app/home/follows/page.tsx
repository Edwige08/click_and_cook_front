'use client';

import dynamic from 'next/dynamic'

// Import dynamique qui désactive le SSR
const FollowsPageClient = dynamic(() => import('../../../components/FollowsClient'), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      <p className="mt-2 text-gray-600">Chargement...</p>
    </div>
  )
})

export default function FollowsPage() {
  return <FollowsPageClient />
}