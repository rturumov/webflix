import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/serials/api')({
  component: () => <div>Hello /serials/api!</div>
})