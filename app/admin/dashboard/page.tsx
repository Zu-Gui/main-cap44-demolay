import { AddNewsForm } from "./add-news-form"
import { NewsList } from "./news-list"
import { AuthCheck } from "./auth-check"
import { AdminHeader } from "./admin-header"

export default function AdminDashboardPage() {
  return (
    <AuthCheck>
      <div className="container mx-auto py-8">
        <AdminHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <AddNewsForm />
          </div>
          <div>
            <NewsList />
          </div>
        </div>
      </div>
    </AuthCheck>
  )
}

