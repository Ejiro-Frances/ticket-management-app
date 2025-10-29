export type TicketStatus = "OPEN" | "IN_PROGRESS" | "CLOSED";
export type TicketPriority = "LOW" | "MEDIUM" | "HIGH";

export interface Ticket {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: string;
  createdAt: string;
  updatedAt: string;
}

export type TicketFormData = {
  title: string;
  description?: string;
  status: TicketStatus;
  priority: TicketPriority;
};
