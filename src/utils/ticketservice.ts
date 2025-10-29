import type { Ticket, TicketFormData } from "../types/types";

// Generate unique ticket ID
const generateId = (): number => Date.now();

// Get all tickets from localStorage
export const getTickets = (): Ticket[] => {
  const storedTickets = localStorage.getItem("tickets");
  return storedTickets ? JSON.parse(storedTickets) : [];
};

// Save tickets back to localStorage
const saveTickets = (tickets: Ticket[]): void => {
  localStorage.setItem("tickets", JSON.stringify(tickets));
};

// Create and store a new ticket
export const createTicket = (data: TicketFormData): Ticket => {
  const newTicket: Ticket = {
    id: generateId(),
    title: data.title,
    description: data.description ?? "", // fallback to empty string if not provided
    status: data.status,
    priority: data.priority,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const existingTickets = getTickets();
  const updatedTickets = [...existingTickets, newTicket];
  saveTickets(updatedTickets);

  return newTicket;
};
