import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Circle, Clock, Plus } from "lucide-react";

export const Route = createFileRoute("/dashboard/todos")({
  component: RouteComponent,
});

function RouteComponent() {
  const todos = [
    { id: 1, title: "Review frontend architecture", status: "completed", date: "Today" },
    { id: 2, title: "Update routing system", status: "completed", date: "Today" },
    { id: 3, title: "Implement user authentication", status: "pending", date: "Tomorrow" },
    { id: 4, title: "Design dashboard layout", status: "pending", date: "Next Week" },
    { id: 5, title: "Write API documentation", status: "pending", date: "Next Week" },
  ];

  return (
    <div className="flex-1 space-y-6 p-8 pt-6 max-w-5xl mx-auto w-full">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Tasks & Todos</h2>
          <p className="text-muted-foreground mt-1">Keep track of your daily tasks and priorities.</p>
        </div>
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md font-medium text-sm transition-colors flex items-center gap-2">
          <Plus className="h-4 w-4" />
          New Task
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {["Todo", "In Progress", "Done"].map((col) => (
          <div key={col} className="flex flex-col gap-4">
            <div className="flex items-center justify-between bg-card border rounded-lg p-3 shadow-sm">
              <h3 className="font-semibold">{col}</h3>
              <span className="bg-muted text-muted-foreground text-xs px-2 py-0.5 rounded-full">
                {col === "Done" ? "2" : col === "Todo" ? "3" : "0"}
              </span>
            </div>
            
            <div className="flex flex-col gap-3">
              {todos
                .filter(todo => (col === "Done" && todo.status === "completed") || (col === "Todo" && todo.status === "pending"))
                .map((todo) => (
                <div key={todo.id} className="bg-card border rounded-xl p-4 shadow-sm hover:shadow-md transition-all group cursor-pointer">
                  <div className="flex items-start gap-3">
                    <button className="mt-0.5 text-muted-foreground group-hover:text-primary transition-colors">
                      {todo.status === "completed" ? (
                        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      ) : (
                        <Circle className="h-5 w-5" />
                      )}
                    </button>
                    <div className="flex-1 space-y-1.5">
                      <p className={`text-sm font-medium leading-none ${todo.status === "completed" ? "line-through text-muted-foreground" : "text-foreground"}`}>
                        {todo.title}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{todo.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {col === "In Progress" && (
                <div className="border-2 border-dashed rounded-xl p-6 text-center text-muted-foreground text-sm">
                  Drag tasks here
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
