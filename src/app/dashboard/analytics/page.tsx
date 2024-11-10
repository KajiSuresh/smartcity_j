import { AddDataDialog } from "./model/add-data-dialog"
import { columns } from "./model/columns"
import { DataTable } from "./model/data-table"

const data = [
  {
    id: "1",
    date: "2024-03-20",
    name: "Product A",
    category: "Electronics",
    amount: 299.99,
    status: "completed",
  },
  {
    id: "2",
    date: "2024-03-19",
    name: "Product B",
    category: "Clothing",
    amount: 59.99,
    status: "pending",
  },
  // Add more sample data as needed
]


export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <AddDataDialog />
      </div>
      <div className="border rounded-lg">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}