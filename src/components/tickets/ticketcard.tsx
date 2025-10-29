import { useState } from "react";
import type { Ticket } from "../../types/types";

interface TicketCardProps {
  ticket: Ticket;
  onEdit: (ticket: Ticket) => void;
  onDelete: (id: number) => void;
}

const TicketCard = ({ ticket, onEdit, onDelete }: TicketCardProps) => {
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const handleDelete = (): void => {
    onDelete(ticket.id);
    setShowConfirm(false);
  };

  const getStatusClasses = (status: string): string => {
    switch (status) {
      case "OPEN":
        return "bg-green-100 text-green-900";
      case "IN_PROGRESS":
        return "bg-amber-100 text-amber-900";
      case "CLOSED":
        return "bg-green-100 text-green-950";
      default:
        return "bg-foreground text-gray-600";
    }
  };

  const getPriorityClasses = (priority: string): string => {
    switch (priority) {
      case "HIGH":
        return "bg-red-100 text-error";
      case "MEDIUM":
        return "bg-amber-100 text-amber-950";
      case "LOW":
        return "bg-secondary/60 text-foreground";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-secondary/20 rounded-lg shadow-md p-6 relative hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-secondary flex-1 mr-2">
          {ticket.title}
        </h3>
        <div className="flex gap-2 shrink-0">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium uppercase ${getStatusClasses(
              ticket.status
            )}`}
          >
            {ticket.status.replace("_", " ")}
          </span>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium uppercase ${getPriorityClasses(
              ticket.priority
            )}`}
          >
            {ticket.priority}
          </span>
        </div>
      </div>

      <p className="text-foreground mb-4 min-h-12">
        {ticket.description || ""}
      </p>

      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <span className="text-xs text-foreground/70">
          Created: {new Date(ticket.createdAt).toLocaleDateString("en-NG")}
        </span>
        <span className="text-xs bg-secondary/20 px-1 py-0.5 rounded-md">
          ticket_{ticket.id}
        </span>
        <div className="flex space-x-2">
          <button
            className="px-3 py-1 border border-secondary text-secondary rounded-md hover:bg-primary hover:text-white transition-colors text-sm font-medium cursor-pointer"
            onClick={() => onEdit(ticket)}
          >
            Edit
          </button>
          <button
            className="border border-red-300 px-3 py-1 cursor-pointer text-white rounded-md hover:bg-red-600 transition-colors text-sm font-medium"
            onClick={() => setShowConfirm(true)}
          >
            Delete
          </button>
        </div>
      </div>

      {showConfirm && (
        <article className="fixed top-0 left-0 w-full h-screen z-50 flex justify-center items-center bg-black/60">
          <div className=" inset-0 bg-secondary bg-opacity-95 rounded-lg flex flex-col items-center justify-center p-6 animate-fade-in min-h-30">
            <p className="text-gray-800 mb-4 text-center">
              Are you sure you want to delete this ticket?
            </p>
            <div className="flex space-x-3">
              <button
                className="px-4 py-2 bg-primary text-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </button>
              <button
                className="border px-4 py-2 bg-error text-white rounded-md hover:bg-red-600 transition-colors font-medium"
                onClick={handleDelete}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </article>
      )}
    </div>
  );
};

export default TicketCard;
