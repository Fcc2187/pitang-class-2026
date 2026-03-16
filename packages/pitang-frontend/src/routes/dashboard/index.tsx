import { createFileRoute } from "@tanstack/react-router";
import { Activity, CreditCard, DollarSign, Users, ArrowUpRight, ArrowDownRight } from "lucide-react";

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Total Revenue", value: "$45,231.89", icon: <DollarSign className="h-4 w-4 text-muted-foreground" />, trend: "+20.1%", positive: true },
          { title: "Subscriptions", value: "+2350", icon: <Users className="h-4 w-4 text-muted-foreground" />, trend: "+180.1%", positive: true },
          { title: "Sales", value: "+12,234", icon: <CreditCard className="h-4 w-4 text-muted-foreground" />, trend: "+19%", positive: true },
          { title: "Active Now", value: "+573", icon: <Activity className="h-4 w-4 text-muted-foreground" />, trend: "-2.4%", positive: false },
        ].map((stat, i) => (
          <div key={i} className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <h3 className="tracking-tight text-sm font-medium">{stat.title}</h3>
              {stat.icon}
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs flex items-center gap-1 ${stat.positive ? 'text-emerald-500' : 'text-rose-500'}`}>
                {stat.positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                {stat.trend} from last month
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm col-span-4 p-6">
          <div className="flex flex-col space-y-1.5 mb-4">
            <h3 className="font-semibold leading-none tracking-tight">Revenue Analytics</h3>
            <p className="text-sm text-muted-foreground">Detailed view of your revenue streams.</p>
          </div>
          <div className="h-[300px] w-full rounded-md border border-dashed flex items-center justify-center text-muted-foreground bg-muted/20">
            [Chart Placeholder]
          </div>
        </div>
        
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm col-span-3 p-6">
          <div className="flex flex-col space-y-1.5 mb-4">
            <h3 className="font-semibold leading-none tracking-tight">Recent Activity</h3>
            <p className="text-sm text-muted-foreground">You have 4 new notifications.</p>
          </div>
          <div className="space-y-8">
            {[1,2,3,4].map((i) => (
              <div key={i} className="flex items-center">
                <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9 bg-primary/10">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted font-medium text-xs text-primary">
                    {`U${i}`}
                  </span>
                </span>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">User {i}</p>
                  <p className="text-sm text-muted-foreground">user{i}@example.com</p>
                </div>
                <div className="ml-auto font-medium text-sm">+$1,999.00</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
